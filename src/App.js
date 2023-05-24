import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import  {useSelector,useDispatch} from 'react-redux'
import { loginUser,logoutUser } from './slices/loginslice';
function App() {
  const [username,setUserName]=useState()
  const [password,setPassword]=useState()
  const loginstate=useSelector((state)=>{
    return state
  })
  const dispatch=useDispatch()
  return (
    <div className="App">
         <label>Enter User Name</label><br/>
         <input type='text' 
            onChange={(e)=>{
              setUserName(e.target.value)
            }}
           
         /><br/>
         <label>Enter Password</label><br/>
         <input type='password'
         onChange={(e)=>{
   setPassword(e.target.value)

         }}
         /><br/>
         <button
         
         onClick={()=>{
        var user={
          username:username,
          password:password
      }  
         dispatch(loginUser(user))
         }}
         >Login</button><br/>
        {loginstate.login.value.username}
        <button onClick={()=>{
          dispatch(logoutUser())
        }}>Logout</button><br/>
    </div>
  );
}

export default App;
