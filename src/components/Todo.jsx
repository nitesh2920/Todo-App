import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateSearchTerm } from "../redux/action";
import FilterButtons from "./FilterButtons.jsx";
import TodoList from "./TodoList";

const Todo = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTask = (text) => {
    dispatch(addTask(text));
  };

  const handleAddTaskClick = () => {
    if (newTask.trim() !== "") {
      handleAddTask(newTask.trim());
      setNewTask("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    // console.log(value)
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-5xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text uppercase">Todo app</h2>

      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow  p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
          name="addTaskInput"
          id="addTaskInput"
          placeholder="Enter your task"
        />
        <button
          onClick={handleAddTaskClick}
          className="ml-4 p-2 bg-blue-400 text-white rounded hover:bg-blue-700 "
        >
          <BsPlus size={20} />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <FilterButtons />
        <div className="flex items-center ">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search here..."
            onChange={(e) => handleSearchChange(e.target.value)}
            className=" flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
          />

          <button
            onClick={handleAddTaskClick}
            className="ml-4 p-2 bg-blue-400 text-white rounded hover:bg-blue-700 "
          >
            <BsSearch />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
