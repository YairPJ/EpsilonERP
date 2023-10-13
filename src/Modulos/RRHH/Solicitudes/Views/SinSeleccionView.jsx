import React from 'react'
import { Icon, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';



export const SinSeleccionView = () => {
  return (
    <>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <SentimentNeutralIcon sx={{fontSize: 100}}/>
            <Typography>Selecciona o crea una nueva solicitud</Typography>
          </Box>
        </div>
    </>
  )
}
