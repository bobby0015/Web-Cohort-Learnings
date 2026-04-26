import { memo, useState } from "react"

const App = () => {
  const [title, setTitle] = useState('Divyam Chauhan')

  const updateTitle = () => {
    setTitle(Math.random)
  }

  return (
    <>
      <button onClick={updateTitle}>Click me to update title</button>
      <Header title={`My name is ${title}`} />
      <Header title='My name is Nishant Chauhan' />
      <Header title='My name is Nishant Chauhan' />
      <Header title='My name is Nishant Chauhan' />
      <Header title='My name is Nishant Chauhan' />
      <Header title='My name is Nishant Chauhan' />
    </>
  )
}

const Header = memo(({title}) => {
  console.log("Rendered:", title);
  return <div>{title}</div>
})

export default App
