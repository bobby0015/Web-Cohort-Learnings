import React from "react"

const App = () => {
  return (
    <React.Fragment>
      <Header title="My name is Divyam" />
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
