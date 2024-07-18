"use client"
import { useState } from "react"
import React from 'react'
import './page.css'

const page = () => {
  return (
    <div>
        <div className="ctn">
            <h1>Enter OTP Code</h1>

            <form>
                <input className="number" placeholder="Enter Code" type="number" />
                <button>Submit Code</button>
            </form>

            <button className="resend">Resend Code</button>
        </div>
      
    </div>
  )
}

export default page
