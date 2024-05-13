import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {

    const filteredTask = useSelector((state) => {
        const tasks = state.tasks;
        console.log("lists",state)
        const filter=state.filter;
        console.log("filter ho",filter)

        const searchTerm=state.searchTerm; 
        
        return tasks.filter((todo)=>{
                    const matchFilter=(filter==='COMPLETED' && todo.completed)||(filter==='INCOMPLETE' && !todo.completed)||(filter==='ALL');
                    const matchSearch=todo.text.toLowerCase().includes(searchTerm);
                    return matchFilter && matchSearch;
                });        
    });
    

    console.log("filtered tasks ", filteredTask.map((todo)=>{
            return todo.text;
        }))
  return (
    <ul>
        <li className="my-2 text-sm italic">All Your Tasks</li>
        {
            filteredTask.map((task,index)=>(
               
               <TodoItem key={index} tasks={task} index={index}/>
                /* <li key={index}>{task.text}</li> */
            
            ))
        }

    </ul>
  )
}

export default TodoList