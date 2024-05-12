import { ADD_TASK, COMPLETED_TASK, FILTER_TASK, MARK_ALL_COMPLETED, REMOVE_TASK, TOGGLE_TASK, UNCOMPLETED_TASK, UPDATE_SEARCH_TERM } from "../actions/actionTypes";

const initialState={
    tasks:[],
    filter:"all",
    searchTerm:""
}
const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TASK:
            return{
                tasks:[...state.tasks,{text:action.payload.text,completed:false}],
                filter:state.filter,
                searchTerm:state.searchTerm
            }
        case TOGGLE_TASK:
            return{
                tasks:state.tasks.map((task,index)=>index===action.payload.id?{...task,completed:!task.completed}:task),
                filter:state.filter,
                searchTerm:state.searchTerm
            }
        case REMOVE_TASK:
            return{
                tasks:state.tasks.filter((task,index)=>index!==action.payload.id),
                filter:state.filter,
                searchTerm:state.searchTerm
            }
        
        case COMPLETED_TASK:
            return{
                tasks:state.tasks.map((task,index)=>index===action.payload.id?{...task,completed:true}:task),
                filter:state.filter,
                searchTerm:state.searchTerm
            }
        case UNCOMPLETED_TASK:
            return{
                tasks:state.tasks.map((task,index)=>index===action.payload.id?{...task,completed:false}:task),
                filter:state.filter,
                searchTerm:state.searchTerm
            }
        
        case FILTER_TASK:
            return{
                tasks:state.tasks,
                filter:action.payload.filter,
                searchTerm:state.searchTerm
            }
        case UPDATE_SEARCH_TERM:
            return{
                tasks:state.tasks,
                filter:state.filter,
                searchTerm:action.payload.searchTerm
            }

        case MARK_ALL_COMPLETED:
            return{
                tasks:state.tasks.map((task)=>({...task,completed:true})),
                filter:state.filter,
                searchTerm:state.searchTerm
            }
        default:
            return{
                state
            };
    }
}

export default todoReducer;