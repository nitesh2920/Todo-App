import { BsPlus } from "react-icons/bs";


const Todo = () => {
  return (
    <div className="max-w-5xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text uppercase">Todo app</h2>

      <div className="flex items-center mb-4">
        <input type="text" className="flex-grow  p-2 border-b-2 border-gray-300 focus:outline-none focus:border-slate-500 rounded-md" name="addTaskInput"  id="addTaskInput"  placeholder="Enter your task"/>
        <button className="ml-4 p-2 bg-blue-400 text-white rounded hover:bg-blue-700 "><BsPlus/></button>
      </div>
    </div>
  )
}

export default Todo