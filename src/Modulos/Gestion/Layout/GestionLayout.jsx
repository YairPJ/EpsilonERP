
import { MenuAppBar } from '../Components/AppBar'
import { Box } from '@mui/system'
import React from 'react'
import { Navbar } from '../../../UI/Components/Navar'
import { useDispatch, useSelector } from 'react-redux'

export const GestionLayout = ({children}) => {


  const appBarOptions={
    Inicio: '/Home/gestion',
    Usuarios: '/Home/gestion/usuarios',
    Alta: '/Home/gestion/altanuevousuario'
  };

  return (
    <Box>
      <Navbar data={"GESTION DE ERP"} />
      <MenuAppBar appBarOptions={appBarOptions}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '110px' }}>
        
        {children}
      </Box>
    </Box>
  )
}
