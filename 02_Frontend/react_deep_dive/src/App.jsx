import { useState } from "react"

const App = () => {

  return (
    <>
      <ButtonWithHeader />
      <Header title={'My name is Nishant Chauhan'} />
    </>
  )
}

const ButtonWithHeader = () => {
  const [title, setTitle] = useState('Divyam Chauhan')

  const updateTitle = () => {
    setTitle(Math.random)
  }

  return <>
    <button onClick={updateTitle}>Click me to update title</button>
    <Header title={`My name is ${title}`} />
  </>

}

const Header = (props) => {
  return <div>
    {props.title}
  </div>
}

export default App
