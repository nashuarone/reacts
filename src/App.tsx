import { useState } from "react";
import { useHover } from "./useHover";

function App() {
  const [count, setCount] = useState(0);
  const { hovered, ref } = useHover();

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div ref={ref}>
        {hovered ? "На меня навели мышку" : "Наведи мышкой на меня"}
      </div>
    </>
  );
}

export default App;
