import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
import { auth } from './firebase'



const LogIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginAccount = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth,  email,   password)
      .then((userCredential)  =>  {

        const user = userCredential.user;
        navigate("/dashboard")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
  }



  return ( 
    <div className='lg:flex lg:justify-center lg:items-center  py-56'>
    <form action=""    className='justify-center items-center lg:p-5 p-5  border border-gray-500 w-96 rounded-md'>
    <div className='mb-10'>
        <h3 className='font-bold'>Log in</h3>
        <p>Log in your account to access the Platform</p>
      </div>
      <div className='mb-5'>
      <label htmlFor="email">Input email</label>
      <div>
      <input type="email" value={email} placeholder='email' id="email" autoComplete='off' name='email'  className='input' onChange={(e) => setEmail(e.target.value)}  required/>
      </div>
      
      </div>
      <div>
      <label htmlFor="password">Input password</label>
      <div>
      <input type="password" placeholder='password' id="password" name='password'value={password} className='input' autoComplete='off' onChange={(e) => setPassword(e.target.value)} required />
      </div>
      </div>

     
      <button type='submit' onClick={loginAccount} className='submit' >Log in</button>

      <div className='text-center mt-6'>
      Dont Have an account? <NavLink className="underline text-blue-400 font-bold" to="/signup">Sign up</NavLink>
      </div>
    </form>
  </div>
   );
}
 
export default LogIn ;