import React from 'react'

import { FaBookOpenReader } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { BsBoxArrowDown } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";


const Leftboard = () => {

  return (
    <div className='bg-black text-white h-screen'>
        <div className='flex gap-2 items-center'>
            <p className='text-5xl bg-[#925FE2] p-4' ><FaBookOpenReader/></p>
            <p className=' text-3xl font-semibold'>SchoolSystem</p>
        </div>

        <div className='flex gap-2 mb-4 items-center border-b-[1px] border-[#925FE2] py-4 px-2'>
            <p className='text-3xl text-[#925FE2]'><GoHomeFill/></p>
            <p className='text-xl'>Home</p>
        </div>

        <div className='py-14 border-b-[1px] border-[#925FE2]'>
            <p className=' border-l-[6px] border-[#925FE2] mb-6 p-2  flex items-center gap-2 text-xl cursor-pointer hover:bg-white hover:text-black transition-transform duration-300 hover:scale-[1.005]' ><FaUserAlt className='text-2xl text-[#925FE2] '/>Profile</p>
            <p className=' border-l-[6px] border-[#925FE2] mb-6 p-2  flex items-center gap-2 text-xl cursor-pointer hover:bg-white hover:text-black transition-transform duration-300 hover:scale-[1.005]' ><FaBookOpen className='text-2xl text-[#925FE2]'/>Courses</p>
            <p className=' border-l-[6px] border-[#925FE2] mb-6 p-2  flex items-center gap-2 text-xl cursor-pointer hover:bg-white hover:text-black transition-transform duration-300 hover:scale-[1.005]' ><FaTasks className='text-2xl text-[#925FE2]'/>Assignments</p>
            <p className=' border-l-[6px] border-[#925FE2] mb-6 p-2  flex items-center gap-2 text-xl cursor-pointer hover:bg-white hover:text-black transition-transform duration-300 hover:scale-[1.005]' ><BsBoxArrowDown className='text-2xl text-[#925FE2]'/>Result</p>  
        </div>

         <p className=' mt-2 border-l-[6px] border-[#925FE2] mb-1 p-2  flex items-center gap-2 text-xl cursor-pointer hover:bg-white hover:text-black transition-transform duration-300 hover:scale-[1.005]' ><RiLogoutCircleRLine className='text-2xl text-[#925FE2]'/>Log-Out</p>
    </div>
  )
}

export default Leftboard
