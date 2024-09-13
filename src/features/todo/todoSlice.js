import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

// here "name" property is given by redux toolkit
// Every slice should have initial state
// we have properties and functions in reducers
// Don't call functions inside reducers. Give reference to functions
// In every reducer, we have state and action available.
// State will give you currect state
// action will give you whatever data is passed  
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                // here payload is object
                text: action.payload
            }

            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.filter((todo) => todo.id === action.payload)
            todo.text = "Jay's updated value"
            state.todos.push(todo)
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
