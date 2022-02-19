import React from 'react';
import Button from '../Button/button.jsx';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <>
         <div className='navBar'>
             <div id='nav-container'>
                <div className='nav-btn-container'>
                    <Link to= '/template'><Button text='Template'/></Link>
                    <Link to= '/form'><Button text='Formulario'/></Link>
                </div>
                    <h1 id='nav-title'>Completá los campos de tu CV</h1>
             </div>
          </div>
        </>
    )
} 