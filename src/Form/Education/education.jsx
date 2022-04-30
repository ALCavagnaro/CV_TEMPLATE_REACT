import {cv} from '../../resume/resume';
import { useState } from 'react';
import FormButton from '../../FormButton/FormButton';


const Education = () => {

  const checkBox = (e) => {

    e.preventDefault();
    const box = document.querySelector('#checkBox-education-input');
        if (box.checked === true) { return (

              box.setAttribute ('value', 'Estudio en curso')
            )
           }

        else {
          
          return (
          
            box.setAttribute('value', '')
          )
        
        }
  }

  let education = [];


for (let element of Object.entries(cv["education"][0]) ) {

  if (element[0] === 'desde') {
    
    education.push(
    <label className='sub-label' id={element[0]} key={element[0]}>{element[0]}
        <input id={element[0] + `-input`} type={'date'}/>
    </label>)
  }

  else if (element[0] === 'hasta') {
    education.push(
    <label className ='sub-label' id={element[0]} key={element[0]}>{element[0]}
        <input id={element[0] + `-input`} type={'date'}/>
    </label>,
    <h4 id='span-text'>Estudio sin finalizar</h4>,
        <label className="switch">
            <input id = 'checkBox-education-input' type="checkbox" value = '' onInput = {checkBox}/>
            <span className="slider round"></span>
        </label>,
    )
  }

  else {education.push(
  <label className= 'sub-label'id={element[0]} key={element[0]}>{element[0]}
      <input id={element[0] + `-input`} placeholder={element[1]}/>
  </label>)}
  
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
        <FormButton text='Agregar estudio' onClick = {addStudy}/>
        <FormButton text='Quitar estudio'onClick={removeStudy}/>
    </div>
    </>
)

}

export default Education;