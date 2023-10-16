
import { IconButton, List, ListItem, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { cleanVacante } from '../../../../store/RRHH/Thunks';

export const VacanteView = ({data}) => {
    const dispatch = useDispatch();
  return (
    <>
        <Paper>
        <Box sx={{ position: 'relative' }}>
        <IconButton
        onClick={()=>dispatch(cleanVacante())}
          color="error"
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        >
          <CloseIcon sx={{fontSize: '40px'}}/>
        </IconButton>
            <Box sx={{padding: '20px'}}>
                <Typography variant="h4">{data.titulo}</Typography>
                <hr/>
                <Typography>Fecha: {data.Fecha}</Typography>
                <Box sx={{marginLeft: '10%'}}>
                    <List>
                        <ListItem>
                            <Typography>Solicitado por: {data.solicitadoPor}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Ubicacion: {data.ubicacion}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Departamento: {data.departamento}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Tipo: {data.tipoVacante}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Sueldo Mensual (aproximado): $ {data.sueldoMensual}</Typography>
                        </ListItem>
                    </List>
                </Box>
                <Typography>Horario de la vacante</Typography>
                <Box sx={{marginLeft: '10%'}}>
                    <List>
                        <ListItem>
                            <Typography>Inicio: {data.horaInicio}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Fin: {data.horaFin}</Typography>
                        </ListItem>
                    </List>
                </Box>
                <Typography>Habilidades</Typography>
                <Box sx={{marginLeft: '10%'}}>
                <List>
                    {data.habilidades.map((element, index) => (
                        <ListItem key={index}>
                            <Typography>{element}</Typography>
                        </ListItem>
                    ))}
                </List>
                </Box>
                <Typography>Responsabilidades</Typography>
                <Box sx={{marginLeft: '10%'}}>
                <List>
                    {data.responsabilidades.map((element, index) => (
                        <ListItem key={index}>
                                                        <Typography>{element}</Typography>
                        </ListItem>
                    ))}
                </List>
                </Box>
            </Box>
            </Box>
        </Paper>
    </>
  )
}
