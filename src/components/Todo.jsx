import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch} from "react-redux";
import { addTask, updateSearchTerm } from "../redux/action";
import FilterButtons from "./FilterButtons.jsx";
import TodoList from "./TodoList";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Tooltip} from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";

const Todo = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [dark, setDark] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

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
    <div className="w-full min-h-screen text-center mx-auto md:h-full p-4 dark:bg-gray-600 bg-gray-200 rounded">
      <div className="flex justify-between items-center">
      
        <h2 className="mt-3 mb-6 text-2xl font-bold mx-auto dark:text-white text uppercase">
          Todo app
        </h2>
        <button onClick={() => darkModeHandler()} 
        className="mt-3 mb-6 " 
              
               >
              
          {
            dark && <IoSunny size={40} className="text-white"  data-tooltip-place="top" data-tooltip-id="my-tooltip" data-tooltip-content="Light Mode" /> // render sunny when dark is true
          }
          {
            !dark && <IoMoon size={40} data-tooltip-place="top" data-tooltip-id="my-tooltip" data-tooltip-content=" Dark Mode" /> // render moon when dark is false
          }
          
        </button>
      </div>

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
          data-tooltip-place="bottom" data-tooltip-id="my-tooltip" data-tooltip-float="true" data-tooltip-content="Add Task"
        >
          <BsPlus size={20} />
        </button>
      </div>

      <div className="flex flex-col items-center  md:flex-row justify-between">
        <FilterButtons />
        <div className="flex items-center mt-4 md:mt-0" >
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
            data-tooltip-place="bottom" data-tooltip-id="my-tooltip" data-tooltip-float="true" data-tooltip-content="Search"
          >
            <BsSearch size={20}/>
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
