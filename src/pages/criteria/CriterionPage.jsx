import { getCriterionByKey, getCriterionCompletion, isMetricComplete } from '../../utils/naacData'
import { useResponses } from '../../context/ResponseContext'
import MetricCard from '../../components/metrics/MetricCard'
import { ProgressBar, Card } from '../../components/ui'

export default function CriterionPage({ criterionKey, onToast }) {
  const { responses, updateResponse, saveResponse } = useResponses()
  const criterion = getCriterionByKey(criterionKey)

  if (!criterion) return (
    <div style={{ color: '#64748b', textAlign: 'center', padding: 60, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      Criterion not found.
    </div>
  )

  const { done, total, pct } = getCriterionCompletion(criterion, responses)
  const { color, icon, label, subtitle, metrics } = criterion

  const qlmCount = metrics.filter(m => m.type === 'QlM').length
  const qnmCount = metrics.filter(m => m.type === 'QnM').length

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, #060d18 0%, #0a1520 100%)`,
        border: `1px solid ${color}40`, borderRadius: 16,
        padding: '22px 26px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14, flexShrink: 0,
            background: `${color}20`, border: `1.5px solid ${color}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 24,
          }}>{icon}</div>
          <div>
            <h2 style={{
              margin: '0 0 3px', fontSize: 20, color: '#f1f5f9',
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
            }}>{label}</h2>
            <p style={{ margin: 0, color: '#64748b', fontSize: 13, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{subtitle}</p>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'monospace', fontSize: 28, color, fontWeight: 800 }}>{pct}%</div>
          <div style={{ fontSize: 12, color: '#475569', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {done} of {total} complete
          </div>
        </div>
      </div>

      {/* Progress */}
      <ProgressBar pct={pct} color={color} height={8} />

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 12 }}>
        {[
          { label: 'Total Metrics',      value: total,    color: '#64748b' },
          { label: 'Qualitative (QlM)',  value: qlmCount, color: '#a78bfa' },
          { label: 'Quantitative (QnM)', value: qnmCount, color: '#38bdf8' },
          { label: 'Completed',          value: done,     color },
        ].map(({ label, value, color: c }) => (
          <Card key={label} style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: '#475569', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{label}</span>
            <span style={{ fontFamily: 'monospace', fontSize: 18, color: c, fontWeight: 700 }}>{value}</span>
          </Card>
        ))}
      </div>

      {/* Incomplete list */}
      {done < total && (
        <div style={{
          background: '#0a1520', border: '1px solid #1e3a5f',
          borderRadius: 10, padding: '12px 18px',
          display: 'flex', alignItems: 'flex-start', gap: 10,
        }}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>📋</span>
          <div>
            <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 4 }}>
              Incomplete Metrics
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {metrics.filter(m => !isMetricComplete(m, responses[m.id])).map(m => (
                <span key={m.id} style={{
                  fontFamily: 'monospace', fontSize: 11,
                  background: '#0f172a', border: '1px solid #334155',
                  borderRadius: 4, padding: '2px 8px', color: '#64748b',
                }}>{m.id}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {metrics.map(metric => (
          <MetricCard
            key={metric.id}
            metric={metric}
            response={responses[metric.id] || {}}
            color={color}
            onChange={(val) => updateResponse(metric.id, val)}
            onSave={async () => {
              const result = await saveResponse(metric.id, metric.type)
              if (result?.success) {
                onToast(`Metric ${metric.id} saved ✓`, 'success')
              } else {
                onToast(`Failed to save ${metric.id}`, 'error')
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}