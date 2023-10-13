import { InputBase, LinearProgress, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react'
import { useForm } from '../../../Hooks'
import { RRHHLayout } from '../Layout/RRHHLayout'
import SearchIcon from '@mui/icons-material/Search';
import { loadInfoCollections } from '../../../helpers/loadInfoCollections';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../../store/WorkTime/WorkTime';
import { showMessage } from '../../../store/HomeReducer/Home';
import { ConsultaAsistenciasView } from '../Views/ConsultaAsistenciasView';

export const Asistencias = () => {
    const {dataUser} = useSelector(state=>state.auth);
    const dispatch = useDispatch();
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const formData={
        dateToConsult: '',
    };


    const {onInputChange, dateToConsult} = useForm(formData);
    
    const serchInformation = async () => {
        setIsLoading(true);
        const [año, mes, dia] = dateToConsult.split("-");
        const day = parseInt(dia, 10).toString();
        const month = parseInt(mes, 10).toString();
        const newDate = `${day}${month}${año}`;
        const company = dataUser.Empresa;
        try {
          const dataInfo = await loadInfoCollections(company, "TiempoDeTrabajo", newDate);
          setdata(dataInfo);
          setIsLoading(false);
        } catch (error) {
          dispatch(showMessage(['error','No se encontraron registros con la fecha ingresada!!!']))
        }
      };
    
  return (
    <RRHHLayout>
        <Box sx={{marginTop: '50px'}}>
            <Box>
                <Typography>Fecha a consultar: </Typography>
                <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 200 }}>
                <InputBase onChange={onInputChange} name="dateToConsult" value={dateToConsult} id="outlined-basic" variant="standard" type="date" InputLabelProps={{shrink: true}} />
                <IconButton onClick={serchInformation}>
                    <SearchIcon />
                </IconButton>
                </Paper>
            </Box>
            {
            (!isLoading)?
                <ConsultaAsistenciasView data={data} date={dateToConsult}/>
                : <LinearProgress/>
            }
        </Box>
    </RRHHLayout>
  )
}
