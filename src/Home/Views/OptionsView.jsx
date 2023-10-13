import React from 'react'
import '../Styles/Home.css'
import { useSelector } from 'react-redux'
import {CardOption} from '../Components/Card'

export const OptionsView = () => {
    const {derechos} = useSelector(state=>state.auth);
  return (
    <>
    <div className="cards">
      {derechos.RecursosHumanos?(<CardOption name={"RECURSOS HUMANOS"} navigate={"rrhh"} color={"green"}/>):(null)}
      {derechos.Gestion?(<CardOption name={"GESTION"} navigate={"gestion"} color={"blue"}/>):(null)}
      <CardOption name={"TIEMPO DE TRABAJO"} navigate={"checkInOut"} color={"#B40096"} />
      </div>

    </>
  )
}
