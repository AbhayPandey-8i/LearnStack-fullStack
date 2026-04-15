import { useState } from 'react'
import './App.css'
import Login from './pages/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
      <h1 className='text-black'>Hello</h1>
      <Login/>
      
    </div>
  )
}

export default App
