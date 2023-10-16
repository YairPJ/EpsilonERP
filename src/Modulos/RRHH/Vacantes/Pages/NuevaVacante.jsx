import React,{useState} from 'react'
import {TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { VacatesLayout } from '../Layout/VacatesLayout'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useForm } from '../../../../Hooks';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from '../../../../store/HomeReducer/Home';
import { onlySendNewInfo } from '../../../../helpers/onlySendNewInfo';
import { Navigate, useNavigate } from 'react-router';
import { fechaHoy } from '../../../../helpers/fechaHoy';

export const NuevaVacante = () => {
  const now = fechaHoy();
  const [responsabilidades, setResponsabilidades] = useState(['']); 
  const {dataUser, name}=useSelector(state=>state.auth);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleResponsabilidadChange = (index, event) => {
    const updatedResponsabilidades = [...responsabilidades];
    updatedResponsabilidades[index] = event.target.value;
    setResponsabilidades(updatedResponsabilidades);
  };

  const handleAgregarResponsabilidad = () => {
    setResponsabilidades([...responsabilidades, '']);

  };

  const [habilidades, setHabilidades] = useState(['']); 

  const handleHabilidades = (index, event) => {
    const updateHabilidades = [...habilidades];
    updateHabilidades[index] = event.target.value;
    setHabilidades(updateHabilidades);
  };

  const handleAgregarHabilidades = () => {
    setHabilidades([...habilidades, '']);
  };

  const formData={
      titulo: '',
      ubicacion: '',
      departamento: '',
      sueldoMensual: '',
      tipoVacante: '',
      horaInicio: '',
      horaFin: '',
  }

  const {titulo, ubicacion, departamento, sueldoMensual, tipoVacante, horaInicio, horaFin, onInputChange, formState}=useForm(formData);

  const sendInformation=async()=>{
    const data={
      ...formState,
      habilidades: habilidades,
      responsabilidades: responsabilidades,
      solicitadoPor: name,
      Fecha: now,
    }
    const path=`/${dataUser.Empresa}/ERP/Vacantes`;
    const resp = await onlySendNewInfo(path,data);
    if(resp){
      dispatch(showMessage(['success','La vacante ha sido creada con exito!!!']))
      Navigate("/home/rrhh/vacantes");

    }else{
      dispatch(showMessage(['error','error al enviar la inforamcion']))
    }
  }


  const tiposVacantes=[
    "Tiempo Completo",
    "Medio Tiempo",
    "Becario",
    "Temporal",
    "Por Temporada"
  ]
  return (
    <VacatesLayout>
    <Box
    component="form"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      '& .MuiTextField-root': { m: 0.5, marginTop: '10px'  },
      width: '100%',
      marginTop: '10px',
    }}
    >
        <Box sx={{width: '100%', alignItems: 'center', textAlign: 'center', marginBottom: '40px'}}>
          <Typography variant="h3">SOLICITUD DE NUEVA VACANTE</Typography>
        </Box>
    <Grid container spacing={3} sx={{backgroundColor: '#E6E6E6', borderRadius: '20px'}}>
      <Grid item xs={6}>
        <Box>
          <Typography>Titulo de la vacante</Typography>
          <TextField sx={{backgroundColor: 'white'}} required placeholder="Titulo del Puesto" fullWidth name="titulo" value={titulo} onChange={onInputChange}/>
          <Box>
          <Typography>GENERALES DE LA VACANTE</Typography>
          <TextField sx={{backgroundColor: 'white'}} required id="outlined-required" label="Ubicacion" name="ubicacion" value={ubicacion} onChange={onInputChange}/>
          <TextField sx={{backgroundColor: 'white'}} required id="outlined-required" label="Departamento" name="departamento" value={departamento} onChange={onInputChange}/>
          <TextField sx={{backgroundColor: 'white'}} id="outlined-required" label="Sueldo Mensual" name="sueldoMensual" value={sueldoMensual} onChange={onInputChange}/>
          <FormControl sx={{backgroundColor: 'white'}} sx={{width: '400px',marginTop: '10px'}}>
          <InputLabel  id="demo-simple-select-label">Seleccione el tipo de la vacante</InputLabel>
          <Select sx={{backgroundColor: 'white'}} labelId="demo-simple-select-label" id="demo-simple-select" label="Seleccione el tipo de la Vacante" name="tipoVacante" value={tipoVacante} onChange={onInputChange}>
            {tiposVacantes.map((vacante)=>(
              <MenuItem key={vacante} value={vacante}>{vacante}</MenuItem>
            ))}
          </Select>
          </FormControl>
          <Box>
          <Typography>Horario de Trabajo</Typography>
          <TextField sx={{backgroundColor: 'white'}} id="outlined-required" label="Inicio" type="time" name="horaInicio" value={horaInicio} onChange={onInputChange}/>
          <TextField sx={{backgroundColor: 'white'}} id="outlined-required" label="Fin" type="time" name="horaFin" value={horaFin} onChange={onInputChange}/>
        </Box>
        </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>
        <Typography>Responsabilidades</Typography>
          {responsabilidades.map((responsabilidad, index) => (
            <TextField sx={{backgroundColor: 'white'}} key={index} id={`responsabilidad-${index}`} label={`Responsabilidad ${index + 1}`} onChange={(event) => handleResponsabilidadChange(index, event)} style={{ marginBottom: '10px' }} />
          ))}
        </Box>
        <Button onClick={handleAgregarResponsabilidad}>Añadir</Button>
        <Box>
          <Typography>Habilidades</Typography>
          {habilidades.map((habilidad, index) => (
            <TextField sx={{backgroundColor: 'white'}} key={index} id={`responsabilidad-${index}`} label={`Habilidad ${index + 1}`} onChange={(event) => handleHabilidades(index, event)} style={{ marginBottom: '10px' }} />
          ))}
        </Box>
        <Button onClick={handleAgregarHabilidades}>Añadir</Button>
      </Grid>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', margin: '20px' }}>
        <Button variant="contained" onClick={sendInformation} endIcon={<SendIcon />}>
          Enviar la Informacion
        </Button>
      </Box>     
    </Grid>
    </Box>  
    </VacatesLayout>

  )
}
