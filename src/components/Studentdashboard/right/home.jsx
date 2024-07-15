import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div >
        <div  className="home flex flex-col justify-center pl-44 bg-black text-white w-screen h-screen">
          <h1 className='text-5xl font-bold pb-2'>Welcome To SchoolSystem</h1>
          <h2 className='text-2xl font-semibold pb-2'>Where learning is an adventure.</h2>
          <p className='text-lg font-md pb-2'>Learn,study and work.</p>
          <div>
            <button className='transition-transform duration-300 hover:scale-105 text-white text-xl rounded-2xl bg-[#925FE2] py-2 px-4 flex'>Login here</button>
          </div>
        </div>
    </div>
  ) 
}

export default Home
