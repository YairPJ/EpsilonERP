import React,{useEffect, useState} from 'react'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { starLoadingEmpleados } from '../../../store/Gestion/Thunks'
import CardUsuario from './CardUsuario'
import { UsuarioInfoView } from '../Views/UsuarioInfoView'

export const UsuariosSideBar = () => {
  const dispatch = useDispatch();
  const {dataUsuarios, userActive} = useSelector(state=>state.gestion);
  useEffect(() => {
    dispatch(starLoadingEmpleados());
  
  }, [])
  
  return (
    <>
      {(userActive=="")?(
        <>
      <Box sx={{ display: 'flex' }}>
        {dataUsuarios.map((dataUsuario, index) => (
          <CardUsuario key={index} dataUsuario={dataUsuario} />
        ))}
      </Box>
        </>
      ):(
        <UsuarioInfoView/>
      )
      }
    </>
  )
}
