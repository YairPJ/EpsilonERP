import { Box } from '@mui/system'
import React, { Children } from 'react'
import { RRHHLayout } from '../../Layout/RRHHLayout'

export const VacatesLayout = ({children}) => {
  return (
    <RRHHLayout>
     <Box sx={{ display: 'flex' }}>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
    </Box>
</Box>
    </RRHHLayout>
  )
}
