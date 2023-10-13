import React from 'react'
import '../Styles/CardOption.css'
import { Navigate, useNavigate } from 'react-router';

export const CardOption = ({name, navigate, color}) => {
  const Navigate=useNavigate();
  return (
    <>
        <div className="card-button" style={{backgroundColor: color}} onClick={()=>Navigate(navigate)}>
            <a>{name}</a>
        </div>
    </>
  )
}
