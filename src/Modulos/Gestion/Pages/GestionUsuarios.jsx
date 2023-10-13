import { Box } from '@mui/system'
import React from 'react'
import { UsuariosSideBar } from '../Components/UsuariosSideBar'
import { GestionLayout } from '../Layout/GestionLayout'

export const GestionUsuarios = () => {
  return (
    <GestionLayout>
        <Box>
            <UsuariosSideBar/>

        </Box>
    </GestionLayout>
  )
}
