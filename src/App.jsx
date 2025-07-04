import { useState } from 'react'
import { calc } from './utils';
import './App.css'

const initialStats = {
  vig: 10,
  mnd: 10,
  end: 10,
}

function App() {
  const [stats, setStats] = useState(initialStats)

  return (
    <>
      <h1>Elden Ring Build Calculator</h1>
      <div className="card">
        <button onClick={() => setStats({ ...stats, vig: stats.vig + 1 })}>
          Increase Vigor
        </button>
        <button onClick={() => setStats({ ...stats, vig: stats.vig - 1 })}>
          Decrease Vigor
        </button>
        <p>Vigor: {stats.vig} | HP: {calc.base_hp(stats.vig)}</p>
      </div>
    </>
  )
}

export default App
