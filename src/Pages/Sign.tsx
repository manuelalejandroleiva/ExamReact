import React from 'react'

import '../style/App.scss'
import { useAppSelector } from 'src/store/hooks';
import { RootState } from 'src/store';
import { useNavigate } from 'react-router-dom';

function Sign() {

  const data = useAppSelector((state: RootState) => state.dataSlice);
  const navigate=useNavigate()
  const postLogin=()=>{
    navigate('/')

  }
  return (
    <div className="container_login"style={{background:data.background_color,color:data.color}} >
    <div className="login-form_login">
        <h2>Login</h2>
        <form onSubmit={postLogin}>
            <div className="form-group">
                <label >Username</label>
                <input type="text" id="username" placeholder="Enter username" value={"manuel"}/>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" id="password" placeholder="Enter password" security='true' value={"Casa.1500"}/>
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account? <a href="#">Sign up</a></p>
        </form>
    </div>
</div>
  )
}

export default Sign