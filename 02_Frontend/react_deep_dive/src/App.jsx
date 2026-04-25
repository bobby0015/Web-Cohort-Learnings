const App = () => {
  return (
    <div>
      <Header title="My name is Divyam" />
      <Header title="My name is Chauhan" />
    </div>
  )
}

const Header = (props) => {
  return <div>
    {props.title}
  </div>
}

export default App
