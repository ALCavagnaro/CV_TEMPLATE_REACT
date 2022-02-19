import {cv} from '../../resume/resume';
import { useState } from 'react';
import Button from '../../Button/button';


const Education = () => {

  let education = [];


for (let element of Object.entries(cv["education"][0]) ) {

  if (element[0] === 'fecha de inicio') {
    
    education.push(<label className='sub-label' id={element[0]} key={element[0]}>{element[0]}<input type={'date'}/></label>)
  }

  else if (element[0] === 'fecha de finalización') {
    education.push(<label className ='sub-label' id={element[0]} key={element[0]}>{element[0]}<input type={'date'}/></label>,
    <h4 id='span-text'>Estudio sin finalizar</h4>,
        <label className="switch"><input type="checkbox" value = ''/>
            <span className="slider round"></span>
        </label>,
    )
  }

  else {education.push(<label className= 'sub-label'id={element[0]} key={element[0]}>{element[0]}<input placeholder={element[1]}/></label>)}
  
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