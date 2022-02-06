import {cv} from '../../resume/resume';
import { useContext, useState } from 'react';
import { TemplateState } from '../../Context/CVContext';

const Location = () => {

 const [state, setState] = useContext(TemplateState);

const handleSubmit = (e) =>{

 e.preventDefault();

 let location = []

 location.push(e.target[0].value);                     //TODO: pasar de array a un OBJ 
 location.push(e.target[1].value);

setState([...state, location]);              //Se guarada una imagen arriba de todo. Arreglar eso
console.log(state);

}

const eraseContent = (e) => {
  e.preventDefault();
  setState([state.lenght = 0]);  //Está borrando todo el state!!!
}


return (

    <>

    {/* <form className='cvForm' onSubmit={handleSubmit}>

    {Object.keys(cv.basics.location).map (element =>
     
     <div className='fields' id={element} key={element}>
      <label className ='basics'id={element} key={element}>{element}
        <input/>
      </label>
    </div>

    ) }
    
      <input type='submit' value='Guardar en Template'/>
      <input type='reset' value='Eliminar' onClick={eraseContent}/>

    </form> */}

    </>
)

}

export default Location;