import {cv} from '../../resume/resume';
import { useState } from 'react';
import Button from '../../Button/button';

const References = () => {

    let references = [];


for (let element of Object.entries(cv['references'][0])) {

  if (element[0] === 'recomendación') {
  references.push(<textarea className= 'sub-label'id={element[0]} key={element[0]} placeholder={element[1]}></textarea>)
  }

  else {
    references.push(<label className= 'sub-label'id={element[0]} key={element[0]}>{element[0]}<input id={'responsable'} placeholder={element[1]}/></label>);
  }
}

const [referenceField, setReferenceField] = useState ([]);

const addReference = (e) => {
  e.preventDefault();
  setReferenceField([...referenceField, references]);
}

const removeReference = (e, index) => {
  e.preventDefault();
  const referenceList = [...referenceField]
  referenceList.splice(index,1);
  setReferenceField(referenceList);
}

return (

    <>
    {referenceField}
    <div className='button-container'>
        <Button text='Agregar referencia' onClick={addReference}/>
        <Button text='Quitar referencia'onClick={removeReference}/>
    </div>
    </>
)

}

export default References;