import {cv} from '../resume/resume';
import Button from '../Button/button.jsx';
import awards from './Awards/awards.js';
import Education from './Education/education.jsx';
import Interests from './Interests/interests.jsx';

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


let userData = [];

for (let element of Object.keys(cv.basics)) {
  
  userData.push(
    <div className='fields' id={element}>
      <label className ='basics'id={element} key={element}>{element}
        <input/>
      </label>
    </div>
  )
  
}


// function deleteProps (obj, prop) {
//   for (const p of prop) {
//       (p in obj) && (delete obj[p]);
//   }    
// }

// deleteProps(userData,['3','4','5','6','7','8','9']);


let location = []

for (let element of Object.keys(cv.basics.location)) {

  location.push(
    <div className='fields' id={element} key={element}>
      <label className ='basics'id={element} key={element}>{element}
        <input/>
      </label>
    </div>
  )

}


let references = [];

  references.push(
    <div className='fields' id={Object.keys(cv)[3]}>
      <label>
        {Object.keys(cv)[3]}
      </label>
    </div>
  )


for (let element in Object.entries(cv)[3][1][0] ) {
  references.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>);
}

let skills = [];

  skills.push(
    <div className='fields' id={Object.keys(cv)[4]}>
      <label>
        {Object.keys(cv)[4]}
      </label>
    </div>
  )


for (let element in Object.entries(cv)[4][1][0] ) {
  skills.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>);
}


let work = [];

  work.push(
    <div className='fields' id={Object.keys(cv)[6]}>
      <label>
        {Object.keys(cv)[6]}
      </label>
    </div>
  )


for (let element in Object.entries(cv)[6][1][0] ) {
  work.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>);
}


return (
  <>
    <form className='cvForm'>
       <h3>Datos personales:</h3>
       {userData}
       {location}
       {work} 
       <Button text= 'Agregar experiencia'/>
       <Education/>
       {references}
       {skills}
       <awards/>
       <Interests/>
       <Button text= 'Agregar actividad'/>
    </form>
  </>
)

}


export default Form;
