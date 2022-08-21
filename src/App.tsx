import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const onChangeCallback = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length)
  }

  return (
    <div className="App">
      <div className="header-container">
        <h1>Char Counter</h1>
      </div>
      <div className="input-area-container">
        <h3>Input Area</h3>
        <textarea name="input-area" id="input-area" onChange={(e) => {onChangeCallback(e)}}></textarea>
      </div>
      <div className='count-area-container'>
        <p>count: {count}</p>
      </div>
    </div>
  )
}

export default App
