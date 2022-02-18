import {cv} from '../../resume/resume';
import { useState } from 'react';
import Button from '../../Button/button';

const References = () => {

    let references = [];

  references.push(
    <div className='fields' id={Object.keys(cv)[3]} key={Object.keys(cv)[3]}>
      <label>
        {Object.keys(cv)[3]}
      </label>
    </div>
  )


for (let element in Object.entries(cv)[3][1][0] ) {
  references.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>);
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
    <Button text='Agregar referencia' onClick={addReference}/>
    <Button text='Quitar referencia'onClick={removeReference}/>
    </>
)

}

export default References;