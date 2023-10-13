import React from 'react';
import { Box } from '@mui/system'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Alert } from '@mui/material';
import Button from '@mui/material/Button';
import { asistenciaReport } from '../../../PrintReports/AsistenciaReport';

export const ConsultaAsistenciasView = ({ data, date }) => {

  const generarReporte = () => {
    asistenciaReport(data, date);
  }

  return (
    <Box sx={{ marginTop: '40px' }}>
      {data.length > 0 ? (
        <>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{backgroundColor: '#E6E6E6'}}>
                <TableCell>Nombre</TableCell>
                <TableCell>Entrada</TableCell>
                <TableCell>Salida a Comer</TableCell>
                <TableCell>Entrada a Comer</TableCell>
                <TableCell>Salida</TableCell>
                <TableCell>Tiempo de Trabajo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((element, index) => (
                <TableRow key={index}>
                  <TableCell>{element.uid}</TableCell>
                  <TableCell>{element.Entrada}</TableCell>
                  <TableCell>{element.SalidaComer}</TableCell>
                  <TableCell>{element.RegresoComer}</TableCell>
                  <TableCell>{element.Salida}</TableCell>
                  <TableCell>{element.TotalLaborado}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
        <Button onClick={generarReporte}>DESCARGAR REPORTE DE ASISTENCIAS AL {date}</Button>
        </Box>
        </>
      ) : (
        <Box sx={{ width: '100%', p: 2 }}>
           <Alert severity="info" sx={{ width: '100%' }}>
            No se encontró información
            </Alert>
        </Box>
      )}
    </Box>
  );
};
