import React, { useState } from 'react'
import '../../App.css'

const LogIn = () => {
  const [toggleButton, setToggleButton] = useState(true)

  const Toggler = () => {

    setToggleButton(!toggleButton)
    console.log("Hello")
  }


  return (
    <>
      <div className="LoginFormPage  min-h-screen flex justify-center items-center ">
        {/* <img className='bg-opacity-5 absolute -z-10' src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" /> */}
        <form className=" form-container z-10  md:mt-10    rounded-sm bg-black bg-opacity-[0.85] h-[500px] md:w-[450px] text-white flex flex-col  p-12 ">
          <h1 className='font-semibold text-3xl mb-2' >{toggleButton? "Sign In" : "Sign Up"}</h1>
          <div className="inputs  space-y-4 flex flex-col mt-5 ">

            {/* inputs  */}
      {   
         !toggleButton && 

         <input className='p-3 bg-gray-500  rounded-sm' type="email" placeholder=  'Enter Name' />
         }
            <input className='p-3 bg-gray-500 rounded-sm' type="email" placeholder='Enter Email' />
            <input className='p-3 bg-gray-500 rounded-sm' type="password" placeholder='Enter Password' />
            <button className='p-2 rounded-sm bg-red-600'  >{ !toggleButton? "Signup Now" : "Sign in"}</button>
            <div onClick={Toggler}>
              <p className='space-x-3 pt-5 text-gray-400 cursor-pointer '>{toggleButton ?"New to Netflix?": " Already Signed Up?"} <span className='px-5'>  { toggleButton? "Signup Now" : ''}</span></p>
            </div>
          </div>

        </form>

      </div>

    </>
  )
}

export default LogIn