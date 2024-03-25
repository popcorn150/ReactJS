import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => setColor('red')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: 'red', color: 'white' }}>
            Red</button>
          <button
            onClick={() => setColor('green')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: 'green', color: 'white' }}>
            Green</button>
          <button
            onClick={() => setColor('purple')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: 'purple', color: 'white' }}>
            Purple</button>
          <button
            onClick={() => setColor('yellow')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: 'yellow', color: 'white' }}>
            Yellow</button>
          <button
            onClick={() => setColor('pink')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: 'pink', color: 'white' }}>
            Pink</button>
          <button
            onClick={() => setColor('gold')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: 'gold', color: 'white' }}>
            Gold</button>
          <button
            onClick={() => setColor('violet')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: 'violet', color: 'white' }}>
            Violet</button>
          <button
            onClick={() => setColor('blue')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: 'blue', color: 'white' }}>
            Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
