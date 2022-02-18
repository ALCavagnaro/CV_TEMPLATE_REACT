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

    for (let element in Object.entries(cv)[6][1][0] ) {
      
      if (element === "tareas") {

        work.push(<textarea className= 'sub-label'id={element} key={element} placeholder={element}></textarea>)
      }

      else if (element === "finalización"){

        work.push(
        <label className= 'sub-label'id={element} key={element}>{element}<input type={'date'}/></label>,
        <h4 id='span-text'>Trabajo actualmente acá</h4>,
        <label className="switch"><input type="checkbox" value = '' onInput={checkBox}/>
            <span className="slider round"></span>
        </label>,
        )

      }
      
      else if (element === "inicio"){
        work.push(
        <label className= 'sub-label'id={element} key={element}>{element}<input type={'date'}/></label>,
        )
      }

      else {
        work.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>);
      
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
        <Button text='Agregar experiencia' onClick={(addWork)}/>
        <Button text='Quitar experiencia' onClick={(removeWork)}/>
        </div>
    )

}

export default Work;




