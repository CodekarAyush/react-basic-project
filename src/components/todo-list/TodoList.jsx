import { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "../../store/slices/todoSlice";

const TodoList = () => {

  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a todo task ..."
            className="flex-1 px-4 border rounded-lg focus:outline-none focus:border-blue-500 "
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </form>
      <ul className="space-y-2">
        {todos.map((todo, i) => (
          <li
            key={i}
            className="flex items-center  justify-between p-3 bg-white rounded-lg shadow"
          >
            <span
              className={`flex-1 ${
                todo.complete ? `line-through text-gray-500` : ""
              }`}
            >
              {" "}
              {todo.text}{" "}
            </span>
            <div className="flex gap-2">
              <button onClick={()=> dispatch(toggleTodo(todo.id))} className="p-2 text-green-500 hover:text-green-600 ">
                <FaCheck />
              </button>
              <button className="p-2 text-red-500 hover:text-red-600 ">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
