import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(4);
  const [todo, setTodo] = useState([
    {
      title: 'My first Todo',
      descriptiom: 'This is the descritption of my first Todo',
    },
    {
      title: 'My Second Todo',
      descriptiom: 'This is the descritption of my second Todo',
    },
    {
      title: 'My third Todo',
      descriptiom: 'This is the descritption of my third Todo',
    },
  ])

  const addTodo = () => {
    setCount(count + 1)
    setTodo([...todo, {
      title: `My ${count} Todo`,
      descriptiom: `This is the descritption of my ${count} Todo`
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Create a new todo</button>
      {
        todo.map((todo, index) => {
          console.log(index)
          return <Todo title={todo.title} description={todo.descriptiom} key={index} />
        })
      }
    </>
  )
}

const Todo = ({ title, description }) => {
  return <div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
}

export default App
