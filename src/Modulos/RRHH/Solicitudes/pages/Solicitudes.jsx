
import React, { useEffect, useState } from 'react';
import { NuevaSolicitud } from '../Components/NuevaSolicitud';
import { SolicitudesLayout } from '../LayOut/SolicitudesLayout';
import { SinSeleccionView } from '../Views/sinSeleccionView';
import {useSelector } from 'react-redux';
import { SolicitudView } from '../Views/SolicitudView';
import { CustomButton } from '../Components/CustomButton';




export const Solicitudes = () => {
  const [newSolicitud, setnewSolicitud] = useState(false);
  const solicitud = useSelector(state => state.solicitud.active);

  const handleClick = () => {
    setnewSolicitud((prevSolicitud) => !prevSolicitud);
  };
  const handleCloseSolicitud = () => {
    setnewSolicitud(false);
  };


  return (

      <SolicitudesLayout>
      {newSolicitud ? (
        <>
        <NuevaSolicitud onClose={handleCloseSolicitud}/>
        <CustomButton newSolicitud={newSolicitud} handleClick={handleClick}/>
        </>
      ) : solicitud == "" ? (
        <>
        <SinSeleccionView/>
        <CustomButton newSolicitud={newSolicitud} handleClick={handleClick}/>
      </>
      ) : (
        <SolicitudView />
      )}

      </SolicitudesLayout>
  );
};
