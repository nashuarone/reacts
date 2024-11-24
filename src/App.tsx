import { useState } from "react";
import { useWindowScroll } from "./useWindowScroll";

function App() {
  const [count, setCount] = useState(0);
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div style={{ width: "2000px", height: "2000px" }}>
        <div style={{ position: "fixed", top: "50px", left: '10px' }}>
          <p>
            Scroll position x: {scroll.x}, y: {scroll.y}
          </p>
          <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
        </div>
      </div>
    </>
  );
}

export default App;
