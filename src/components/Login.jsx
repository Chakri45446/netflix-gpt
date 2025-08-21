import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {
    const [isSignIn , setIsSignIn] = useState(true);

    const toggleSignUp = () => {
        setIsSignIn(!isSignIn);
    }
  return (
    <> 
   
     <div>
        <div>
            <Header />
        </div>
        <div  className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg' 
            alt='background-img' />
        </div>
        <form className='absolute bg-black w-115 h-180 p-12 my-30 m-auto right-0 left-0 text-white bg-black/80 '>
        <h1 className='text-3xl text-white-500 font-bold py-4 '>
            {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && <input 
            type='text' 
            placeholder='Full Name' className='p-2 my-3 w-full border border-gray-300 rounded-sm' /> }
            <input 
            type='text' 
            placeholder='Email or Mobile Number' 
            className='p-2 my-3 w-full border border-gray-300 rounded-sm' />
            <input 
            type='password' 
            placeholder='Passwod' 
            className='p-2 my-3 w-full border border-gray-300 rounded-sm' />
            <button 
            className='bg-red-500 w-full p-2 my-3 hover:cursor-pointer rounded-sm'>
                {isSignIn ? "Sign In" : "Sign Up"}
                </button>
            <p className='text-center p-1 m-1'>OR</p>
            <button 
            className='bg-gray-800 w-full p-2 my-3 hover:cursor-pointer rounded-sm'>Use a sign-in code </button>
            <Link className='text-center p-2 px-29 underline hover:cursor-pointer'to="https://www.netflix.com/in/loginHelp"> Forgot password?</Link>
            <div class="flex items-center text-gray-300 text-sm my-3">
                 <input 
                    id="remember" 
                    type="checkbox" 
                    className="w-4 h-4 accent-red-600 cursor-pointer" 
                      />
                      <label for="remember" className="ml-2 cursor-pointer text-lg">
                          Remember me
                         </label>
         </div>
         <div className='flex'>
            
         <h2 className='text-gray-400'>New to Netflix?</h2>
         <p  className='font-bold cursor-pointer' onClick={toggleSignUp}>{isSignIn ? "Sign Up now." : "Already Registered"}</p>

         </div>
         <p className='text-sm py-2 text-gray-400 '>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
         


        </form>
        
    </div> 
    </>
  )
}

export default Login