import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import BemVindo from './BemVindo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
          <p>Componente de classe</p>
      </header>
    </div>
  )
}

export default App
