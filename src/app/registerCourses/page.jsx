"use client"
import Loading from '@/components/Loading/Loading'
import React, { useState } from 'react'
import useSWR from 'swr'

export default function RegisteredCoursese() {
    const [courses,setCourses]=useState([])
    const [isChecked, setISchecked]=useState(false)

    const handleSelect=(e)=>{
        
        // console.log(e.target.value,e.target.nam)
        const {name,value,checked}=e.target
        setCourses((prev)=>checked?[...prev,value]:prev.filter((option)=>option!==value) )


     
            // spread the value in the courses state
            // setCourses((prev)=> IsChecked ?)
        
        setISchecked(isChecked)
    }   
    
    console.log(courses)
    // create fetcher function
    const fetcher = async (url) => {
        const res = await fetch(url);
        const data = await res.json()
        console.log( "data:", data)


        if (!res.ok) {
            const error = new Error(data.msg)
            throw error
        }
        return data

    
    }

    const { data, error, isLoading } = useSWR('http://localhost:3000/api/courses', fetcher)
    console.log(data)

    if(isLoading){
        return <Loading/>
    }


  return (
    <div>
        <div className="border-1 border-cyan-500 bg-white shadow-md flex items-center justify-center flex-col gap-6 ">
            {
                data?.map((item=>{
                    return(
                        <>
                        <label htmlFor="">{item.name}</label>
                          <input onChange={handleSelect} type="checkbox"  value={item.name} className='checked:bg-blue-500' name="courses"/>
                       <h1>Lecturer name : {item.lecturer} </h1> 
                        </>
                     
                    )
                }))
            }
           
      
        </div>
    </div>
  )
}
