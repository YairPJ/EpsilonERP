import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Fab, IconButton, Avatar, FormGroup, FormControlLabel, LinearProgress, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { setUserActive, setUserActiveDerechos } from '../../../store/Gestion/Gestion';
import Switch from '@mui/material/Switch';
import { loadImageSecurity } from '../../../helpers/loadImageSecurity';
import { startLoadingDerechosEmpleado, startUpdateUserInformation } from '../../../store/Gestion/Thunks';
import { useNavigate } from 'react-router';
import { showMessage } from '../../../store/HomeReducer/Home';
import { ErrorView } from './errorView';

export const UsuarioInfoView = () => {
  const { userActive, isLoading, userActiveDerechos } = useSelector(state => state.gestion);
  const [securityUrl, setSecurityUrl] = useState('');
  const [rights, setRights] = useState(true);
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    Nombre: userActive.Nombre,
    Departamento: userActive.Departamento,
    Puesto: userActive.Puesto,
    Estado: userActive.Estado || '',
    Ciudad: userActive.Ciudad || '',
    Sucursal: userActive.Sucursal || '',
  });


  const [switchDerechos, setswitchDerechos] = useState({
    Gestion: false, 
    RecursosHumanos: false, 
  });

  useEffect(() => {
    async function fetchImageSecurityUrl() {
      try {
        const url = await loadImageSecurity(userActive.ImagenUrl);
        setSecurityUrl(url);
      } catch (error) {

      }
    }

    fetchImageSecurityUrl();
  }, [userActive.ImagenUrl]);

  useEffect(() => {
    dispatch(startLoadingDerechosEmpleado());
  }, []);

  useEffect(() => {
    if (userActiveDerechos) {
      setswitchDerechos({
        Gestion: userActiveDerechos.Gestion || false,
        RecursosHumanos: userActiveDerechos.RecursosHumanos || false,
      });
    }
  }, [userActiveDerechos]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onInputChangeDerechos = (event) => {
    const { name, checked } = event.target;
    setswitchDerechos((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startUpdateUserInformation(switchDerechos, "Derechos"));
    dispatch(startUpdateUserInformation(inputValues, "DataUsuarios"));
    dispatch(setUserActive([]));
    dispatch(setUserActiveDerechos([]));
  }

  if (!userActiveDerechos) {
    return (
      <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
        <ErrorView/>
      </Box>
    );
  }

  

  return (
    <Box component="form" sx={{ width: '100%', backgroundColor: '#F2F3F4', marginTop: '20px' }}>
    <Box sx={{ width: '100%', backgroundColor: '#CACFD2', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h4">
        INFORMACION DEL USUARIO
      </Typography>
      <IconButton onClick={()=>dispatch(setUserActive([]))}>
        <CloseIcon fontSize="large" sx={{color: 'red'}}/>
      </IconButton>
    </Box>
      <Box sx={{ display: 'block', flexDirection: 'column', alignItems: 'flex-start', marginTop: '10px', padding: '10px'}}>
      <Avatar sx={{width: '100px', height: '100px', marginLeft: '20px', '&hover':{backgroundColor: '#f0f0f0'},}} src={securityUrl} onClick={()=>alert("Hola")}/>
      
        <TextField sx={{width: '300px', marginLeft: '20px', marginTop: '10px'}} id="filled-basic" label="Nombre: " variant="filled" defaultValue={userActive.Nombre} disabled/>
        <TextField sx={{width: '300px', marginLeft: '20px', marginTop: '10px'}} id="filled-basic" label="Departamento: " variant="filled" defaultValue={userActive.Departamento} disabled/>
        <TextField sx={{width: '300px', marginLeft: '20px', marginTop: '10px'}} id="filled-basic" label="Puesto: " variant="filled" defaultValue={userActive.Puesto} disabled/>
        <br/>
        <TextField sx={{width: '300px', marginLeft: '20px', marginTop: '10px'}} id="filled-basic" label="Estado: " variant="filled" defaultValue={userActive.Estado || ''} disabled={rights} onChange={onInputChange} value={inputValues.Estado} name="Estado"/>
        <TextField sx={{width: '300px', marginLeft: '20px', marginTop: '10px'}} id="filled-basic" label="Ciudad: " variant="filled" defaultValue={userActive.Ciudad || ''} disabled={rights} onChange={onInputChange} value={inputValues.Ciudad} name="Ciudad"/>
        <TextField sx={{width: '300px', marginLeft: '20px', marginTop: '10px'}} id="filled-basic" label="Sucursal: " variant="filled" defaultValue={userActive.Sucursal || ''} disabled={rights} onChange={onInputChange} value={inputValues.Sucursal} name="Sucursal"/>
        <br/>
        <hr/>
        <Typography fontSize="25px" sx={{marginLeft: '20px'}}>Derechos</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={switchDerechos.Gestion} />}
            label="Gestion"
            disabled={rights}
            name="Gestion"
            onChange={onInputChangeDerechos}
          />
          <FormControlLabel
            control={<Switch checked={switchDerechos.RecursosHumanos} />}
            label="Recursos Humanos"
            disabled={rights}
            name="RecursosHumanos"
            onChange={onInputChangeDerechos}
          />
        </FormGroup>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
      {(rights)?(
      <Fab color="secondary" aria-label="edit" sx={{margin: '10px'}} onClick={()=>setRights(false)}>
      <EditIcon />
      </Fab>
      ):(
        <>
        <Fab color="primary" aria-label="edit" sx={{margin: '10px'}} onClick={onSubmit} >
        <SaveIcon/>
        </Fab>
        </>
      )
      
    }
      </Box>
      {isLoading ? <LinearProgress color="success"/>: null}
    </Box>
  );
};
