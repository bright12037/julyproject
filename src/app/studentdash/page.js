import React from 'react'
import RightBoard from '@/components/Studentdashboard/right/rightboard'
import Leftboard from '@/components/Studentdashboard/left/leftboard'


const page = () => {

  return (
    <div className='flex gap-2 bg-red-500'>
      <div className='basis-1'><Leftboard /></div>
      <div className='basis-[90%]'><RightBoard/></div>
    </div>
  )
}

export default page

