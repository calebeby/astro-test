import { useState } from 'preact/hooks'
import './counter.css'
import { color } from './color'

export default function Counter({ children }) {
  const [count, setCount] = useState(0)
  const add = () => setCount((i) => i + 1)
  const subtract = () => setCount((i) => i - 1)

  return (
    <>
      <div
        class={css`
          background: ${color};
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: auto;
          align-content: center;
          justify-content: center;
        `}
      >
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="counter-message">{children}</div>
    </>
  )
}
