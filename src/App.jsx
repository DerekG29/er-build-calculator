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
        <div className='container'>
          <div className='row'>
            <p>Vigor: {stats.vig} | HP: {calc.base_hp(stats.vig)}</p>
            <button onClick={() => setStats({ ...stats, vig: stats.vig + 1 })}>
              +
            </button>
            <button onClick={() => setStats({ ...stats, vig: stats.vig - 1 })}>
              -
            </button>
          </div>
          <p>Mind: {stats.mnd} | FP: {calc.base_fp(stats.mnd)}</p>
          <p>Endurance: {stats.end} | Stamina: {calc.base_fp(stats.end)}</p>
        </div>       
      </div>
    </>
  )
}

export default App
