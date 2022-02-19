import {cv} from '../../resume/resume';
import { useState } from 'react';
import Button from '../../Button/button';

const Skills = () => {

    let skills = [];

  // skills.push(
  //   <div className='fields' id={Object.keys(cv)[4]} key={Object.keys(cv)[4]}>
  //     <label>
  //       {Object.keys(cv)[4]}
  //     </label>
  //   </div>
  // )


for (let element in Object.entries(cv)[4][1][0] ) {
  skills.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>);
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
        <Button text='Agregar habilidad' onClick={addSkill}/>
        <Button text='Quitar habilidad' onClick={removeSkill}/>
     </div>
    </>
)

}

export default Skills;