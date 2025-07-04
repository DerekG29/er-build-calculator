import { useState } from 'react'
import { calc } from './utils';
import './App.css'

function App() {
  const [vigor, setVigor] = useState(1)

  return (
    <>
      <h1>Elden Ring Build Calculator</h1>
      <div className="card">
        <button onClick={() => setVigor((vigor) => vigor + 1)}>
          vigor is {vigor}
        </button>
        <p>HP is {calc.base_hp(vigor)}</p>
      </div>
    </>
  )
}

export default App
