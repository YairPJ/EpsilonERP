import { Modal } from '@mui/base'
import { Alert, LinearProgress } from '@mui/material'
import { Box } from '@mui/system'
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSetVacantesActivas } from '../../../../store/RRHH/Thunks'

import { TableVacantes } from '../Components/TableVacantes'
import { VacatesLayout } from '../Layout/VacatesLayout'
import { VacanteView } from '../Views/VacanteView'

export const Vacantes = () => {
  const dispatch=useDispatch();
  const {vacantesActivas, isLoading, active}=useSelector(state=>state.rrhh);


  useEffect(() => {
    dispatch(startSetVacantesActivas());
  }, [])

  
  
  return (
    <VacatesLayout>
        <Box sx={{marginTop: '30px'}}>
        {(isLoading)?(
            <LinearProgress/>
        ):(
          (vacantesActivas.length>0)?(
            (active)?(
              <VacanteView data={active}/>
            ):(
            <>
            <TableVacantes data={vacantesActivas}/>
            </>
            )
          ):(
            <>
            <Alert severity="warning">No se encontro informacion!!!</Alert>
            </>
          )
        )}
        </Box>
    </VacatesLayout>
  )
}
