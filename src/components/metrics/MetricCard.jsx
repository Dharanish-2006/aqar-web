import { useState } from 'react'
import { Badge } from '../ui'
import { isMetricComplete } from '../../utils/naacData'
import QlMForm from './QlMForm'
import QnMForm from './QnMForm'

export default function MetricCard({ metric, response, onChange, onSave, color }) {
  const [open, setOpen] = useState(false)
  const complete = isMetricComplete(metric, response)
  const docCount = response?.documents?.length || 0

  return (
    <div style={{
      background: '#0a1520',
      border: `1px solid ${open ? color + '50' : complete ? '#1a3a1a' : '#162032'}`,
      borderRadius: 12, overflow: 'hidden',
      transition: 'border-color .2s',
      boxShadow: open ? `0 4px 20px ${color}15` : 'none',
    }}>
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: '15px 20px',
          display: 'flex', alignItems: 'center', gap: 14,
          cursor: 'pointer', userSelect: 'none',
        }}
      >
        {/* Status dot */}
        <div style={{
          width: 9, height: 9, borderRadius: '50%', flexShrink: 0,
          background: complete ? '#22c55e' : open ? color : '#334155',
          boxShadow: complete ? '0 0 8px #22c55e80' : open ? `0 0 6px ${color}60` : 'none',
          transition: 'all .3s',
        }} />

        {/* Info */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'monospace', fontSize: 12, color, fontWeight: 700 }}>
              {metric.id}
            </span>
            <Badge type={metric.type} />
            {complete && (
              <span style={{ fontSize: 10, color: '#22c55e', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                ✓ Complete
              </span>
            )}
            {docCount > 0 && (
              <span style={{ fontSize: 10, color: '#64748b', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                📎 {docCount} doc{docCount > 1 ? 's' : ''}
              </span>
            )}
          </div>
          <p style={{
            margin: 0, fontSize: 13, color: '#94a3b8',
            fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.4,
          }}>
            {metric.title}
          </p>
        </div>

        {/* Chevron */}
        <span style={{
          color: '#334155', fontSize: 18, flexShrink: 0,
          transform: open ? 'rotate(180deg)' : 'none',
          transition: 'transform .2s',
        }}>⌄</span>
      </div>

      {/* Body */}
      {open && (
        <div style={{
          padding: '0 20px 20px',
          borderTop: `1px solid ${color}20`,
        }}>
          <div style={{ height: 18 }} />
          {metric.type === 'QlM'
            ? <QlMForm metric={metric} response={response || { text: '', documents: [] }} onChange={onChange} onSave={onSave} color={color} />
            : <QnMForm metric={metric} response={response || { data: {}, documents: [] }} onChange={onChange} onSave={onSave} color={color} />
          }
        </div>
      )}
    </div>
  )
}
