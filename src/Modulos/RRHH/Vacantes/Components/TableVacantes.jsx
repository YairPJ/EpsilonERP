import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const TableVacantes = () => {
    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{backgroundColor: '#ABFFA7'}}>
                <TableCell>ID De Vacante</TableCell>
                <TableCell>Nombre de Vacante</TableCell>
                <TableCell>Departamento</TableCell>
                <TableCell>Puesto</TableCell>
                <TableCell>Solicitado por</TableCell>
                <TableCell>No. Personas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell >FIE3992</TableCell>
                  <TableCell >Vecario Ingenieria Mecatronica medio tiempo</TableCell>
                  <TableCell >Automatizacion</TableCell>
                  <TableCell >Becario</TableCell>
                  <TableCell >J. Manuel Padilla Toledo</TableCell>
                  <TableCell >2</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      );
}
