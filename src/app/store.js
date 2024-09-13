/**
 * ============= Steps to create store =============
 * Step 1 - Get configureStore() from redux toolkit
 * Step 2 - Create your reducers aka slices (in redux toolkit)
 * IntialState is important to tell the initial values. It can be any value. (Array, Object)
 * 
 * nanoid() - Generates unique IDs
 */

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})