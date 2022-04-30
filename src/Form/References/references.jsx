import {cv} from '../../resume/resume';
import { useState } from 'react';
import FormButton from '../../FormButton/FormButton';

const References = () => {

    let references = [];


for (let element of Object.entries(cv['references'][0])) {

  if (element[0] === 'recomendación') {
  references.push(<p className='textarea-title'>Texto breve de recomendación</p>,<textarea className= 'sub-label'id={element[0]} key={element[0]} placeholder={element[1]}></textarea>)
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
        <FormButton text='Agregar referencia' onClick={addReference}/>
        <FormButton text='Quitar referencia'onClick={removeReference}/>
    </div>
    </>
)

}

export default References;