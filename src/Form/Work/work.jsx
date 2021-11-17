import {cv} from '../../resume/resume';
import Button from '../../Button/button.jsx';
import { useContext, useState} from 'react';
import { TemplateState } from '../../Context/CVContext';


const Work = () => {

  const [state, setState] = useContext(TemplateState);

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

        work.push(<textarea className= 'sub-label'id={element} key={element} placeholder={element} onChange={e => setState([...state, e.target.value])}></textarea>)
      }

      else if (element === "finalización"){

        work.push(
        <label className="switch"><input type="checkbox"/>
            <span className="slider round"></span>
            <h4>Trabajo actualmente acá</h4>
        </label>,
        <label className= 'sub-label'id={element} key={element}>{element}<input type={'date'} onInput={e => setState([...state, e.target.value])}/></label>,
        )

      }
      
      else if (element === "inicio"){
        work.push(
        <label className= 'sub-label'id={element} key={element}>{element}<input type={'date'} onInput={e => setState([...state, e.target.value])}/></label>,
        )
      }

      else {
        work.push(<label className= 'sub-label'id={element} key={element}>{element}<input onInput={e => setState([...state, e.target.value])}/></label>); // ver de que se guarden en state varios values. revisar eso//
      }
      
    }
      
    const [workField, setWorkField] = useState ([])

    const addWork = (e) => {

      e.preventDefault();
      setWorkField([...workField, work]);
      console.log(state);
      
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
        <>
        {workField}
        <Button text='Agregar experiencia' onClick={(addWork)}/>
        <Button text='Quitar experiencia' onClick={(removeWork)}/>
        </>
    )

}

export default Work;




