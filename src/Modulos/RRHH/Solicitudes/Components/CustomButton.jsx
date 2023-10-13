import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export const CustomButton = ({newSolicitud, handleClick}) => {
    const backgroundColor = newSolicitud ? '#ff0000' : '#1c74d4';
  return (
      <>
        <IconButton
        sx={{
          color: 'white',
          backgroundColor: backgroundColor, // Usa la variable backgroundColor aquí
          ':hover': { backgroundColor: backgroundColor, opacity: 0.5 },
          position: 'absolute',
          right: 50,
          bottom: 50,
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
          position: 'fixed',
          bottom: '50px',
          right: '50px',
          zIndex: '999',
        }}
        onClick={handleClick}
      >
        {newSolicitud ? <CloseIcon sx={{ fontSize: '40px' }} /> : <AddCircleOutlineIcon sx={{ fontSize: '40px' }} />}
      </IconButton>
      </>
  )
}
