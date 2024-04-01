import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'

export default function Layout() {
    
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
