'use client'
import React from 'react'
import './page.css'
import { useState } from 'react'
import Image from 'next/image'
import google from './Image/Google-logo.png'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const page = () => {
  const router=useRouter()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')


  // a function to handle login
  async function handlerLogin(e) {
    // prevent form default
    e.preventDefault()
    const res = await axios.post('http://localhost:3000/api/login', { password, email })
    try {
      if (res.status == 200) {
        router.push('/studentdash')

      }
    }
    catch (err) {
      console.log(err.message)
    }
  }
  return (
    <div>

      {/* Big Laptop Responsiveness */}

      <div id='box' className=''>

        <div className='ctn'>

          {/* Left */}
          <div className='left'>
            <h1>Login</h1>
            <p>Enter your account details</p>

            <form onSubmit={handlerLogin}>
              <input onChange={(e) => setEmail(e.target.value)} className='username' type="text" placeholder='Email' required />
              <input onChange={(e) => setPassword(e.target.value)} className='password' type="password" placeholder='Password' required />


              <span>
                <p className='forgot_password'>Forgot pls?</p>
              </span>

              <input className='login' type="submit" />
              <button className='google'>Sign up with google <Image src={google} width={20} alt /></button>
            </form>

            <div className='bottom'>
              <p>Don't have an account?</p>

              <Link href="/register">
                <button>Sign up</button>

              </Link>
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

      {/* Small Laptop Responsiveness */}

      {/* <div className='hidden md:hidden lg:block xl:hidden'>

        <div className='ctn_small_laptop'> */}

      {/* Left */}
      {/* <div className="left_small_laptop">
            <h1>Login</h1>
            <p>Enter your account details</p>

            <form>
              <input type="text" placeholder='Username' className='username_small_laptop' required />
              <input type="password" placeholder='Password' className='password_small_laptop' required />
            </form>

            <span>
              <p className="forgot_small_laptop">Forgot Password?</p>
            </span>

            <span>
              <button className='login_small_laptop'>Login</button>
              <button className='google_small_laptop'>Sign up with google <Image src={google} width={20} /> </button>
            </span>

            <div className="bottom_small_laptop">
              <p>Don't have an account?</p>
              <button>Sign up</button>
            </div>
          </div>

          <div className="right_small_laptop">
            <h1>Welcome to</h1>
            <p className='student'>Student Portal</p>
            <p>Login to access your account</p>
          </div>
        </div>
      </div> */}

      {/* Tablet Responsiveness */}
      // <div className='hidden md:block lg:hidden xl:hidden'>
      //   <div className="ctn_tablet">
          {/* Left */}
          // <div className="left_tablet">
          //   <h1>Login</h1>
          //   <p>Enter your account details</p>

          //   <form>
          //     <input type="text" placeholder='Username' required className='username_tablet' />
          //     <input type="text" placeholder='Password' required className='password_tablet' />

          //     <span>
          //       <p className='forgot_tablet'>Forgot password?</p>
          //     </span>

          //     <div>
          //       <button className='login_tablet'>Login</button>
          //       <button className='google_tablet'>Sign up with google <Image src={google} width={20} alt='' /></button>
          //     </div>
          //   </form>

          //   <div className='bottom_tablet'>
          //     <p>Don't have an account?</p>
          //     <button>Sign up</button>
          //   </div>
          // </div>

          {/* right */}
    //       <div className="right_tablet">
    //         <h1>Welcome to</h1>
    //         <p className='student_tablet'>Student Portal</p>
    //         <p>Login to access your account</p>
    //       </div>
    //     </div>
    //   </div>

    // </div>
  )
}

export default page
