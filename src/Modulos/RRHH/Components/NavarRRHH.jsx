import React from 'react';
import '../Styles/HomeRRHH.css';
import { Options } from '../Components/Options';

export const NavarRRHH = () => {
    return (
        <>
        <div style={{ position: 'fixed', top: '60px', left: 0, width: '100%', backgroundColor: 'lightgray', zIndex: 100 }}>
          <div className="menuOptions">
            <div className="optionsContainer">
              <Options 
                title={"Nominas"}
                links={[
                  { title: "Consulta", link: "/home/rrhh/nominas" },
                ]}
              />
              <Options
                title={"Vacantes"}
                links={[
                  { title: "Activas", link: "/home/rrhh/vacantes"},
                  { title: "Nueva Vacante", link: "/home/rrhh/nuevaVacante"},
                ]}
              />
              <Options
                title={"Empleados"}
                links={[
                  { title: "Solicitudes", link: "/home/rrhh/solicitudDeEmpleo" },
                  { title: "Alta", link: "/home/rrhh/altaempleado" },
                  { title: "Consulta", link: "/home/rrhh/consultaempleados" },
                ]}
              />
              <Options
                title={"Asistencias"}
                links={[
                  { title: "Consultar asistencias", link: "/home/rrhh/asistencias" },
                ]}
              />
            </div>
          </div>
        </div>
        </>
      );
}
