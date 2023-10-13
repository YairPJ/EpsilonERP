import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Toolbar, Typography } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';
import { setActiveSolicitud } from '../../../../store/erpApp/Solicitud';
import { useDispatch, useSelector } from 'react-redux';

export const SideBar = ({ drawerWidth }) => {
  const { name } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { solicitudes } = useSelector(state => state.solicitud);
  const [solicitudesList, setsolicitudesList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setsolicitudesList(solicitudes);
  }, [solicitudes]);

  const filteredSolicitudes = solicitudesList.filter(
    (solicitud) =>
      solicitud.nombre
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      solicitud.apellidoPaterno
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      solicitud.apellidoMaterno
        .toLowerCase()
        .includes(searchText.toLowerCase())
  );

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, marginTop: '100px' }}
        >
          {/* Contenido principal */}
        </Box>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Drawer
            variant="permanent"
            open
            sx={{
              display: { xs: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                marginTop: '100px',
              },
            }}
            key={solicitudesList.length}
          >
            <TextField 
              id="standard-basic" 
              label="Buscar" 
              variant="standard"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Divider />
      
            <List>
              {/* Verificar si solicitudes existe y si contiene datos*/}
              {filteredSolicitudes && filteredSolicitudes.length > 0 ? (
                filteredSolicitudes.map(solicitud => (
                  <ListItem key={solicitud.id} disablePadding>
                    <ListItemButton onClick={() => dispatch(setActiveSolicitud(solicitud))}>
                      <ListItemIcon>
                        <TurnedInNot />
                        <ListItemText primary={solicitud.nombre + " " + solicitud.apellidoPaterno + " " + solicitud.apellidoMaterno} />
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                ))
              ) : (
                <Box sx={{ width: '100%' }}>
                  {(filteredSolicitudes.length>0)?(
                  <LinearProgress />
                  ):(
                    <Typography>No se encontraron solicitudes</Typography>
                  )
                  }
                </Box>
              )}
            </List>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};
