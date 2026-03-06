import api from './axios'
export const fetchAllResponses = () =>
  api.get('/form/responses/').then(r => r.data)

export const saveMetricResponse = (metricId, metricType, payload) =>
  api.post('/form/response/save/', {
    metric_id:   metricId,
    metric_type: metricType,
    saved:       true,
    ...payload,
  }).then(r => r.data)

export const deleteMetricResponse = (metricId) =>
  api.delete(`/form/response/${encodeURIComponent(metricId)}/`)

export const uploadDocument = (metricId, file) => {
  const fd = new FormData()
  fd.append('metric_id', metricId)
  fd.append('file', file)
  return api.post('/form/document/upload/', fd, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then(r => r.data)
}

export const fetchDocuments = (metricId) =>
  api.get(`/form/documents/${encodeURIComponent(metricId)}/`).then(r => r.data)

export const deleteDocument = (docId) =>
  api.delete(`/form/document/${docId}/`)

export const fetchSettings = () =>
  api.get('/form/settings/').then(r => r.data)

export const saveSettings = (data) =>
  api.post('/form/settings/', data).then(r => r.data)

export const fetchCompletion = () =>
  api.get('/form/completion/').then(r => r.data)