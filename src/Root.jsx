import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'

const Root = () => {
  return (
    <div className='font-Poppins'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Root