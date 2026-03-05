import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { Spinner } from '../components/ui'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', email: '', password: '', password2: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (form.password !== form.password2) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    try {
      await register(form.username, form.email, form.password, form.password2)
      navigate('/dashboard')
    } catch (err) {
      const data = err.response?.data
      setError(typeof data === 'object' ? Object.values(data).flat().join(' ') : 'Registration failed.')
    } finally {
      setLoading(false)
    }
  }

  const fields = [
    { key: 'username', label: 'Username', type: 'text', placeholder: 'Choose a username' },
    { key: 'email', label: 'Email Address', type: 'email', placeholder: 'iqac@college.edu' },
    { key: 'password', label: 'Password', type: 'password', placeholder: '•••••••• (min 6 chars)' },
    { key: 'password2', label: 'Confirm Password', type: 'password', placeholder: '••••••••' },
  ]

  return (
    <div style={s.page}>
      <div style={s.mesh} />
      <div style={s.card}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={s.logo}>🎓</div>
          <h1 style={s.title}>Create Account</h1>
          <p style={s.sub}>Register for the IQAC portal</p>
        </div>

        {error && (
          <div style={s.error}><span>⚠</span> {error}</div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {fields.map(f => (
            <div key={f.key}>
              <label style={s.label}>{f.label}</label>
              <input
                style={s.input} type={f.type} placeholder={f.placeholder}
                value={form[f.key]}
                onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                required
                onFocus={e => e.target.style.borderColor = '#6366f1'}
                onBlur={e => e.target.style.borderColor = '#1e293b'}
              />
            </div>
          ))}
          <button type="submit" disabled={loading} style={{ ...s.btn, marginTop: 6 }}>
            {loading ? <Spinner size={18} /> : 'Create Account'}
          </button>
        </form>

        <p style={s.link}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#818cf8', fontWeight: 600, textDecoration: 'none' }}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

const s = {
  page: {
    minHeight: '100vh', background: '#030a12',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    position: 'relative', overflow: 'hidden',
    padding: '20px',
  },
  mesh: {
    position: 'absolute', inset: 0, zIndex: 0,
    background: 'radial-gradient(ellipse at 20% 50%, #1e1b4b30 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #0c1a3a40 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  card: {
    position: 'relative', zIndex: 1,
    width: '100%', maxWidth: 420,
    background: '#0a1520', border: '1px solid #1e3a5f',
    borderRadius: 20, padding: '36px 36px',
    boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
  },
  logo: {
    width: 54, height: 54, borderRadius: 14,
    background: 'linear-gradient(135deg,#4f46e5,#7c3aed)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 26, margin: '0 auto 12px',
    boxShadow: '0 8px 24px #4f46e540',
  },
  title: { margin: '0 0 4px', fontSize: 20, color: '#f1f5f9', fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif" },
  sub: { margin: 0, color: '#475569', fontSize: 13 },
  label: { display: 'block', fontSize: 11, color: '#64748b', marginBottom: 5, letterSpacing: 0.5, textTransform: 'uppercase', fontWeight: 600 },
  input: {
    width: '100%', padding: '10px 14px',
    background: '#060d18', border: '1.5px solid #1e293b',
    borderRadius: 9, color: '#e2e8f0', fontSize: 14, outline: 'none',
    boxSizing: 'border-box', fontFamily: "'Plus Jakarta Sans', sans-serif",
    transition: 'border-color .2s',
  },
  btn: {
    width: '100%', padding: '12px 0', borderRadius: 9,
    background: 'linear-gradient(135deg,#4f46e5,#7c3aed)',
    color: '#fff', border: 'none', cursor: 'pointer',
    fontWeight: 700, fontSize: 15,
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    boxShadow: '0 4px 14px #4f46e540',
  },
  error: {
    background: '#1a0000', border: '1px solid #7f1d1d',
    borderRadius: 8, padding: '10px 14px', marginBottom: 14,
    color: '#fca5a5', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8,
  },
  link: { textAlign: 'center', marginTop: 18, marginBottom: 0, color: '#475569', fontSize: 13 },
}
