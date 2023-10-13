import { Alert, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';

export const InactiveView = () => {
  return (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="70vh"
    >
        <SentimentNeutralIcon sx={{ fontSize: '200px', color: 'warning.main' }} />
        <Alert severity="warning" sx={{ mt: 2 }}>
            <Typography variant="h6">SU CUENTA NO SE ENCUENTRA ACTIVA!!!</Typography>
            <Typography>
                Para mas información comuniquese con su compañia
            </Typography>
        </Alert>
    </Box>
)
}
