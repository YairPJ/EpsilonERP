import React from 'react'
import { Route, Routes } from 'react-router'
import { Navigate } from 'react-router'
import { Login } from '../Auth/Pages/login'
import { Register } from '../Auth/Pages/Register'

export const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Register />} />

      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
  )
}
