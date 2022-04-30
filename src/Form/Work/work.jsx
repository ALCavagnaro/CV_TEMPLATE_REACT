import {cv} from '../../resume/resume';
import FormButton from '../../FormButton/FormButton';
import { useState} from 'react';


const Work = () => {


  const checkBox = (e) => {
   
    e.preventDefault();

    const box = document.querySelector('#checkBox-work-input');
   

     console.log(box.checked, box.value, box);

       if (box.checked === true) { return (

         box.setAttribute ('value', 'Trabajo actual')
       )
    }

      else {
        
        return (
        
          box.setAttribute('value', '')
        )
      
      }
   
    }

    let work = [];

      work.push (

          <div className='fields' id={Object.keys(cv)[6]} key={Object.keys(cv)[6]}>
            <label>
              {Object.keys(cv)[6]}
            </label>
          </div>
      )

    for (let element of Object.entries(cv["work"][0])) {
      
      if (element[0] === "tareas") {

        work.push(
        <p className='textarea-title'>Descripción de las tareas</p>,
        <textarea className= 'sub-label'id={element[0]} key={element[0]} placeholder={element[1]}></textarea>);
      }

      else if (element[0] === "finalización"){

        work.push(
        <label className= 'sub-label'id={element[0]} key={element[0]}>{element[0]}
            <input id={element[0] + `-input`} type={'date'}/>
        </label>,
        <h4 id='span-text'>Trabajo actualmente acá</h4>,
        <label className="switch">
            <input id = 'checkBox-work-input' type="checkbox" onInput={checkBox} value = {''} />
            <span className="slider round"></span>
        </label>,
        )

      }
      
      else if (element[0] === "inicio"){
        work.push(
        <label className= 'sub-label'id={element[0]} key={element[0]}>{element[0]}
            <input id={element[0] + `-input`} type={'date'}/>
        </label>,
        )
      }

      else {
        work.push(
        <label className= 'sub-label'id={element[0] + `-label`} key={element[0]}>{element[0]}
            <input id = {element[0] + `-input`} placeholder={element[1]}/>
        </label>);
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
              <FormButton text='Agregar experiencia' onClick={(addWork)}/>
              <FormButton text='Quitar experiencia' onClick={(removeWork)}/>
          </div>
        </div>
    )

}

export default Work;




