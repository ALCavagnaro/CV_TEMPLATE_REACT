import {cv} from '../../resume/resume';
import { useState } from 'react';
import FormButton from '../../FormButton/FormButton';

const Interests = () => {

  let interests = [];


for (let element of Object.entries(cv["interests"][0])) {
  interests.push(<label className= 'sub-label'id={element[0]} key={element[0]}>{element[0]}<input id={element[0]} placeholder={element[1]}/></label>);
}

const [interestField, setInterestField] = useState([]);

const addInterest = (e) => {
  e.preventDefault();
  setInterestField([...interestField, interests]);
} 

const removeInterest = (e, index) => {
  e.preventDefault();
  const interestList = [...interestField];
  interestList.splice(index,1);
  setInterestField(interestList);
}

return (

    <>

    {interestField}
    <div className='button-container'>
        <FormButton text='Agregar interés' onClick={addInterest}/>
        <FormButton text='Quitar interés' onClick={removeInterest}/>
    </div>
    </>
)

}

export default Interests;