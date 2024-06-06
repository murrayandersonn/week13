import React from 'react'

//import icons for username and password
import password_icon from '../assets/password.png'
import user_icon from '../assets/person.png'

const LoginForm = () => {
  return (

    <div className='container'>
        <div className="header">
            <div className="text"><h3>Log In</h3></div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt=''></img>
                <input type='user' id='user' placeholder='Username'></input>
            </div>
            <div className="input">
                <img src={password_icon} alt=''></img>
                <input type='password' id='password' placeholder='Password'></input>
            </div>
        </div>
        <div className="submit-container">
            <div className="submit">Submit</div>
        </div>
    </div>
  )
}

export default LoginForm