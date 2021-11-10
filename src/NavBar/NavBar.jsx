import React from 'react';
import Button from '../Button/button.jsx';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <>
           <Link to= '/template'><Button text='Template'/></Link>
           <Link to= '/form'><Button text='Formulario'/></Link>
          <h2 className='navBar'>Completá los campos de tu CV</h2>
        </>
    )
} 