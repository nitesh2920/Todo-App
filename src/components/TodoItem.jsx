import React from 'react'
import { FaCheck, FaTimes, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import { incompletedTask, markAllCompleted, removeTask, toggleTask } from '../redux/action'
import { useDispatch } from 'react-redux'

const TodoItem = ({tasks,index}) => {

    const dispatch=useDispatch()
  return (
   <li className='flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-2'>
    <div className='flex items-center'>
        <span className='mr-4 text-gray-500'>{index+1}</span>
        <span className={`mr-4 ${tasks.completed ?"line-through text-slate-500":"" }`}>{tasks.text}</span>
    </div>

    <div className="space-x-3 ml-8">
        <button  onClick ={()=>dispatch(toggleTask(index))}className='mr-2 text-sm  bg-blue-500 text-white sm:px-2 py-1 px-1 rounded' >{tasks.completed ? <FaToggleOff/>:<FaToggleOn/>}</button>
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTask(index))}
        >
          <FaTrash />
        </button>
        {
            !tasks.completed && (
                <button onClick ={()=>dispatch(markAllCompleted(index))}className='mr-2 text-sm  bg-blue-500 text-white sm:px-2 py-1 px-1 rounded'><FaCheck/></button>
            )
        }

        {
            tasks.completed && (
                <button onClick ={()=>dispatch(incompletedTask(index))}className='mr-2 text-sm  bg-blue-500 text-white sm:px-2 py-1 px-1 rounded'><FaTimes/></button>
            )
        }
    </div>
   </li>
  )
}

export default TodoItem