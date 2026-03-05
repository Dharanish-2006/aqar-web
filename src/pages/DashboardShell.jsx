import { useState, useCallback } from 'react'
import { useAuth } from '../context/AuthContext'
import { ResponseProvider } from '../context/ResponseContext'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import Dashboard from './dashboard'
import CriterionPage from './criteria/CriterionPage'
import Reports from './reports'
import Settings from './settings'
import { Toast, Spinner } from '../components/ui'
import { CRITERIA } from '../utils/naacData'

const criterionKeys = CRITERIA.map(c => c.key)

function AppShell() {
  const [section, setSection] = useState('dashboard')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = useCallback((msg, type = 'success') => {
    setToast({ msg, type, id: Date.now() })
  }, [])

  const navigate = useCallback((key) => setSection(key), [])

  const renderContent = () => {
    if (section === 'dashboard') return <Dashboard onNavigate={navigate} />
    if (section === 'reports') return <Reports onToast={showToast} />
    if (section === 'settings') return <Settings onToast={showToast} />
    if (criterionKeys.includes(section)) return <CriterionPage criterionKey={section} onToast={showToast} />
    return <Dashboard onNavigate={navigate} />
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#050c16' }}>
      <Sidebar
        activeSection={section}
        onNavigate={navigate}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(c => !c)}
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header
          activeSection={section}
          onToggleSidebar={() => setSidebarCollapsed(c => !c)}
        />
        <main style={{
          flex: 1, padding: '26px 28px',
          overflowY: 'auto', overflowX: 'hidden',
        }}>
          {renderContent()}
        </main>
      </div>

      {toast && (
        <Toast
          key={toast.id}
          msg={toast.msg}
          type={toast.type}
          onDone={() => setToast(null)}
        />
      )}
    </div>
  )
}

export default function DashboardPage() {
  return (
    <ResponseProvider>
      <AppShell />
    </ResponseProvider>
  )
}
