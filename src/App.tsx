import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';
import { useStaticLocalStorage } from './useStaticLocalStorage';

function App() {
  const [count, setCount] = useState(0)
  const [value, { setItem, removeItem }] = useLocalStorage('some-key', '');
  const [staticValue, { setStaticItem, removeStaticItem }] = useStaticLocalStorage('some-static-key');

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
      <p>Значение из LocalStorage: {value}</p>
      <div>
        <button onClick={() => setItem('new storage value')}>Задать значение</button>
        <button onClick={() => removeItem()}>Удалить значение</button>
      </div>
    </div>
      <div className="card">
      <p>Значение из StaticLocalStorage: {staticValue}</p>
      <div>
        <button onClick={() => setStaticItem('new static storage value')}>Задать значение</button>
        <button onClick={() => removeStaticItem()}>Удалить значение</button>
      </div>
    </div>
    </>
  )
}

export default App
