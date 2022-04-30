const FormButton = (props) =>{

    return(
        <button className = 'form-btn' onClick = {props.onClick}>{props.text}</button>
    )

}

export default FormButton;