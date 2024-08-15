import React from 'react'
import Image from 'next/image'

import { RiShareForwardBoxFill } from "react-icons/ri";
import { BsBoxArrowRight } from "react-icons/bs";
import { BsBoxArrowDown } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

import profilepic from '../images/profilepic.png'
import Link from 'next/link';

const RightBoard = () => {
  return (
    <div className='bg-black text-white h-screen' >

      {/* ============top bar============= */}
      <div className='flex py-2 py-2 px-5 bg-[#925FE2] shadow-lg '>
        <div className='font-bold'>
          <p>Student:</p>
          <p>John Snow</p>
        </div>
        <div className=' ml-auto flex items-center gap-4'>
          <Image src={profilepic} alt='' width={50} length={50} className='rounded-full cursor-pointer' />
          <p className='text-2xl text-white-500 cursor-pointer'><BsBoxArrowRight /></p>
        </div>
      </div>

      {/* =============search box============= */}

      <div className="relative flex mx-10">
        <input
          type="search"
          className="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-white bg-clip-padding px-10 py-3 text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          id="exampleFormControlInput2"
          aria-describedby="button-addon2" />
        <span
          className="flex items-center absolute top-3 text-2xl whitespace-nowrap px-3 py-[0.25rem] text-black dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
          id="button-addon2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </span>
      </div>

      {/* ============the boxes======================= */}
      <div className=''>

        <div className='grid grid-cols-3 jsutify-center gap-10 mb-10 mx-20 my-4 ' >
          <div className='flex flex-col gap-4 items-center py-5 px-1 h-44 rounded-lg shadow-lg justify-center cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg bg-[#925FE2]' >
            <p className='text-4xl' ><FaUserAlt /></p>
            <p className='text-xl' >Profile</p>
          </div>

          <div className='flex flex-col gap-4 items-center py-5 px-1 h-44 rounded-lg shadow-lg justify-center cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg bg-[#925FE2]' >
            <p className='text-4xl' ><FaBookOpen /></p>
            <p className='text-xl' >Courses</p>
          </div>

          <div className='flex flex-col gap-4 items-center py-5 px-1 h-44 rounded-lg shadow-lg justify-center cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg bg-[#925FE2]' >
            <p className='text-4xl' ><FaTasks /></p>
            <Link href="/registerCourses">
            <p className='text-xl' >register courses</p>
            
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-3 jsutify-center gap-10 mx-20 my-4'>
          <div className='flex flex-col gap-4 items-center py-5 px-1 h-44 rounded-lg shadow-lg justify-center cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg bg-[#925FE2]' >
            <p className='text-4xl' ><BsBoxArrowDown /></p>
            <p className='text-xl' >Results</p>
          </div>

          <div className='flex flex-col gap-4 items-center py-5 px-1 h-44 rounded-lg shadow-lg justify-center cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg bg-[#925FE2]' >
            <p className='text-4xl' ><RiLogoutCircleRLine /></p>
            <p className='text-xl' >Log-out</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default RightBoard
