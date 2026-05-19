import {
  Activity,
  CheckCircle2,
  GitBranch,
  PlugZap,
  RadioTower,
  ServerCog,
} from 'lucide-react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const activityData = [
  { day: 'Mon', requests: 920, success: 890 },
  { day: 'Tue', requests: 1240, success: 1190 },
  { day: 'Wed', requests: 1080, success: 1042 },
  { day: 'Thu', requests: 1510, success: 1468 },
  { day: 'Fri', requests: 1780, success: 1725 },
  { day: 'Sat', requests: 1320, success: 1282 },
  { day: 'Sun', requests: 1640, success: 1596 },
]

const metrics = [
  {
    label: 'Active Integrations',
    value: '12',
    trend: '+3 this week',
    icon: PlugZap,
    tone: 'teal',
  },
  {
    label: 'Requests',
    value: '9.4k',
    trend: '+18.2%',
    icon: RadioTower,
    tone: 'blue',
  },
  {
    label: 'Success Rate',
    value: '98.6%',
    trend: '0.7% above target',
    icon: CheckCircle2,
    tone: 'green',
  },
  {
    label: 'Workflows Running',
    value: '27',
    trend: '6 scheduled',
    icon: GitBranch,
    tone: 'amber',
  },
]

const platformStatus = [
  { name: 'API Gateway', status: 'Operational', load: '42%' },
  { name: 'Workflow Engine', status: 'Operational', load: '57%' },
  { name: 'Event Queue', status: 'Healthy', load: '31%' },
  { name: 'SQLite Store', status: 'Synced', load: '18%' },
]

const integrationSummary = [
  { name: 'GitHub', count: 4, state: 'Connected' },
  { name: 'OpenAI', count: 3, state: 'Running' },
  { name: 'Stripe', count: 2, state: 'Connected' },
  { name: 'Slack', count: 3, state: 'Watching' },
]

function Dashboard() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">FlowSync Operations</p>
          <h1>Dashboard</h1>
        </div>
        <div className="system-pill">
          <span />
          Platform online
        </div>
      </header>

      <section className="metrics-grid" aria-label="Dashboard metrics">
        {metrics.map((metric) => {
          const Icon = metric.icon

          return (
            <article className="metric-card" data-tone={metric.tone} key={metric.label}>
              <div className="metric-icon">
                <Icon size={20} aria-hidden="true" />
              </div>
              <p>{metric.label}</p>
              <strong>{metric.value}</strong>
              <span>{metric.trend}</span>
            </article>
          )
        })}
      </section>

      <section className="dashboard-grid">
        <article className="chart-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Daily activity</p>
              <h2>Requests and successful runs</h2>
            </div>
            <Activity size={22} aria-hidden="true" />
          </div>

          <div className="chart-frame">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData} margin={{ top: 12, right: 12, left: -16, bottom: 0 }}>
                <defs>
                  <linearGradient id="requestsGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity={0.26} />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="successGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#0f766e" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#0f766e" stopOpacity={0.01} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" vertical={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    border: '1px solid #dbe1ea',
                    borderRadius: 8,
                    boxShadow: '0 16px 40px rgba(15, 23, 42, 0.12)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="requests"
                  name="Requests"
                  stroke="#2563eb"
                  strokeWidth={2}
                  fill="url(#requestsGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="success"
                  name="Success"
                  stroke="#0f766e"
                  strokeWidth={2}
                  fill="url(#successGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </article>

        <aside className="status-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Platform</p>
              <h2>General status</h2>
            </div>
            <ServerCog size={22} aria-hidden="true" />
          </div>

          <div className="status-list">
            {platformStatus.map((item) => (
              <div className="status-row" key={item.name}>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.status}</span>
                </div>
                <span className="load">{item.load}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="summary-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Connected services</p>
            <h2>Integration summary</h2>
          </div>
        </div>

        <div className="integration-strip">
          {integrationSummary.map((item) => (
            <div className="integration-item" key={item.name}>
              <strong>{item.name}</strong>
              <span>{item.count} workflows</span>
              <em>{item.state}</em>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Dashboard
