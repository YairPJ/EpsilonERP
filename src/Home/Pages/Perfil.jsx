import React from 'react'
import  '../Styles/MiPerfil.css'
import { Navbar } from '../../UI/Components/Navar'
import { useSelector } from 'react-redux'

export const Perfil = () => {

    const {photoUrl, name, email} = useSelector(state=>state.auth);

  return (
    <>
    <Navbar data={"Mi Perfil"}/>
    <div className="body">
        <div className="general_information">
            <img src={photoUrl} className="perfilImage"/>

        <div className="datosPersonales">
            <p>Nombre: {name}</p>
            <p>Correo Electronico: {email}</p>
            <p>País: México</p>
        </div>
        </div>
    </div>
    </>
  )
}
