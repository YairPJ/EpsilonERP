import { Box } from '@mui/system'
import React from 'react'
import { TableVacantes } from '../Components/TableVacantes'
import { VacatesLayout } from '../Layout/VacatesLayout'

export const Vacantes = () => {
  return (
    <VacatesLayout>
        <Box sx={{marginTop: '30px'}}>
          <TableVacantes/>
        </Box>
    </VacatesLayout>
  )
}
