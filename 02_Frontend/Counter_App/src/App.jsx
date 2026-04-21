import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)


  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton (props) {

  function updateCount() {
    props.setCount(props.count + 1)
  }

  return <button onClick={updateCount}>
    Counter {props.count}
  </button>
}

export default App
