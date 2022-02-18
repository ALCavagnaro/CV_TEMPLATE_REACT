import {cv} from '../../resume/resume';
import { useState } from 'react';
import Button from '../../Button/button';

const Interests = () => {

  let interests = [];

  interests.push(
    <div className='fields' id={Object.keys(cv)[7]} key={Object.keys(cv)[7]}>
      <label>
        {Object.keys(cv)[7]}
      </label>
    </div>
  )


for (let element in Object.entries(cv)[7][1][0]) {
  interests.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>);
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

    {interests}
    <Button text='Agregar interés' onClick={addInterest}/>
    <Button text='Quitar interés' onClick={removeInterest}/>
    </>
)

}

export default Interests;