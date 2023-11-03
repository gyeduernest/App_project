import { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { NavLink,useNavigate } from 'react-router-dom';
import { auth } from './firebase';


const SignUp = () => {
      const navigate = useNavigate('');

      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const createAccount = async (e) =>{
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          const user = userCredential.user;
          navigate("/login")
        })

        .catch((error) => {
          const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

      
      }
     

  return ( 
    <div className='lg:flex lg:justify-center lg:items-center  py-56'>
       <form action=""    className='justify-center items-center lg:p-5 p-5  border border-gray-500 rounded-md'>
       <div className='mb-10'>
        <h3 className='font-bold'>Sign up</h3>
        <p>create an account to access the Platform</p>
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

     
      <button type='submit' onClick={createAccount} className='submit' >Create Account</button>

      <div className='text-center mt-6'>
      Already Have an account? <NavLink className="underline text-blue-400 font-bold" to="/login">Log in</NavLink>
      </div>
    </form>
  </div>
   );
}
 
export default SignUp;
