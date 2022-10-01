import { createSlice } from '@reduxjs/toolkit'
import useUser from "../../context/userContext"
const todoSlice = createSlice({
    name: 'todo',
    initialState:{
        id:"ba1",
        userName:"pourya",
        todos:[]

    },
    reducers: {
        addTodo:(state, {payload})=>{
            state.todos = [...state.todos, state.todos.push({id:Date.now(),todo:payload.todo})] 
        }

     
    },
  })
  
  export const {addTodo} = todoSlice.actions
  export default todoSlice.reducer