import './App.css'
import { useEffect, useState } from 'react'

// const App = () => {
//   const message = 'Hello!'
//   const [count, setCount] = useState(0)
//   const [name, setName] = useState('John')

//   return (
//     <div className='App'>
//       <h1>{message}</h1>
//       <h1>{name} clicked {count} times!</h1>
//       <Counter setCount={setCount} count={count}/>
//     </div>
//   )
// }

// const Counter = ({count, setCount}) => {
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Click Me!</button>
//     </div>
//   )
// }

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('John')

  useEffect(() => {
    console.log(`Component mounted`)
  }, [])

  return (
    <div>
      <p>Hi {name} you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default App
