import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  function updateCount() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={updateCount}>Count {count}</button>
    </div>
  )
}

export default App
