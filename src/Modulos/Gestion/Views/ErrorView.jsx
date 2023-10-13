import { Alert, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { cleanUserActive } from '../../../store/Gestion/Thunks';
import { setUserActive } from '../../../store/Gestion/Gestion';

export const ErrorView = () => {
    const dispatch = useDispatch();
  return (
    <Box
        sx={{width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "column",
        minHeight:"20vh"

    }}
    >
        <SentimentNeutralIcon sx={{ fontSize: '70px', color: 'warning.main' }} />
        <Alert severity="error" sx={{ mt: 2 }}>
        <Typography variant="h6">Error al cargar la información</Typography>
        <Typography>
                No puede realizar la gestión del usuario, debido a que el usuario no se encuentra activo actualmente, solamente se encuentra en la base de datos del sistema, por lo tanto no cuenta con derechos.
        </Typography>
        </Alert>
        <Button onClick={()=>dispatch(setUserActive([]))}>Aceptar</Button>
    </Box>
  )
}
