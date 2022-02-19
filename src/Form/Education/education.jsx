import {cv} from '../../resume/resume';
import { useState } from 'react';
import Button from '../../Button/button';


const Education = () => {

  let education = [];

  // education.push(
  //   <div className='fields' id={Object.keys(cv)[2]} key={Object.keys(cv)[2]}>
  //     <label>
  //       {Object.keys(cv)[2]}
  //     </label>
  //   </div>
  // )


for (let element in Object.entries(cv)[2][1][0] ) {

  education.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>)
  
}

const [educationField, setEducationField] = useState ([]);

const addStudy = (e) => {

  e.preventDefault();
  setEducationField([...educationField, education]);
}

const removeStudy = (e, index) => {

  e.preventDefault();

  if (Object.keys(educationField).length >=1) {
    const educationList = [...educationField];
    educationList.splice(index, 1);
    setEducationField(educationList);
}

}


return (

    <>
    {educationField}
    <div className='button-container'>
        <Button text='Agregar estudio' onClick = {addStudy}/>
        <Button text='Quitar estudio'onClick={removeStudy}/>
    </div>
    </>
)

}

export default Education;