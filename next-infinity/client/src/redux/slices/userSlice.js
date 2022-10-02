import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState:{userName:"pourya",role:"user",email:"pourya@gmail.com"},
    reducers: {
        getUser:(state)=>{
            return state

        }
        

    },
  })
  
export const {getUser} = userSlice.actions
  export default userSlice.reducer