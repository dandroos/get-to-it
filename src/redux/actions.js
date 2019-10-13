import { UPDATE_CLOCK, ADD_TODO, TOGGLE_COMPLETED_TODO, REMOVE_TODO } from './types'

export const updateClock = (formattedTime) =>({
    type: UPDATE_CLOCK,
    payload: formattedTime
})

export const addTodo = (todos)=>({
    type: ADD_TODO,
    payload: todos
})

export const removeTodo = (todos)=>({
    type: REMOVE_TODO,
    payload: todos
})


export const toggleCompletedTodo = (todos)=>({
    type: TOGGLE_COMPLETED_TODO,
    payload: todos
})