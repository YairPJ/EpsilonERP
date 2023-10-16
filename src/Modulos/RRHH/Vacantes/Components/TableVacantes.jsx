import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/base';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux';
import { startActiveVacante } from '../../../../store/RRHH/Thunks';


export const TableVacantes = ({data}) => {
  const dispatch = useDispatch();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#E6E6E6' }}>
            <TableCell sx={{ fontWeight: 'bold' }}>Nombre de Vacante</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Departamento</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Tipo</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Solicitado por</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Ubicacion</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
              <TableCell>{item.titulo}</TableCell>
              <TableCell>{item.departamento}</TableCell>
              <TableCell>{item.tipoVacante}</TableCell>
              <TableCell>{item.solicitadoPor}</TableCell>
              <TableCell>{item.ubicacion}</TableCell>
              <TableCell><IconButton color="error"><DeleteIcon/></IconButton></TableCell>
              <TableCell><IconButton color="primary" onClick={()=>dispatch(startActiveVacante(item))}><VisibilityIcon/></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
