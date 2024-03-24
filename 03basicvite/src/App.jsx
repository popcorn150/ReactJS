import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card username='Mary' post='Frontend Dev.'/>
    <Card username='Alex' post='Backend Engg.'/>
    <Card />
    </>
  )
}

export default App
