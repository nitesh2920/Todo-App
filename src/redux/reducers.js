import {
  ADD_TASK,
  COMPLETED_TASK,
  FILTER_TASK,
  MARK_ALL_COMPLETED,
  REMOVE_TASK,
  TOGGLE_TASK,
  INCOMPLETED_TASK,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

const initialState = {tasks: [],   filter: "ALL",searchTerm: ''};

const todoReducer = (state=initialState, action) => {
  console.log("jarvis", state);
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          { text: action.payload.text, completed: false }
        ],
        filter: state.filter,
        searchTerm: state.searchTerm,
      };
    case TOGGLE_TASK:
      return {
        tasks: state.tasks.map((task, index) =>
          index === action.payload.id
            ? { ...task, completed: !task.completed }
            : task
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };
    case REMOVE_TASK:
      return {
        tasks: state.tasks.filter((task, index) => index !== action.payload.id),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case COMPLETED_TASK:
      return {
        tasks: state.tasks.map((task, index) =>
          index === action.payload.id ? { ...task, completed: true } : task
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };
    case INCOMPLETED_TASK:
      return {
        tasks: state.tasks.map((task, index) =>
          index === action.payload.id ? { ...task, completed: false } : task
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case FILTER_TASK:
      return {
        tasks: state.tasks,
        filter: action.payload.filter,
        searchTerm: state.searchTerm,
      };
    case UPDATE_SEARCH_TERM:
      return {
        tasks: state.tasks,
        filter: state.filter,
        searchTerm: action.payload.searchTerm,
      };

    case MARK_ALL_COMPLETED:
      return {
        tasks: state.tasks.map((task) => ({ ...task, completed: true })),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };
    default:
      return state;
      
  }
};

export default todoReducer;

// reducers.js
// import {
//     ADD_TODO,
//     TOGGLE_TODO,
//     REMOVE_TODO,
//     MARK_COMPLETED,
//     MARK_INCOMPLETE,
//     FILTER_TODOS,
//     MARK_ALL_COMPLETED,
//     UPDATE_SEARCH_TERM,
//   } from './actionTypes';
  
//   const initialState = { todos: [], filter: 'ALL', searchTerm: '' };
  
//   const todoReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case ADD_TODO:
//         return {
//           todos: [...state.todos, { text: action.payload.text, completed: false }],
//           filter: state.filter,
//           searchTerm: state.searchTerm,
//         };
  
//       case TOGGLE_TODO:
//         return {
//           todos: state.todos.map((todo, index) =>
//             index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
//           ),
//           filter: state.filter,
//           searchTerm: state.searchTerm,
//         };
  
//       case REMOVE_TODO:
//         return {
//           todos: state.todos.filter((todo, index) => index !== action.payload.id),
//           filter: state.filter,
//           searchTerm: state.searchTerm,
//         };
  
//       case MARK_COMPLETED:
//         return {
//           todos: state.todos.map((todo, index) =>
//             index === action.payload.id ? { ...todo, completed: true } : todo
//           ),
//           filter: state.filter,
//           searchTerm: state.searchTerm,
//         };
  
//       case MARK_INCOMPLETE:
//         return {
//           todos: state.todos.map((todo, index) =>
//             index === action.payload.id ? { ...todo, completed: false } : todo
//           ),
//           filter: state.filter,
//           searchTerm: state.searchTerm,
//         };
  
//       case FILTER_TODOS:
//         return {
//           todos: state.todos,
//           filter: action.payload.filter,
//           searchTerm: state.searchTerm,
//         };
  
//       case UPDATE_SEARCH_TERM:
//         return {
//           todos: state.todos,
//           filter: state.filter,
//           searchTerm: action.payload.searchTerm,
//         };
  
//       case MARK_ALL_COMPLETED:
//         return {
//           todos: state.todos.map((todo) => ({ ...todo, completed: true })),
//           filter: state.filter,
//           searchTerm: state.searchTerm,
//         };
  
//       default:
//         return state;
//     }
//   };
  
//   export default todoReducer;