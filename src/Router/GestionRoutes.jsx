import React from 'react'
import { Route, Routes } from 'react-router'
import { AltaUsuario } from '../Modulos/Gestion/Pages/AltaUsuario'
import { Gestion } from '../Modulos/Gestion/Pages/Gestion'
import { GestionUsuarios } from '../Modulos/Gestion/Pages/GestionUsuarios'

export const GestionRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Gestion />} />
      <Route path="usuarios" element={<GestionUsuarios/>}/>
      <Route path="altanuevousuario" element={<AltaUsuario/>}/>
    </Routes>
  )
}
