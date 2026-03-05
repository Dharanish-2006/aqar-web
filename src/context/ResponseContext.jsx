import { createContext, useContext, useState, useCallback } from 'react'
import { initResponses } from '../utils/naacData'

const ResponseContext = createContext()

export function ResponseProvider({ children }) {
  const [responses, setResponses] = useState(initResponses)
  const [collegeName, setCollegeName] = useState('Your Institution')
  const [aqarYear, setAqarYear] = useState('2023-24')

  const updateResponse = useCallback((metricId, value) => {
    setResponses(prev => ({ ...prev, [metricId]: value }))
  }, [])

  const saveResponse = useCallback((metricId) => {
    setResponses(prev => ({ ...prev, [metricId]: { ...prev[metricId], saved: true } }))
  }, [])

  const getTotalDocs = () => {
    let count = 0
    Object.values(responses).forEach(r => { count += (r?.documents?.length || 0) })
    return count
  }

  return (
    <ResponseContext.Provider value={{
      responses, updateResponse, saveResponse,
      collegeName, setCollegeName,
      aqarYear, setAqarYear,
      getTotalDocs,
    }}>
      {children}
    </ResponseContext.Provider>
  )
}

export const useResponses = () => useContext(ResponseContext)
