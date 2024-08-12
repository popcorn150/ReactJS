import { useEffect, useState } from "react";

interface DemoProps { }

export default function Demo({ }: DemoProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`The count is: ${count}`)

    return () => {
      alert('Clean up!');
    }
  }, [count]);

  return (
    <div className="tutorial">
      <div className="count">
        <h1>Count: {count}</h1>
      </div>

      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  )
}
