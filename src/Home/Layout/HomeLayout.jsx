import { Box } from '@mui/system'
import React from 'react'
import { Navbar } from '../../UI/Components/Navar'

export const HomeLayout = ({children}) => {
  
  return (
    <Box >
        <Navbar data={"INICIO"}/>

        <Box component="main" sx={{padding: '10px', marginTop: '50px'}}>
            {children}
        </Box>
    </Box>
  )
}

