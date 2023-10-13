import React from 'react'
import '../Styles/HomePromotores.css'
import {Navbar} from '../../../UI/Components/Navar'

export const HomePromotores = () => {
  return (
    <>
        <Navbar data={"PROMOTORES"}/>

        <div className="body">
            <div className="container" style={{backgroundColor: 'cadetblue'}}>
                <a>TIEMPO DE TRABAJO</a>
            </div>
            <div className="container" style={{backgroundColor: 'indianred'}}>
                <a>REGISTRO DE VENTA</a>
            </div>
            <div className="container" style={{backgroundColor: 'lightblue'}}>
                <a>PORTABILIDAD</a>
            </div>
        </div>
    </>
  )
}
