import { useEffect, useState } from "react"

const App = () => {
  const [todos, setTodos] = useState([])
  const [num, setNum] = useState(5)

  const randomNum = () => {
    const randomNumber = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
    console.log(randomNumber)
    setNum(randomNumber)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      randomNum()
      fetch(`https://dummyjson.com/todos?limit=${num}&skip=11`).then(async (res) => {
      const json = await res.json()
      setTodos(json.todos)
    })
    }, 3000)
    
    return () => clearTimeout(timer);
  }, [num])

  return <div className="px-24 py-16">
    <h2 className="font-bold mb-8">All todos listed here :</h2>
    <div className="grid grid-flow-row grid-cols-5 gap-4">
      {
        todos.map((value) => {
          return <Todo desc={value.todo} completed={value.completed} key={value.id} userId={value.userId} />
        })
      }
    </div>
  </div>
}

function Todo({ desc, userId, completed }) {
  return <div className={`rounded-md p-4 shadow-md ${completed ? "bg-amber-100" : "bg-green-100"} w-64`}>
    <h3 className="text-lg">User Id : {userId}</h3>
    <p className="text-sm">{desc}</p>
  </div>
}

export default App
