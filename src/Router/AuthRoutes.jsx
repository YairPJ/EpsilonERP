import React from 'react';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router';
import { Home } from '../Home/Pages/Home';
import { RRHHRoutes } from '.';
import { Perfil } from '../Home/Pages/Perfil';
import {GestionRoutes} from '.'
import { CheckInOut } from '../Home/Pages/CheckInOut';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="/Home/rrhh/*" element={<RRHHRoutes />} />
      <Route path="/Home/gestion/*" element={<GestionRoutes/>}/>
      <Route path="/home/checkInOut/*" element={<CheckInOut/>}/>
      <Route path="/Home/perfil/*" element={<Perfil/>}/>
      <Route path="/*" element={<Navigate to="Home" />} />
    </Routes>
  );
};
