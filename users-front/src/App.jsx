import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setCount(res.data))

  }, [])

  return (
    <div className="App">
      {
        count.map(item => <h1 key={item.id}>{item.name}</h1>)
      }
    </div>
  )
}

export default App
