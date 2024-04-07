import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import SideNav from './SideNav'

export default function Layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
