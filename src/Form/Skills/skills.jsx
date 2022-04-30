import {cv} from '../../resume/resume';
import { useState } from 'react';
import FormButton from '../../FormButton/FormButton';

const Skills = () => {

    let skills = [];



for (let element of Object.entries(cv["skills"][0]) ) {
  
  skills.push(<label className= 'sub-label'id={element[0]} key={element[0]}>{element[0]}<input id={element[0]} placeholder={element[1]}/></label>);
}

const [skillsField, setSkillsField] = useState([]);

const addSkill = (e) => {

  e.preventDefault();
  setSkillsField([...skillsField, skills])

}

const removeSkill = (e, index) => {
  e.preventDefault();
  const skillsList = [...skillsField];
  skillsList.splice(index, 1);
  setSkillsField(skillsList);
}

return (
    <>
     {skillsField}
     <div className='button-container'>
        <FormButton text='Agregar habilidad' onClick={addSkill}/>
        <FormButton text='Quitar habilidad' onClick={removeSkill}/>
     </div>
    </>
)

}

export default Skills;