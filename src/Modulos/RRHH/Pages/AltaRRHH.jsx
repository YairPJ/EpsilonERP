import React from 'react'
import '../Styles/AltaRRHH.css'
import { RRHHLayout } from '../Layout/RRHHLayout';


import Box from '@mui/material/Box';
import { SolicitudesLayout } from '../Solicitudes/LayOut/SolicitudesLayout';
import { AltaRRHHView } from '../Views/AltaRRHHView';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

export const AltaRRHH = () => {
  const {active} = useSelector(state=>state.solicitud);
  return (
    <>
    <RRHHLayout>
      <SolicitudesLayout>
          {
            (!active.id)?(
              <Box sx={{width:'100%', alignItems: 'center', display: 'flex', flexDirection: "column", justifyContent: "center"}}>
                  <Typography variant="h6">Seleccione una solicitud para continuar</Typography>
              </Box>
            ):(
              <AltaRRHHView/>
            )
          }
      </SolicitudesLayout>
      </RRHHLayout>
    </>

  )
}
