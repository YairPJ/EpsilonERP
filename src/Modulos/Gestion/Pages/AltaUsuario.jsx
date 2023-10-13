import React,{useState} from 'react'
import { GestionLayout } from '../Layout/GestionLayout'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { getAuthFirebase } from '../../../helpers';
import { useDispatch } from 'react-redux';
import { showMessage } from '../../../store/HomeReducer/Home';
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { sendInfo } from '../../../helpers/sendInfo';
import { useSelector } from 'react-redux';
import { loadInfoDoc } from '../../../helpers/loadInfoDoc';
import { deleteDoc } from '@firebase/firestore';
import { deleteFirebaseDoc } from '../../../helpers/deleteFirebaseDoc';
import { Card, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';


export const AltaUsuario = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state=>state.gestion);
  const company = data[0].Nombre;

  const [emailCheck, setemailCheck] = useState("");
  const [dataUser, setdataUser] = useState({});
  const [Continue, setContinue] = useState(false);
  const [userValidated, setuserValidated] = useState(true);

  const onInputChange=(event)=>{
    setemailCheck(event.target.value);
  }


  const vincularCuenta=async(check)=>{
    const pathToConsultancy = `/${company}/Usuarios/DataUsuarios/${emailCheck}`;
    const resp = await loadInfoDoc(pathToConsultancy);
    const uidToConsultancy = resp.uid;
    const idToConsultancy = resp.id;
    if(resp){
      const pathUidCheck=`/DataUsers/${uidToConsultancy}`;
      const uidCheckResp = await loadInfoDoc(pathUidCheck);
      if(!uidCheckResp){
        dispatch(showMessage(['error','El usuario aun no tiene una cuenta creada, favor de solicitarle que cree una']))
        return;
      }
      Swal.fire({
        title: '¿Desea enviar los cambios!!!',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          const path=`/DataUsers/${uidToConsultancy}`;
          const data={Activo:true};
          const sendInfoResp = sendInfo(path,data);
          const path2=`/${company}/Usuarios/Derechos/${idToConsultancy}`;
          const data2={Gestion: false, RecursosHumanos: false}
          const sendInfoResp2 = sendInfo(path2,data2);
          if(sendInfoResp){
            Swal.fire('El usuario ha sido dado de alta exitosamente!!!','', 'success');
          }else{
            dispatch(showMessage(['error','Error al enviar la informacion']))
          }
        } else if (result.isDenied) {
          Swal.fire('No se realizo ningun cambio!!!', '', 'info')
        }
      })
    }else{
      dispatch(showMessage(['error','Error al realizar la operacion']))
    }
  }


  const checkUsuario=async()=>{
    const path=`/${company}/Usuarios/DataUsuarios/${emailCheck}`
    const resp = await loadInfoDoc(path);
    if(resp){
      setdataUser(resp);
      setContinue(true);
    }else{
      dispatch(showMessage(['error','El numero de empleado es incorrecto!!!']));
    }
  }




  return (
    <>
        <GestionLayout>
        <Paper 
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginTop: '20px' }}
        >
         <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Numero de Empleado" inputProps={{ 'aria-label': 'Correo Electronico' }} name="emailCheck" onChange={onInputChange} value={emailCheck}/>
         <IconButton onClick={checkUsuario}>
            <SearchIcon/>
         </IconButton>         
        </Paper>
        {(Continue)?(
        <>
        <Card sx={{marginTop: '50px', width: 400, background: '#F6F6F6'}}>
        {(dataUser.Active)?(
          <Box sx={{textAlign: 'center', background: 'green'}}>
          <Typography sx={{ textAlign: 'center', color: 'white', fontSize: '25px' }}>ACTIVO</Typography>
        </Box>
        ):(
          <Box sx={{textAlign: 'center', background: 'red'}}>
          <Typography sx={{ textAlign: 'center', color: 'white', fontSize: '25px' }}>INACTIVO</Typography>
          </Box>
        )}

          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>No. Empleado: {dataUser.id}</Typography>
            <Typography variant="h5" component="div">{dataUser.Nombre}</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">{dataUser.Departamento}</Typography>
            <Box sx={{marginTop: '20px'}}>
              <Typography>Informacion del Usuario:</Typography>
              <hr/>
              <Typography>Email: {dataUser.CorreoElectronico}</Typography>
              <Typography>Puesto: {dataUser.Puesto}</Typography>
              <Typography>Telefono: {dataUser.Telefono}</Typography>
            </Box>
          </CardContent>
          <Box sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
            <Button color="success" disabled={!dataUser.Active} onClick={vincularCuenta}>Activar</Button>
          </Box>
        </Card>
        </>
        ):(null)}
        </GestionLayout>
    </>
  )
}
