import React from 'react'
import './page.css'
import Image from 'next/image'
import google from './Image/Google-logo.png'

const page = () => {
  return (
    <div>

        <div id='box' className='hidden md:hidden lg:hidden xl:block'>

        <div className='ctn'>

        {/* Left */}
        <div className='left'>
            <h1>Login</h1>
            <p>Enter your account details</p>

            <form>
            <input className='fname' type="text" placeholder='first name' required />
            <input className='lname' type="text" placeholder='last name' required />
            <input className='phone' type="number" placeholder='Phone No.' required />
            <input className='email' type="email" placeholder='Email' required />

            <span>
            <p className='forgot_password'>Forgot Password?</p>
            </span>

            <button className='login'>Login</button>
            <button className='google'>Sign up with google <Image src={google} width={20} alt /></button>
            </form>

            <div className='bottom'>
            <p>Don't have an account?</p>
            <button>Sign up</button>
            </div>

        </div>

        {/* Right */}
        <div className="right">
            <h1>Welcome to</h1>
            <h2 className='student'>student portal</h2>
            <p>Login to access your account</p>
        </div>



        </div>
        </div>
      
    </div>
  )
}

export default page
