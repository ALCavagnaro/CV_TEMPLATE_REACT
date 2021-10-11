import {cv} from '../resume/resume';

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

return (
  <>
  </>
)

}


export default Form;
