import {cv} from '../resume/resume';
import Awards from './Awards/awards.jsx';
import Education from './Education/education.jsx';
import Interests from './Interests/interests.jsx';
import Location from './Location/location.jsx';
import UserData from './userData/userdata.jsx';
import References from './References/references.jsx';
import Skills from './Skills/skills.jsx';
import Work from './Work/work.jsx';
import Button from '../Button/button.jsx';
import { useState } from 'react';

const Form = () => {

const [confirmation, setConfirmation] = useState(false);

const handleClick = (e) => {

  e.preventDefault();
   
  setConfirmation(true);

}

const resume = require('resume-schema');   //la función valida los campos del formulario. Si se agrega un campo adicional, tira error//

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


return (
  <>
       <UserData/>
       <Location/> 
       <References/>
       <Skills/>
       <Awards/>
       <Interests/>
       <Button text='Confirmar' onClick={handleClick}/>
       {confirmation ? <Button text='Imprimir template'/> : <> </> }
  
  </>
)

}


export default Form;
