import { Paper, TextField, Typography, Grid, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import DialogChangeEmail from '../Components/DialogChangeEmail';
import { useForm } from '../../../Hooks';

export const AltaRRHHView = () => {
    const {active} = useSelector(state=>state.solicitud);
    const [open, setopen] = useState(false);

    const ShowDialogChangeEmail=()=>{
        setopen(true);
    }
    const handleCloseDialog = () => {
        setopen(false);
      };

    const codigoArea = active.Telefono ? active.Telefono.substring(0, 3) : '';
    const firstPart = active.Telefono ? active.Telefono.substring(3, 6) : '';
    const secondPart = active.Telefono ? active.Telefono.substring(6, 10) : '';

    const formData={
        departamento: '',
        puesto: '',
        sucursal: '',
      }

    const {departamento, puesto, sucursal, onInputChange}=useForm(formData);
    
    
    
  return (
    <Paper sx={{padding: '30px'}}>
        <DialogChangeEmail open={open} onClose={handleCloseDialog} departamento={departamento} puesto={puesto} sucursal={sucursal}/>
        <Typography sx={{fontSize: '15px', color: 'gray'}}>{active.fecha}</Typography>
        <Typography variant="h5">{active.nombre+" "+active.apellidoPaterno+" "+active.apellidoMaterno}</Typography>
        <hr/>
        <Typography sx={{color: '#646464', backgroundColor: '#E6E6E6'}}>Datos de vivineda: </Typography>
        <Typography>{active.Calle+" "+active.Numero+". "+active.Ciudad+", "+active.EstadoDeVivienda}</Typography>
        <Typography sx={{color: '#646464', backgroundColor: '#E6E6E6'}}>Datos de Contacto: </Typography>
        <Typography>Telefono: ({codigoArea})-{firstPart}-{secondPart}</Typography>
        <Typography sx={{color: '#646464', backgroundColor: '#E6E6E6'}}>Correo Electronico para activar su cuenta en EPSILON  <IconButton><EditIcon/></IconButton> </Typography>
        <Typography>Correo: {active.CorreoElectronico}</Typography>
        <hr/>
        <Box component="form">
            <Typography sx={{fontSize: '10px'}}>INGRESE EL AREA PARA DAR DE ALTA AL EMPLEADO</Typography>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
                <TextField label="Departamento: " variant="outlined" onChange={onInputChange} value={departamento} name="departamento"   required/>
                <TextField label="Puesto: " variant="outlined" onChange={onInputChange} value={puesto} name="puesto" required/>
                <TextField label="Sucursal: " variant="outlined" onChange={onInputChange} value={sucursal} name="sucursal" required/>
            </Box>
            <br/>
            <Button onClick={ShowDialogChangeEmail}>Guardar y Dar de alta al empleado</Button>
        </Box>
    </Paper>
  )
}
