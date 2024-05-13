import {
  ADD_TASK,
  TOGGLE_TASK,
  REMOVE_TASK,
  COMPLETED_TASK,
  INCOMPLETED_TASK,
  FILTER_TASK,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

export const addTask = (text) => ({
  type: ADD_TASK,
  payload: {
    text,
  },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
  },
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: {
    id,
  },
});

export const completedTask = (id) => ({
  type: COMPLETED_TASK,
  payload: {
    id,
  },
});

export const incompletedTask = (id) => ({
  type: INCOMPLETED_TASK,
  payload: {
    id,
  },
});

export const filterTask = (filter) => ({
  type: FILTER_TASK,
  payload: {
    filter,
  },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: {
    searchTerm,
  },
});

// actions.js
// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   REMOVE_TODO,
//   MARK_COMPLETED,
//   MARK_INCOMPLETE,
//   FILTER_TODOS,
//   MARK_ALL_COMPLETED,
//   UPDATE_SEARCH_TERM,
// } from './actionTypes';

// export const addTodo = (text) => ({
//   type: ADD_TODO,
//   payload: { text },
// });

// export const toggleTodo = (id) => ({
//   type: TOGGLE_TODO,
//   payload: { id },
// });

// export const removeTodo = (id) => ({
//   type: REMOVE_TODO,
//   payload: { id },
// });

// export const markCompleted = (id) => ({
//   type: MARK_COMPLETED,
//   payload: { id },
// });

// export const markIncomplete = (id) => ({
//   type: MARK_INCOMPLETE,
//   payload: { id },
// });

// export const filterTodos = (filter) => ({
//   type: FILTER_TODOS,
//   payload: { filter },
// });

// export const markAllCompleted = () => ({
//   type: MARK_ALL_COMPLETED,
// });

// export const updateSearchTerm = (searchTerm) => ({
//   type: UPDATE_SEARCH_TERM,
//   payload: { searchTerm },
// });