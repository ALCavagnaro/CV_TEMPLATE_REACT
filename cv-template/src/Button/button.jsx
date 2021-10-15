import React from "react";

const Button = (props) => {

    const handleClick = (e) => {

        e.preventDefault();

        console.log('hola')
    }

 return (   

 <button onClick = {(handleClick)}>{props.text}</button>

 )

}

export default Button    