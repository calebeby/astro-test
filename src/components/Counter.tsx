import { useState } from 'preact/hooks'
import { blue, lightBlue } from './color'

const wrapperStyles = css`
  background: ${blue};
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  align-content: center;
  justify-content: center;
`

const buttonStyles = css`
  background: ${lightBlue};
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
`

const counterStyles = css`
  padding: 20px;
  font-size: 20px;
  margin: 0;
`

export default function Counter({ children }) {
  const [count, setCount] = useState(0)
  const add = () => setCount((i) => i + 1)
  const subtract = () => setCount((i) => i - 1)

  return (
    <>
      <div class={wrapperStyles}>
        <button class={buttonStyles} onClick={subtract}>
          -
        </button>
        <pre class={counterStyles}>{count}</pre>
        <button class={buttonStyles} onClick={add}>
          +
        </button>
      </div>
    </>
  )
}
