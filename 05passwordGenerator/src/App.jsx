import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, serNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>
          Password Changer
          </h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
            type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            
            />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          </div>
      </div>
    </>
  )
}

export default App
