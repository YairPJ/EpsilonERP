import React,{useState} from 'react'
import {TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { VacatesLayout } from '../Layout/VacatesLayout'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

export const NuevaVacante = () => {
  const [responsabilidades, setResponsabilidades] = useState(['']); 

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
          '& .MuiTextField-root': { m: 1, width: '25ch', marginTop: '10px'  },
          alignItems: 'center',
          textAlign: 'center',
          textAlign: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: '10px',
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4">SOLICITUD DE NUEVA VACANTE</Typography>
        <Box>
          <Typography>DATOS DE LA VACANTE</Typography>
          <input required placeholder="Titulo del Puesto" style={{backgroundColor: '#EFEFEF', width: '500px'}}/>
        </Box>
        <Box>
          <Typography>GENERALES DE LA VACANTE</Typography>
          <TextField required id="outlined-required" label="Ubicacion" />
          <TextField required id="outlined-required" label="Departamento" />
          <TextField id="outlined-required" label="Sueldo Mensual"/>
        </Box>
        <Box>
        <Typography>Tipo de la vancante</Typography>
        <FormControl sx={{width: '400px'}}>
          <InputLabel id="demo-simple-select-label">Seleccione el tipo de la vacante</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Seleccione el tipo de la Vacante">
            {tiposVacantes.map((vacante)=>(
              <MenuItem key={vacante} value={vacante}>{vacante}</MenuItem>
            ))}
          </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography>Horario de Trabajo</Typography>
          <TextField id="outlined-required" label="Inicio" type="time" defaultValue="09:00"/>
          <TextField id="outlined-required" label="Fin" type="time" defaultValue="16:00"/>
        </Box>
        <Box>
          <Typography>Responsabilidades</Typography>
          {responsabilidades.map((responsabilidad, index) => (
            <TextField key={index} id={`responsabilidad-${index}`} label={`Responsabilidad ${index + 1}`} variant="standard" onChange={(event) => handleResponsabilidadChange(index, event)} style={{ marginBottom: '10px' }} />
          ))}
        </Box>
        <Button onClick={handleAgregarResponsabilidad}>Añadir</Button>
        <Box>
          <Typography>Habilidades</Typography>
          {habilidades.map((habilidad, index) => (
            <TextField key={index} id={`responsabilidad-${index}`} label={`Habilidad ${index + 1}`} variant="standard" onChange={(event) => handleHabilidades(index, event)} style={{ marginBottom: '10px' }} />
          ))}
        </Box>
        <Button onClick={handleAgregarHabilidades}>Añadir</Button>
        <br/>
        <Button variant="contained" endIcon={<SendIcon />}>
        Enviar la Informacion
        </Button>
      </Box>
    </VacatesLayout>

  )
}
