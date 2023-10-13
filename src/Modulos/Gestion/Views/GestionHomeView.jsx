import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';

export const GestionHomeView = () => {
    const {data} = useSelector(state=>state.gestion);
    const dataInfo=data[0];
  return (
    <Box sx={{width: '500px', backgroundColor: 'darkcyan'}}>
        <Typography>Empresa: {dataInfo.Nombre}</Typography>
    </Box>
  )
}

