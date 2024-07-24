"use client"
import React, { useState } from 'react'
import './page.css'
import Image from 'next/image'
import google from './Image/Google-logo.png'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [err, setErr] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  // send form data to endpoint 

  // handle submit function
  const handleSubmit = async (e) => {
    // prevent deafault refresh
    e.preventDefault();
    // hande form validation
    if (!phone || !firstname || !lastname || !email || !password) {
      setErr("Please provide form data");

    }

    else if (password != confirmpassword) {
      setErr("passwords don't match")
    }
    else if (password.length < 8 && confirmpassword.length < 8) {
      setErr("password length must be up to 8 characters")
    }
    else {
      setIsLoading(true)
      setErr('')
      try {

        const res = await axios.post('http://localhost:3000/api/register', { firstname, lastname, phone, email, password })
        console.log(res)
        // if registeration is sucessfull, move to the login page
        if (res.status == 201) {
          // after registeration is done successfully, move to the login page 
          router.push('/login')
        }

      }
      catch (err) {
        setIsLoading(false)
        setErr("Student already resgistered")
        console.log("this is the error", err.message)
      }
    }

  }
  return (
    <div>

      <div id='box' className='hidden md:hidden lg:hidden xl:block'>

        <div className='ctn'>

          {/* Left */}
          <div className='left'>
            <h1>Login</h1>
            <p>Enter your account details</p> {
              err && <div className="rounded-md bg-red-500 text-white px-4 py-2 text-center font-bold">{err}</div>
            }

            <form onSubmit={handleSubmit}>
              <input className='fname' type="text" placeholder='First name' onChange={(e) => setFirstname(e.target.value)} />
              <input className='lname' type="text" placeholder='Last name' onChange={(e) => setLastname(e.target.value)} />
              <input className='phone' type="number" placeholder='Phone No.' onChange={(e) => setPhone(e.target.value)} />
              <input className='phone' type="password" placeholder='Password.' onChange={(e) => setPassword(e.target.value)} />
              <input className='phone' type="password" placeholder='confirm Password.' onChange={(e) => setConfirmPassword(e.target.value)} />
              <input className='email' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

              <span>
                <p className='forgot_password'>Forgot Password?</p>
              </span>


              <button className='login flex align-center justify-center'>
                {
                  isLoading && (<div className="flex gap-3 animate ">
                    
                    <div className="w-3 h-3 rounded-full bg-white animate-1"></div>
                    <div className="w-3 h-3 rounded-full bg-white animate-2"></div>
                    <div className="w-3 h-3 rounded-full bg-white animate-3"></div>
                  </div>) ||(<label htmlFor="">Login</label>)
              }
              </button>
              

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
