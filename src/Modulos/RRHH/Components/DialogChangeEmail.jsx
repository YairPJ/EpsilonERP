import React,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { sendInfo } from '../../../helpers/sendInfo';
import { showMessage } from '../../../store/HomeReducer/Home';
import { startDelete } from '../../../store/erpApp/Thunks';
import Swal from 'sweetalert2';
import { current } from 'immer';
import { GenerarID } from '../../../helpers/GenerarID';

export default function DialogChangeEmail({open, onClose, departamento, sucursal, puesto}) {
    const {active} = useSelector(state=>state.solicitud);
    const dispatch=useDispatch();
    const {dataUser} = useSelector(state=>state.auth);
    const [email, setemail] = useState(active.CorreoElectronico);
    const handleEmail=(event)=>{
        event.preventDefault();
        setemail(event.target.value);
        
    }
    const currentDate=new Date();
    const actualdate=currentDate.getDate().toLocaleString()+"/"+(currentDate.getMonth()+1).toLocaleString()+"/"+currentDate.getUTCFullYear();
    const sendInformation=async()=>{
      const company=dataUser.Empresa;
      const uid = await GenerarID(company);
        const path=`/${company}/ERP/Solicitudes/${active.id}`
        const data={CorreoElectronico: email}
        const resp = sendInfo(path,data);
        if(resp){
            const data2={
                ...active,
                CorreoElectronico: email,
                Puesto: puesto, 
                Departamento: departamento, 
                Sucursal: sucursal,
                FechaDeAlta: actualdate,
                Nombre: active.nombre+" "+active.apellidoPaterno+" "+active.apellidoMaterno,
                Active: false,
                Empresa: company,
                id: uid,
            }
            const path2=`/${company}/Usuarios/DataUsuarios/${uid}`
            const resp=sendInfo(path2,data2);
            if(resp){
                dispatch(startDelete());
                Swal.fire(
                  'Listo',
                  'El usuario fue dado de alta exitosamente!!!',
                  'success',
                )
            }else{
              dispatch(showMessage(['error','Error al enviar la informacion']));
            }
        }else{
            dispatch(showMessage(['error','Error al enviar la informacion']));
        }
    }

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Cambiar Correo Electronico</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingrese el correo electronico para realizar el registro en el sistema EPSILON. Se generara una contraseña temporal y el usuario debe de cambiarla haciendo clic en registro.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Correo Electronico"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={active.CorreoElectronico}
            onChange={handleEmail}
            name="email"


          />
        </DialogContent>
        <DialogActions>
        <Button color="error" onClick={()=>onClose()}>Cancelar</Button>
        <Button color="success" onClick={sendInformation}>Continuar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}