import {cv} from '../resume/resume';

import UserData from './userData/userdata.jsx';

const Form = () => {


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
  </>
)

}


export default Form;
