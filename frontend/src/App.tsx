import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Integrations from './pages/Integrations'

const navItems = ['Dashboard', 'Integrations'] as const

function App() {
  const [activePage, setActivePage] = useState<(typeof navItems)[number]>('Dashboard')

  return (
    <>
      <nav className="app-nav" aria-label="Main navigation">
        <strong>FlowSync</strong>
        <div>
          {navItems.map((item) => (
            <button
              aria-current={activePage === item ? 'page' : undefined}
              key={item}
              onClick={() => setActivePage(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {activePage === 'Dashboard' ? <Dashboard /> : <Integrations />}
    </>
  )
}

export default App
