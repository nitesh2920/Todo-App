import { ADD_TASK,TOGGLE_TASK,REMOVE_TASK,COMPLETED_TASK,UNCOMPLETED_TASK,FILTER_TASK,MARK_ALL_COMPLETED,UPDATE_SEARCH_TERM } from "./actionTypes"

export const addTask=(text)=>({
    type:ADD_TASK,
    payload:{
        text
    }
})

export const toggleTask=(id)=>({
    
        type:TOGGLE_TASK,
        payload:{
            id
        }
    
})

export const removeTask=(id)=>({
    type:REMOVE_TASK,
    payload:{
        id
    }
})

export const completedTask=(id)=>({
    type:COMPLETED_TASK,
    payload:{
        id
    }
})

export const uncompletedTask=(id)=>({
    type:UNCOMPLETED_TASK,
    payload:{
        id
    }
})

export const filterTask=(filter)=>({
    type:FILTER_TASK,
    payload:{
        filter
    }
})

export const markAllCompleted=()=>({
    type:MARK_ALL_COMPLETED
})

export const updateSearchTerm=(searchTerm)=>({
    type:UPDATE_SEARCH_TERM,
    payload:{
        searchTerm
    }
})