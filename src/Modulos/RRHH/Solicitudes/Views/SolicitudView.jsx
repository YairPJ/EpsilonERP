import React,{useEffect, useState} from 'react'
import {Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSolicitud } from '../../../../store/erpApp/Solicitud';
import { startDelete } from '../../../../store/erpApp/Thunks';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/system/Unstable_Grid/Grid';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

export const SolicitudView = () => {
    const { active:solicitud } = useSelector(state => state.solicitud);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();


  useEffect(() => {
    setData(solicitud);
  }, [solicitud]);

  const handleDelete = () => {
    Swal.fire({
      title: '¿Desea eliminar la solicitud?',
      showDenyButton: true,
      confirmButtonText: 'Borrar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDelete());
      }
    })
  };

  const codigoArea = data.Telefono ? data.Telefono.substring(0, 3) : '';
  const firstPart = data.Telefono ? data.Telefono.substring(3, 6) : '';
  const secondPart = data.Telefono ? data.Telefono.substring(6, 10) : '';
  
    

  return (
    <>  
      <Card sx={{ minWidth: 275, marginTop: '10px' }}>
      <Box display="flex" justifyContent="flex-end">
      <IconButton onClick={() => dispatch(setActiveSolicitud([]))}>
        <CloseRoundedIcon sx={{ fontSize: '40px' }} />
      </IconButton>
      </Box>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.fecha}
          </Typography>
          <Typography variant="h5" >
            {data.nombre} {data.apellidoPaterno} {data.apellidoMaterno}
          </Typography>
          <Typography sx={{ color: 'chocolate' }}>
            {data.genero}
          </Typography>
          <hr/>
          <Typography>
            INFORMACION DE CONTACTO
            <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop:'10px' }}>
              <CallIcon sx={{ marginRight: '10px' }}/>
              ({codigoArea})-{firstPart}-{secondPart}
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop:'10px' }}>
              <AlternateEmailIcon sx={{ marginRight: '10px' }}/>
              {solicitud.CorreoElectronico}
            </Typography>
          </Typography>
          <hr/>
          <Typography>
            DATOS DE DOMICILIO
            <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop:'10px' }}>
              <LocationCityIcon sx={{ marginRight: '10px' }}/>
              {solicitud.Ciudad}, {solicitud.EstadoDeVivienda}
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop:'10px' }}>
              <MarkunreadMailboxIcon sx={{ marginRight: '10px' }}/>
              {solicitud.CodigoPostal} - {solicitud.Calle} #{solicitud.Numero}
            </Typography>
          </Typography>
          <hr/>
          <Typography>
            EDUCACION
              {solicitud.Primaria ? (
                <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop:'10px' }}>
                  <SchoolRoundedIcon sx={{ marginRight: '10px' }} />
                  Primaria: {solicitud.Primaria}
                </Typography>
              ) : null}

              {solicitud.Secundaria ? (
                <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop:'10px' }}>
                  <SchoolRoundedIcon sx={{ marginRight: '10px' }} />
                  Secundaria: {solicitud.Secundaria}
                </Typography>
              ) : null}

              {solicitud.Preparatoria ? (
                <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop:'10px' }}>
                  <SchoolRoundedIcon sx={{ marginRight: '10px' }} />
                  Bachillerato: {solicitud.Preparatoria}
                </Typography>
              ) : null}

              {solicitud.Universidad ? (
                <>
                <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop:'10px' }}>
                  <SchoolRoundedIcon sx={{ marginRight: '10px' }} />
                  Universidad: {solicitud.Universidad}
                </Typography>
                 <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '50px', marginTop:'10px' }}>
                  <HistoryEduIcon sx={{ marginRight: '10px' }}/>
                    {solicitud.Carrera}
                    </Typography>
                </>
              ) : null}

              {solicitud.Posgrado ? (
                <>
                <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop:'10px' }}>
                  <SchoolRoundedIcon sx={{ marginRight: '10px' }} />
                  Posgrado: {solicitud.Posgrado}
                </Typography>
                 <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '50px', marginTop:'10px' }}>
                  <HistoryEduIcon sx={{ marginRight: '10px' }}/>
                    {solicitud.NombrePosgrado}
                    </Typography>
                </>
              ) : null}
          </Typography>
          <Grid container justifyContent="end">
              <IconButton sx={{ backgroundColor: 'red', color: 'white' }} onClick={handleDelete}>
                  <DeleteOutlineSharpIcon fontSize='large'/>
              </IconButton>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}  