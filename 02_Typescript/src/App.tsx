

const App = () => {
  return (
    <>
      <Todo title='My todo' desc='This is my todo' success={false} />
    </>
  )
}

export default App

interface TodoProp {
  title: string,
  desc: string,
  success: boolean
}

const Todo = (prop: TodoProp) => {
  return <div>
    <h1>{prop.title}</h1>
    <h1>{prop.desc}</h1>
    <h1>{prop.success === true ? 'Completed' : "Pending"}</h1>
  </div>
}