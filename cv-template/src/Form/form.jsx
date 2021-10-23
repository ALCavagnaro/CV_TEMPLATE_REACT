import {cv} from '../resume/resume';
import Awards from './Awards/awards.jsx';
import Education from './Education/education.jsx';
import Interests from './Interests/interests.jsx';
import Location from './Location/location.jsx';
import UserData from './userData/userdata.jsx';
import References from './References/references.jsx';
import Skills from './Skills/skills.jsx';
import Work from './Work/work.jsx';
import { useState } from 'react';
import Button from '../Button/button.jsx'

const Form = () => {

const resume = require('resume-schema');

resume.validate (
    cv,
  function (err, report) {
    if (err) {
      console.error("The resume was invalid:", err);
      return;
    }
    console.log("Resume validated successfully:", report);
  },
  function (err) {
    console.error("The resume was invalid:", err);
  }
);


const [workField, setWorkField] = useState([<Work/>])

const handleClick = (e) => {

  e.preventDefault();

  setWorkField([...workField, <Work/>]);
  console.log(<Work/>, 'experiencia');

}

return (
  <>
    <form className='cvForm'>
       <h3>Datos personales:</h3>
       <UserData/>
       <Location/>
       {workField}
       <Button text='Agregar experiencia' onClick={(handleClick)}/>
       <Button text='Quitar experiencia' onClick={(handleClick)}/>
       <Education/>
       <Button text='Agregar educación'/>
       <References/>
       <Button text='Agregar referencia'/>
       <Skills/>
       <Button text='Agregar habilidad'/>
       <Awards/>
       <Interests/>
       <Button text='Agregar interés'/>
    </form>
  </>
)

}


export default Form;
