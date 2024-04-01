import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Layout from '../Components/Layout'
import List from '../Components/List'
import Laptop from '../Components/Laptop'

export default function HomeRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/Home' element={<Home />} />
        <Route path='/Laptop' element={<Laptop />} />
        <Route path='/List' element={<List />} />
      </Route>
    </Routes>
  )
}
