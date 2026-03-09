import axios from 'axios'

const BACKEND = 'https://aqar-014n.onrender.com'

const api = axios.create({ baseURL: BACKEND })

api.interceptors.request.use(config => {
  const token = localStorage.getItem('access')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
const slug = (metricId) => metricId.replace(/\./g, '-')

export const fetchAllResponses = () =>
  api.get('/form/responses/').then(r => r.data)

export const saveMetricRows = (metricId, rows) =>
  api.post(`/form/${slug(metricId)}/`, { rows }).then(r => r.data)

export const addMetricRow    = (metricId, rowData) =>
  api.post(`/form/${slug(metricId)}/`, rowData).then(r => r.data)

export const updateMetricRow = (metricId, rowId, rowData) =>
  api.put(`/form/${slug(metricId)}/${rowId}/`, rowData).then(r => r.data)

export const deleteMetricRow = (metricId, rowId) =>
  api.delete(`/form/${slug(metricId)}/${rowId}/`)

export const uploadDocument = async (metricId, file) => {
  const fd = new FormData()
  fd.append('metric_id', metricId)
  fd.append('file', file)
  const r = await api.post('/form/document/upload/', fd, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return r.data
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