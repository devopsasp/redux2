import {createSlice} from '@reduxjs/toolkit'
const initialState={
    username:"",
    password:""
}
export const loginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
        loginUser:(state,action)=>{
            state.value=action.payload
        },
        logoutUser:(state)=>{
            state.value={username:"",password:""}
        }
    }
})

export const {loginUser,logoutUser}=loginSlice.actions
export default loginSlice.reducer