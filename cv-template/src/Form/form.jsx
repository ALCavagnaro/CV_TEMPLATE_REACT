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


//let workField = [<Work/>]

const [workField, setWorkField] = useState([<Work/>])

const handleClick = (e) => {

  e.preventDefault();

  setWorkField([...workField, <Work/>]);
  console.log(<Work/>, 'holaaaa');

}

return (
  <>
    <form className='cvForm'>
       <h3>Datos personales:</h3>
       <UserData/>
       <Location/>
       {workField}
       <button onClick= {(handleClick)}>Agregar experiencia</button> 
       <Education/>
       
       <References/>
       
       <Skills/>
       
       <Awards/>
       <Interests/>
       
    </form>
  </>
)

}


export default Form;
