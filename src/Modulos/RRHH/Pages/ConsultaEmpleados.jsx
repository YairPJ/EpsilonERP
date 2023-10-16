import React, { useEffect, useState } from 'react';
import '../Styles/ConsultaEmpleados.css';
import { DataGrid } from '@mui/x-data-grid';
import { RRHHLayout } from '../Layout/RRHHLayout';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { startConsultEmpleados } from '../../../store/erpApp/Thunks';
import { LinearProgress } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'No. Empleado', width: 160},
  { field: 'name', headerName: 'Nombre(s)', width: 200 },
  { field: 'lastName', headerName: 'Apellido Paterno', width: 200 },
  { field: 'lastLastName', headerName: 'Apellido Materno', width: 200 },
  { field: 'phoneNumber', headerName: 'Telefono', type: 'number', width: 150 },
  { field: 'email', headerName: 'Correo Electronico', type: 'email', width: 200 },
  { field: 'dpto', headerName: 'Departamento', width: 200 },
  { field: 'puesto', headerName: 'Puesto', width: 200 },
  { field: 'fechaDeAlta', headerName: 'Fecha De Alta', width: 200 },
];

export const ConsultaEmpleados = () => {
  const dispatch = useDispatch();
  const { empleados } = useSelector((state) => state.solicitud);
  const [dataEmpleados, setdataEmpleados] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    dispatch(startConsultEmpleados()).then(() => {
      setdataEmpleados(empleados);
      setisLoading(false);
    });
  }, [dataEmpleados]); // Agrega [dispatch, empleados] como dependencias del efecto

  const rows = dataEmpleados.map((empleado) => ({
    id: empleado.id,
    name: empleado.nombre,
    lastName: empleado.apellidoPaterno,
    lastLastName: empleado.apellidoMaterno,
    phoneNumber: empleado.Telefono,
    email: empleado.CorreoElectronico,
    dpto: empleado.Departamento,
    puesto: empleado.Puesto,
    fechaDeAlta: empleado.FechaDeAlta,
  }));

  return (
    <RRHHLayout>
      {isLoading ? (
        <Box sx={{ marginTop: '40px' }}>
          <LinearProgress />
        </Box>
      ) : (
        <div style={{ height: 400, width: '100%', marginTop: '50px' }}>
          {dataEmpleados.length > 0 ? (
            <DataGrid
              rows={rows}
              columns={columns}
            />
          ) : (
            <p>No hay datos disponibles.</p>
          )}
        </div>
      )}
    </RRHHLayout>
  );
};
