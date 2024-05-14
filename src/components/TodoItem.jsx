/* eslint-disable react/prop-types */

import {
  FaCheck,
  FaTimes,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
} from "react-icons/fa";
import {
  incompletedTask,
  markAllCompleted,
  removeTask,
  toggleTask,
} from "../redux/action";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const TodoItem = ({ tasks, index }) => {
  const notifyDeleteTask = () => {
    toast.success("task deleted ", {});
  };
  const dispatch = useDispatch();
  return (
    <li className="flex flex-col sm:flex-row sm:items-center  dark:text-white justify-between border-b-2 border-sky-500 py-2 gap-2">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500 dark:text-white">{index + 1}</span>
        <span
          className={`mr-4 ${
            tasks.completed ? "line-through text-slate-500" : ""
          }`}
        >
          {tasks.text}
        </span>
      </div>

      <div className="space-x-3 ml-8">
        <button
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
          data-tooltip-content="toggle task"
          data-tooltip-float="true"
          onClick={() => dispatch(toggleTask(index))}
          className="mr-2 text-sm  bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
        >
          {tasks.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => {
            dispatch(removeTask(index)), notifyDeleteTask();
          }}
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
          data-tooltip-content="Delete Task"
        >
          <FaTrash />
        </button>
        {!tasks.completed && (
          <button
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-content="completed task"
            data-tooltip-float="true"
            onClick={() => dispatch(markAllCompleted(index))}
            className="mr-2 text-sm  bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
          >
            <FaCheck />
          </button>
        )}

        {tasks.completed && (
          <button
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-float="true"
            data-tooltip-content="Incompleted task"
            onClick={() => dispatch(incompletedTask(index))}
            className="mr-2 text-sm  bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
