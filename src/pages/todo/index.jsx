import TodoList from "../../components/todo-list/TodoList"


const Todo = () => {
  return (
    <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Todo list</h1>
        <TodoList/>
    </div>
  )
}

export default Todo