import React from 'react';
import Button from '../Button/button.jsx';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <>
         <div className='navBar'>
             <div id='nav-container'> 
                <div className='nav-btn-container'>
                    <Link to= '/template'><Button  text='Template'/></Link>
                    <Link to= '/micv'><Button  text='Inicio'/></Link>
                </div>
                    <h1 id='nav-title'>Mi CV</h1>
             </div>
          </div>
        </>
    )
} 