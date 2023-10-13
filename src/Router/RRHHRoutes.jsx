import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import { ConsultaEmpleados } from '../Modulos/RRHH/Pages/ConsultaEmpleados';
import { AltaRRHH } from '../Modulos/RRHH/Pages/AltaRRHH';
import { HomeRRHH } from '../Modulos/RRHH/Pages/HomeRRHH';
import { Solicitudes } from '../Modulos/RRHH/Solicitudes/pages/Solicitudes';
import { Vacantes } from '../Modulos/RRHH/Vacantes/Pages/Vacantes';
import { NuevaVacante } from '../Modulos/RRHH/Vacantes/Pages/NuevaVacante';
import { Asistencias } from '../Modulos/RRHH/Pages/Asistencias';

export const RRHHRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeRRHH />} />
      <Route path="consultaempleados" element={<ConsultaEmpleados />} />
      <Route path="altaEmpleado" element={<AltaRRHH />} />
      <Route path="solicitudDeEmpleo" element={<Solicitudes />} />
      <Route path="vacantes" element={<Vacantes/>}/>
      <Route path="nuevaVacante" element={<NuevaVacante/>}/>
      <Route path="asistencias" element={<Asistencias/>}/>
    </Routes>
  );
};
