import {cv} from '../../resume/resume';
import { useContext } from 'react';
import { TemplateState } from '../../Context/CVContext';

const UserData = () => {

  const [state, setState] = useContext(TemplateState) 

  const handleInput = (e) => {
     console.log(e.target.value);
     setState([...state,e.target.value]);
  }


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
}

return (
    <>
    <form className='cvForm' onSubmit={handleSubmit}>
      {Object.keys(cv.basics).map (element => { 
        return (
          <label className='basics' id={element} key={element}>{element}
              <input type='text' onChange={handleInput}/>
          </label>
        )
      })}
      <input type='submit' value='Guardar en template'/>
    </form>
    </>
)

}

export default UserData;