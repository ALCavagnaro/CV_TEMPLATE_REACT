import {cv} from '../../resume/resume';
import Button from '../../Button/button.jsx';
import { useState} from 'react';


const Work = () => {
    let work = [];

      work.push(
        <div className='fields' id={Object.keys(cv)[6]}>
          <label>
            {Object.keys(cv)[6]}
          </label>
        </div>
      )

    work.push();

    for (let element in Object.entries(cv)[6][1][0] ) {
      console.log(element)
      if (element === "tareas") {
        work.push(<textarea className= 'sub-label'id={element} key={element}>{element}</textarea>)
      }
      else {
        work.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>);
      }
      
    }

    // function deleteProps (obj, prop) {
    //     for (const p of prop) {
    //         (p in obj) && (delete obj[p]); 
    //     }    
    //   }
      
    //   deleteProps(work,['1']);


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
        <>
        {workField}
        <Button text='Agregar experiencia' onClick={(addWork)}/>
        <Button text='Quitar experiencia' onClick={(removeWork)}/>
        </>
    )

}

export default Work;