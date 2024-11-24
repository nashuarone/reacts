import { useState } from 'react'
import { useViewportSize } from './useViewportSize'

function App() {
  const [count, setCount] = useState(0)
  const { height, width } = useViewportSize()

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>Width: {width}, height: {height}</div>
    </>
  )
}

export default App
