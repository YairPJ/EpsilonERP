import { AppBar } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingData } from '../../../store/Gestion/Thunks'
import { GestionLayout } from '../Layout/GestionLayout'
import { DownloadingView } from '../Views/DownloadingView'
import { GestionHomeView } from '../Views/GestionHomeView'

export const Gestion = () => {
const dispatch = useDispatch();
const {isLoading, data} = useSelector(state=>state.gestion);

useEffect(() => {
  dispatch(startLoadingData());
}, [])

return (
  <GestionLayout>
      {(data.length>0)
      ?(
        <GestionHomeView/>
      ):(
        <DownloadingView/>
      )
      
      }
  </GestionLayout>
)
}
