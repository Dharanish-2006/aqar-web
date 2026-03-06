import axios from 'axios'

const formAxios = axios.create({
  baseURL: 'https://aqar-014n.onrender.com',
})

formAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('access')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export const fetchAllResponses = () =>
  formAxios.get('/form/responses/').then(r => r.data)

export const saveMetricResponse = (metricId, metricType, payload) =>
  formAxios.post('/form/response/save/', {
    metric_id:   metricId,
    metric_type: metricType,
    saved:       true,
    ...payload,
  }).then(r => r.data)

export const deleteMetricResponse = (metricId) =>
  formAxios.delete(`/form/response/${encodeURIComponent(metricId)}/`)

export const uploadDocument = (metricId, file) => {
  const fd = new FormData()
  fd.append('metric_id', metricId)
  fd.append('file', file)
  return formAxios.post('/form/document/upload/', fd, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then(r => r.data)
}

export const fetchDocuments = (metricId) =>
  formAxios.get(`/form/documents/${encodeURIComponent(metricId)}/`).then(r => r.data)

export const deleteDocument = (docId) =>
  formAxios.delete(`/form/document/${docId}/`)

export const fetchSettings = () =>
  formAxios.get('/form/settings/').then(r => r.data)

export const saveSettings = (data) =>
  formAxios.post('/form/settings/', data).then(r => r.data)

export const fetchCompletion = () =>
  formAxios.get('/form/completion/').then(r => r.data)