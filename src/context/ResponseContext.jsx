import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useAuth } from "./AuthContext";
import { initResponses } from "../utils/naacData";
import {
  fetchAllResponses,
  saveMetricResponse,
  uploadDocument,
  deleteDocument,
  fetchSettings,
  saveSettings as apiSaveSettings,
} from "../api/formApi";

const ResponseContext = createContext();

export function ResponseProvider({ children }) {
  const { user } = useAuth();

  const [responses, setResponses] = useState(initResponses);
  const [collegeName, setCollegeName] = useState("Your Institution");
  const [aqarYear, setAqarYear] = useState("2023-24");
  const [loading, setLoading] = useState(false);
  const [syncError, setSyncError] = useState(null);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    setSyncError(null);

    Promise.all([fetchAllResponses(), fetchSettings()])
      .then(([serverResponses, serverSettings]) => {
        if (serverResponses?.length) {
          setResponses((prev) => {
            const next = { ...prev };
            serverResponses.forEach((r) => {
              next[r.metric_id] = {
                text: r.text || "",
                data: r.numeric_data || {},
                documents: (r.documents || []).map((d) => ({
                  id: d.id,
                  name: d.original_name,
                  size: d.file_size,
                  ext: d.extension,
                  url: d.url,
                  fromServer: true,
                })),
                saved: r.saved,
                dbId: r.id,
              };
            });
            return next;
          });
        }
        if (serverSettings?.college_name)
          setCollegeName(serverSettings.college_name);
        if (serverSettings?.aqar_year) setAqarYear(serverSettings.aqar_year);
      })
      .catch((err) => {
        console.error("Failed to load from server:", err);
        setSyncError("Could not load saved data — working offline.");
      })
      .finally(() => setLoading(false));
  }, [user]);

  const updateResponse = useCallback((metricId, value) => {
    setResponses((prev) => ({
      ...prev,
      [metricId]: { ...prev[metricId], ...value, saved: false },
    }));
  }, []);

  // ── Save one metric to DB ────────────────────────────────────────────────
  const saveResponse = useCallback(
    async (metricId, metricType) => {
      const current = responses[metricId];
      if (!current) return { success: false };

      const payload =
        metricType === "QlM"
          ? { text: current.text || "", numeric_data: {} }
          : { text: "", numeric_data: current.data || {} };

      try {
        const saved = await saveMetricResponse(metricId, metricType, payload);
        setResponses((prev) => ({
          ...prev,
          [metricId]: { ...prev[metricId], saved: true, dbId: saved.id },
        }));
        return { success: true };
      } catch (err) {
        console.error(`Save failed for ${metricId}:`, err);
        return { success: false, error: err.response?.data || "Save failed" };
      }
    },
    [responses],
  );

  const uploadFile = useCallback(async (metricId, file) => {
    try {
      const doc = await uploadDocument(metricId, file);
      const entry = {
        id: doc.id,
        name: doc.original_name,
        size: doc.file_size,
        ext: doc.extension,
        url: doc.url,
        fromServer: true,
      };
      setResponses((prev) => ({
        ...prev,
        [metricId]: {
          ...prev[metricId],
          documents: [...(prev[metricId]?.documents || []), entry],
        },
      }));
      return { success: true, doc: entry };
    } catch (err) {
      console.error(`Upload failed for ${metricId}:`, err);
      return { success: false, error: err.response?.data || "Upload failed" };
    }
  }, []);

  const removeDocument = useCallback(async (metricId, docId, isServerDoc) => {
    setResponses((prev) => ({
      ...prev,
      [metricId]: {
        ...prev[metricId],
        documents: (prev[metricId]?.documents || []).filter(
          (d) => d.id !== docId,
        ),
      },
    }));
    if (isServerDoc) {
      try {
        await deleteDocument(docId);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const saveCollegeSettings = useCallback(async (name, year) => {
    setCollegeName(name);
    setAqarYear(year);
    try {
      await apiSaveSettings({ college_name: name, aqar_year: year });
      return { success: true };
    } catch (err) {
      console.error("Settings save failed:", err);
      return { success: false };
    }
  }, []);

  const getTotalDocs = () =>
    Object.values(responses).reduce(
      (s, r) => s + (r?.documents?.length || 0),
      0,
    );

  return (
    <ResponseContext.Provider
      value={{
        responses,
        updateResponse,
        saveResponse,
        uploadFile,
        removeDocument,
        collegeName,
        setCollegeName,
        aqarYear,
        setAqarYear,
        saveCollegeSettings,
        getTotalDocs,
        loading,
        syncError,
      }}
    >
      {children}
    </ResponseContext.Provider>
  );
}

export const useResponses = () => useContext(ResponseContext);
