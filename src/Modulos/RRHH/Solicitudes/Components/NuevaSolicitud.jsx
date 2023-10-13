import React, { useState } from 'react';
import '../Styles/NuevaSolicitud.css';
import {estadosMexico} from '../../Components/EstadoDeMexico';
import { useForm } from '../../../../Hooks';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup } from '@mui/material';
import { startNewSolicitud } from '../../../../store/erpApp/Thunks';
import {fechaHoy} from '../../../../helpers/fechaHoy';

export const NuevaSolicitud = ({ onClose}) => {
  const fechaActual = fechaHoy();
  const [formSubmitted, setformSubmitted] = useState(false);
  const formData={
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    genero: '',
    EstadoDeNacimiento: '',
    Telefono: '',
    CorreoElectronico: '',
    EstadoDeVivienda: '',
    Ciudad: '',
    Calle: '',
    Numero: '',
    Interior: '',
    CodigoPostal: '',
    Primaria: '',
    Secundaria: '',
    Preparatoria: '',
    Universidad: '',
    Posgrado: '',
    Carrera: '',
    NombrePosgrado: '',
    fecha: fechaActual,

  }

  const dispatch=useDispatch();
  const {isSaving, active}=useSelector(state=>state.solicitud);
  
  const {nombre, apellidoMaterno, apellidoPaterno, genero, EstadoDeNacimiento, Telefono, 
    CorreoElectronico,EstadoDeVivienda, Ciudad, Calle, Numero, Interior, CodigoPostal,
    Primaria,Secundaria,Preparatoria,Universidad,Posgrado,Carrera,NombrePosgrado, formState,
     onInputChange}=useForm(formData);


  const [checkboxes, setCheckboxes] = useState({
    Primaria: false,
    Secundaria: false,
    Preparatoria: false,
    Universidad: false,
    Posgrado: false,
  });


  const onsubmit=(event)=>{
    event.preventDefault();
    setformSubmitted(true);
    dispatch(startNewSolicitud(formState));
    onClose();
    
  }

  const handleCheckBoxChange=(event)=>{
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  }

  return (
    <>
      <Box component="h1" style={{ position: 'relative', fontFamily: 'Arial' }}>
        REGISTRO DE SOLICITUD

        </Box>
      <Box onSubmit={onsubmit} component="form" style={{ width: '80%' }} sx={{ '& > :not(style)': { m: 1, width: '35ch' } }} noValidate>
        <div className="subtitle">Datos Generales</div>
        <TextField name="nombre" id="outlined-basic" label="Nombre(s)" variant="outlined" required onChange={onInputChange} value={nombre} required/>
        <TextField name="apellidoPaterno" id="outlined-basic" label="Apellido Paterno" variant="outlined" required onChange={onInputChange} value={apellidoPaterno}/>
        <TextField name="apellidoMaterno" id="outlined-basic" label="Apellido Materno" variant="outlined" required onChange={onInputChange} value={apellidoMaterno}/>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Género:</InputLabel>
          <Select style={{ width: '31.5ch' }} labelId="demo-simple-select-label" id="demo-simple-select" label="Género" value={genero} onChange={onInputChange} name="genero">
            <MenuItem value="Hombre">Hombre</MenuItem>
            <MenuItem value="Mujer">Mujer</MenuItem>
            <MenuItem value="No Binario">No Binario</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Estado de Nacimiento:</InputLabel>
        <Select style={{ width: '31.5ch' }} labelId="demo-simple-select-label" id="demo-simple-select" label="Género" value={EstadoDeNacimiento} onChange={onInputChange} name="EstadoDeNacimiento" required>
          {estadosMexico.map((estado) => (
            <MenuItem key={estado} value={estado}>{estado}</MenuItem>
          ))}
        </Select>
      </FormControl>
        <div className="subtitle">Datos De Contacto:</div>
        <TextField name="Telefono" id="outlined-basic" label="Numero de Telefono" variant="outlined" required onChange={onInputChange} value={Telefono}/>
        <TextField name="CorreoElectronico" id="outlined-basic" label="Correo Electronico" variant="outlined" required onChange={onInputChange} value={CorreoElectronico} type="email" />
        <div className="subtitle">Datos De Vivienda:</div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" required>Estado de Vivienda Actual:</InputLabel>
          <Select style={{ width: '31.5ch' }} labelId="demo-simple-select-label" id="demo-simple-select" label="Género" value={EstadoDeVivienda} onChange={onInputChange} name="EstadoDeVivienda" required>
            {estadosMexico.map((estado) => (
              <MenuItem key={estado} value={estado}>{estado}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField name="CodigoPostal" id="outlined-basic" label="Codigo Postal" variant="outlined" required onChange={onInputChange} value={CodigoPostal}/>
        <TextField name="Ciudad" id="outlined-basic" label="Ciudad" variant="outlined" required onChange={onInputChange} value={Ciudad}/>
        <TextField name="Calle" id="outlined-basic" label="Calle" variant="outlined" required onChange={onInputChange} value={Calle}/>
        <TextField name="Numero" id="outlined-basic" label="Numero Exterior" variant="outlined" required onChange={onInputChange} value={Numero}/>
        <TextField name="Interior" id="outlined-basic" label="Numero Interior" variant="outlined" required onChange={onInputChange} value={Interior}/>
        <div className="subtitle">Datos de Educación:</div>
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox onChange={handleCheckBoxChange} name="Primaria" checked={checkboxes.Primaria}/>} label="Primaria"/>
                {checkboxes.Primaria && (
                  <TextField id="outlined-basic" label="Nombre De La Escuela" variant="outlined" onChange={onInputChange} value={Primaria} name="Primaria"/>
                )}
                <FormControlLabel control={<Checkbox onChange={handleCheckBoxChange} name="Secundaria" checked={checkboxes.Secundaria}/>} label="Secundaria"/>
                {checkboxes.Secundaria && (
                  <TextField id="outlined-basic" label="Nombre De La Escuela" variant="outlined" onChange={onInputChange} value={Secundaria} name="Secundaria"/>
                )}
                <FormControlLabel control={<Checkbox onChange={handleCheckBoxChange} name="Preparatoria" checked={checkboxes.Preparatoria}/>} label="Preparatoria"/>
                {checkboxes.Preparatoria && (
                  <TextField id="outlined-basic" label="Nombre De La Escuela" variant="outlined" onChange={onInputChange} value={Preparatoria} name="Preparatoria"/>
                )}
                <FormControlLabel control={<Checkbox onChange={handleCheckBoxChange} name="Universidad" checked={checkboxes.Universidad}/>} label="Universidad"/>
                {checkboxes.Universidad && (
                  <>
                  <TextField id="outlined-basic" label="Nombre De La Escuela" variant="outlined" onChange={onInputChange} value={Universidad} name="Universidad"/>
                  <TextField id="outlined-basic" label="Carrera" variant="outlined" onChange={onInputChange} value={Carrera} name="Carrera"/>
                  </>
                )}
                <FormControlLabel control={<Checkbox onChange={handleCheckBoxChange} name="Posgrado" checked={checkboxes.Posgrado}/>} label="Posgrado"/>
                {checkboxes.Posgrado && (
                  <>
                  <TextField id="outlined-basic" label="Nombre De La Escuela" variant="outlined" onChange={onInputChange} value={Posgrado} name="Posgrado"/>
                  <TextField id="outlined-basic" label="Pogrado" variant="outlined" onChange={onInputChange} value={NombrePosgrado} name="NombrePosgrado"/>
                  </>
                )}
            </FormGroup>
        </div>
        <Stack direction="row">
          <Button type="submit" disabled={isSaving}>Enviar Solicitud</Button>
        </Stack>
      </Box>
      <Box sx={{ minWidth: 120 }}></Box>
    </>
  );
};
