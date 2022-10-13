import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className={styles.App}>
      <h2 className="text-2xl text-sky-500 mb-4">Sub App</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
  )
}

export default App
