import React, { useState } from "react"

const App = () => {

  const [value,setValue] = useState('Divyam')

  const randomValues = () => {
    setValue(Math.random)
  }

  return (
    <React.Fragment>
      <button onClick={randomValues}>Click me to change the name</button>
      <Header title={`My name is ${value}`} />
      <Header title="My name is Chauhan" />
    </React.Fragment>
  )
}

const Header = (props) => {
  return <div>
    {props.title}
  </div>
}

export default App
