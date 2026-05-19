import {
  Bot,
  CheckCircle2,
  MessageSquare,
  GitBranch,
  RefreshCw,
  Settings,
  TriangleAlert,
} from 'lucide-react'

const integrations = [
  {
    name: 'GitHub',
    status: 'Connected',
    lastSync: '2 minutes ago',
    action: 'Configure',
    icon: GitBranch,
  },
  {
    name: 'OpenAI',
    status: 'Syncing',
    lastSync: 'Running now',
    action: 'View sync',
    icon: Bot,
  },
  {
    name: 'Stripe',
    status: 'Connected',
    lastSync: '14 minutes ago',
    action: 'Configure',
    icon: Settings,
  },
  {
    name: 'Slack',
    status: 'Error',
    lastSync: '1 hour ago',
    action: 'Resolve',
    icon: MessageSquare,
  },
]

const statusIcon = {
  Connected: CheckCircle2,
  Syncing: RefreshCw,
  Error: TriangleAlert,
}

function Integrations() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Integration management</p>
          <h1>Integrations</h1>
        </div>
        <button className="primary-action" type="button">
          Add integration
        </button>
      </header>

      <section className="integrations-grid" aria-label="Service integrations">
        {integrations.map((integration) => {
          const Icon = integration.icon
          const StatusIcon = statusIcon[integration.status as keyof typeof statusIcon]

          return (
            <article className="integration-card" key={integration.name}>
              <div className="integration-card-header">
                <div className="integration-brand">
                  <span className="service-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h2>{integration.name}</h2>
                    <p>API connection</p>
                  </div>
                </div>
                <span className="status-badge" data-status={integration.status.toLowerCase()}>
                  <StatusIcon size={14} aria-hidden="true" />
                  {integration.status}
                </span>
              </div>

              <div className="integration-meta">
                <span>Last synchronization</span>
                <strong>{integration.lastSync}</strong>
              </div>

              <button className="secondary-action" type="button">
                {integration.action}
              </button>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default Integrations
