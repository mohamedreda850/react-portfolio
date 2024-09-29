import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


export default function Layout() {
  return (
    <>
    <div>
   <Navbar />
   </div>
    
   <div className='bg-violet-80  lg:ml-[257px]'>
    <Outlet />
    </div>
    </>
  )
}
