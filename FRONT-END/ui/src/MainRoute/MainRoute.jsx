import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminIndex from '../Admin/AdminIndex'
import UserIndex from '../User/UserIndex'

const MainRoute = () => {
  
  return (
    <>
    <BrowserRouter>
    
    <Routes>
        <Route path="/admin" elemet={<AdminIndex/>}/>
        <Route   path="/*" element={<UserIndex/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default MainRoute
