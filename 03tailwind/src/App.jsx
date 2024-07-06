import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-lime-300 bg-blue-950 p-5 rounded-md'>Vite with React</h1>
     <Card username = "lalla" image='https://images.pexels.com/photos/1585716/pexels-photo-1585716.jpeg?auto=compress&cs=tinysrgb&w=600'/>
     <Card post='bitch'/>
    </>
  )
}

export default App
