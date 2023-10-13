import React, { useMemo, useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { useForm } from '../../Hooks';
import { Alert, TextField,Grid, Typography, Paper } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import { startCreateUserWhitEmailAndPassword, startCheckUserCompany } from '../../store/auth/thunks';
import { Box } from '@mui/system';


export const Register = () => {

  const dispatch=useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);
  const [RegisterContinue, setRegisterContinue] = useState(false);
  const {status, errorMesagge, displayName, companyName} = useSelector(state => state.auth);
  const isChecking = useMemo(()=> status==='checking',[status]);
  
  useEffect(() => {
    if(status==="revised-information"){
      setRegisterContinue(true);
  }
  }, [status])
  

  const formData={
    email: '',
    password: '',
    idcompany: '',
    iduser: '',
    confirmPassword: '',
  }

  const formValidations={
    password: [(value)=>value.length >=6, 'La contraseña debe de tener minimo 6 caracteres' ],
    confirmPassword: [(value)=>value==formState.password, 'Las contraseñas no coinciden'],
  } //Esto es para hacer validaciones en cada input

  const {email, password, idcompany, iduser, confirmPassword, formState, emailValid, passwordValid, confirmPasswordValid, onInputChange, isFormValid} = useForm(formData, formValidations);

  const checkInformationUser=()=>{
    dispatch(startCheckUserCompany(idcompany,iduser));
  }

  const onsubmit=(event)=>{
    event.preventDefault();
    setformSubmitted(true);
    if(!isFormValid) return;
    dispatch(startCreateUserWhitEmailAndPassword(password,email,displayName,iduser));

  }

  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <Box component="form" sx={{width: '300px', height: '550px'}}>
        <Grid
          display={!!errorMesagge?'':'none'}
        >
          <Alert severity='error'>
            {errorMesagge}
          </Alert>
        </Grid>
            <Typography sx={{fontSize: '30px'}}>REGISTRO</Typography>
            <hr/>
            <TextField sx={{backgroundColor: 'white'}} variant="outlined" label="ID De Empleado" onChange={onInputChange} name="iduser" value={iduser} fullWidth disabled={RegisterContinue}/>
            <Typography sx={{backgroundColor: 'gray', backgroundColor: 'none'}}>{companyName}</Typography>
            <TextField sx={{backgroundColor: 'white', marginTop: '10px'}} variant="outlined" label="ID De Compañia" onChange={onInputChange} name="idcompany" value={idcompany} fullWidth disabled={RegisterContinue}/>
            <Typography sx={{backgroundColor: 'gray', backgroundColor: 'none'}}>{displayName}</Typography>
            <Button onClick={checkInformationUser} disabled={RegisterContinue}>Continuar</Button>
            {(RegisterContinue)?(
             <> 
            <TextField sx={{backgroundColor: 'white', marginTop: '10px'}} variant="outlined" label="Correo Electronico"onChange={onInputChange} name="email" value={email}  fullWidth error={!!emailValid && formSubmitted}helperText={emailValid}/>
            <TextField sx={{backgroundColor: 'white', marginTop: '10px'}} variant="outlined" label="Contraseña" type="password" onChange={onInputChange} name="password" value={password} fullWidth error={!!passwordValid && formSubmitted}helperText={passwordValid}/>
            <TextField sx={{backgroundColor: 'white', marginTop: '10px'}} variant="outlined" label="Confirmar contraseña" type="password" onChange={onInputChange} name="confirmPassword" value={confirmPassword} fullWidth error={!!confirmPasswordValid && formSubmitted}helperText={confirmPasswordValid}/>
            <Button onClick={onsubmit} sx={{marginTop: '15px'}} variant="contained" color="success">Registrarme</Button>
            </>
            ):(null)
            }
        </Box>
        <br/>
      </div>
    </>
  )
}
