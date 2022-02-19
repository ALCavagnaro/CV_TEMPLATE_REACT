import {cv} from '../../resume/resume';
import Button from '../../Button/button.jsx';
import { useState} from 'react';


const Work = () => {

  const checkBox = (e) => {
    e.target.value = 'Trabajo actualmente acá';
  }

    let work = [];

      work.push(
          <div className='fields' id={Object.keys(cv)[6]} key={Object.keys(cv)[6]}>
            <label>
              {Object.keys(cv)[6]}
            </label>
          </div>
      )
    for (let element of Object.entries(cv["work"][0])) {
      
      if (element[0] === "tareas") {

        work.push(<textarea className= 'sub-label'id={element[0]} key={element[0]} placeholder={element[1]}></textarea>)
      }

      else if (element[0] === "finalización"){

        work.push(
        <label className= 'sub-label'id={element[0]} key={element[0]}>{element[0]}<input type={'date'}/></label>,
        <h4 id='span-text'>Trabajo actualmente acá</h4>,
        <label className="switch"><input type="checkbox" value = '' onInput={checkBox}/>
            <span className="slider round"></span>
        </label>,
        )

      }
      
      else if (element[0] === "inicio"){
        work.push(
        <label className= 'sub-label'id={element[0]} key={element[0]}>{element[0]}<input type={'date'}/></label>,
        )
      }

      else {
        work.push(<label className= 'sub-label'id={element[0]} key={element[0]}>{element[0]}<input placeholder={element[1]}/></label>);
      
    }
  
  }  
      
    const [workField, setWorkField] = useState ([])

    const addWork = (e) => {

      e.preventDefault();
      setWorkField([...workField, work]);
      
    }

    const removeWork = (e, index) => {

      e.preventDefault();

      if (Object.keys(workField).length >=1) {
          const workList = [...workField];
          workList.splice(index, 1);
          setWorkField(workList);
      }
      
    }


    return (
        <div>
        {workField}
          <div className='button-container'>
              <Button text='Agregar experiencia' onClick={(addWork)}/>
              <Button text='Quitar experiencia' onClick={(removeWork)}/>
          </div>
        </div>
    )

}

export default Work;




