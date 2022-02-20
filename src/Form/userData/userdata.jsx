import {cv} from '../../resume/resume';                                        //hacer validación de formulario
import { useContext, useState } from 'react';
import { TemplateState } from '../../Context/CVContext';
import Work from '../Work/work';
import Education from '../Education/education';
import References from '../References/references';
import Skills from '../Skills/skills';
import Interests from '../Interests/interests';

const UserData = () => {

  const [state, setState] = useContext(TemplateState);
  const [selectedImage, setSelectedImage] = useState(null);

const handleSubmit = (e) => {
    e.preventDefault();
    
    //let userData = []

    let blob = new Blob([selectedImage], { type: "image" });
// The full Blob Object can be seen 
// in the Console of the Browser
//    console.log('Blob - ', blob);
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
    let base64String = reader.result;
    //setState({id:'img', value:base64String});   
  

            const form = document.querySelector('#userForm')  // CAMBIAR ESTE CÓDIGO //

            let list;

            let returnList = [];

            for (let item of form) {
            
              list = new Object();

              if (item.id == 'eliminar' || item.id == 'guardar') 
              {
              list.id = item.id;
              list.value = ''}

              else if (item.id == 'foto') 
              {
                list.id = item.id
                list.img = base64String
                returnList.push(list)
              }
              
              else {
              list.id = item.id;
              list.value = item.value;
              returnList.push(list)
              }
              
            }
            setState(state.lenght = 0);
            setState([returnList]); 
  }

    
}

// const eraseContent = (e) => {
//   e.preventDefault();
//   setState([state.length = 0]);
//   setState([...state, <h2 id='pdf-template'>Template vacío</h2>])
//   console.log(state);
// }

const loadImg = (e) => {
//  console.log(e.target.files[0]);
  setSelectedImage(e.target.files[0]);
}

    let blob = new Blob([selectedImage], { type: "image" });
// The full Blob Object can be seen 
// in the Console of the Browser
//    console.log('Blob - ', blob);
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
    let base64String = reader.result;
//    console.log(base64String)
}

return (   

    <form id = 'userForm' className='cvForm' onSubmit={handleSubmit}>

    <div className='category-container'>

      <h3 className='title'>1. Información personal</h3>


      {Object.entries(cv.basics).map (element => {

        if (element[0] !=='foto' && element[0] !== 'descripción' && element[0] !== 'email') {
        return (
          <label className='sub-label' id={element[0]} key={element[0]}>{element[0]}   
              <input type='text' id={element[0]} placeholder={element[1]}/> 
          </label>
        ) }

        else if (element[0] ==='descripción') { 
          return(
            <textarea className= 'sub-label'id={element[0]} key={element[0]} placeholder={element[1]}></textarea>
          )
        }

        else if (element[0] ==='email') { 
          return(
            <label className='sub-label' id={element[0]} key={element[0]} for='email'>{element[0]}   
              <input type='email' id={element[0]} placeholder={element[1]}/> 
          </label>
          )
        }

        else {
          return (
            <><label className='sub-label' id={element[0]} key={element[0]}>{element[0]}
              <input type='file' id={element[0]} onChange={(loadImg)} />
            </label><div>
                {selectedImage && (
                  <div id='img-container'>
                    <img alt="not found" width={"185px"} height={'180px'} src={URL.createObjectURL(selectedImage)} />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>Quitar</button>
                  </div>
                )}
                <br />
              </div></>
          )
        }
        
      })}

      {Object.entries(cv.basics.location).map (element => 
          
          <div className='sub-label' id={element[0]} key={element[0]}>
            <label className ='sub-label'id={element[0]} key={element[0]}>{element[0]}
              <input input type='text' id={element[0]} placeholder={element[1]}/>
            </label>
          </div>

          ) }
      
     </div>
          
      <div className='category-container'>
          <h3 className='title'>2. Experiencia laboral</h3>
          <Work/>
          <h3 className='title'>3. Educación</h3>
          <Education/>
          <h3 className='title'>4. Recomendaciones</h3>
          <References/>
          <h3 className='title'>4. Habilidades</h3>
          <Skills/>
          <h3 className='title'>5. Intereses</h3>
          <Interests/>
      </div>
      <div className='form-btn-container'> 
          <input id = 'guardar' type='submit' value='Guardar en template'/>
          {/* <input id = 'eliminar' type='reset' value='Eliminar' onClick={eraseContent}/> */}
      </div>
    </form>
    
)

}

export default UserData;


function newFunction() {
  debugger;
}

