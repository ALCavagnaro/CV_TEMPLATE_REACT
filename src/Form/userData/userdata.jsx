import {cv} from '../../resume/resume';
import { useContext } from 'react';
import { TemplateState } from '../../Context/CVContext';

const UserData = () => {

  const [state, setState] = useContext(TemplateState) 

  // const handleInput = (e) => {
  //    console.log(e.target.value);
     
  // }


const handleSubmit = (e) => {
    e.preventDefault();
    
    let userData = []

    userData.push(e.target[0].value);
    userData.push(e.target[1].value);
    userData.push(e.target[2].value);
    userData.push(e.target[3].value);
    userData.push(e.target[4].value);
    userData.push(e.target[5].value);
    userData.push(e.target[6].value);
    userData.push(e.target[7].value);
    userData.push(e.target[8].value);

    setState([...state, userData]);
    console.log(state);
}

return (
    <>
    <form className='cvForm' onSubmit={handleSubmit}>
      {Object.keys(cv.basics).map (element => { 

        if (element !='foto') {
        return (
          <label className='basics' id={element} key={element}>{element}
              <input type='text' id={element}/>
          </label>
        ) }

        else {
          return (
            <label className='basics' id={element} key={element}>{element}
                <input type='file' id={element}/>
            </label>
          )
        }
      })}
      <input type='submit' value='Guardar en template'/>
    </form>
    </>
)

}

export default UserData;