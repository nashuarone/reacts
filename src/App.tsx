import { useState } from "react";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";

const isAuth = false;

function App() {
  const [count, setCount] = useState(0);
  const [sign, setSign] = useState<"signup" | "signin">("signup");

  return (
    <>
      {isAuth ? (
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      ) : (
        <div>
          {sign === "signin" ? (
            <Signin setSign={setSign} onSubmit={() => {}} />
          ) : (
            <Signup setSign={setSign} onSubmit={() => {}} />
          )}
        </div>
      )}
    </>
  );
}

export default App;
