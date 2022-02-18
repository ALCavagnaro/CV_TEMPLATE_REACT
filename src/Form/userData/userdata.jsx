import {cv} from '../../resume/resume';
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

const eraseContent = (e) => {
  e.preventDefault();
  setState([state.length = 0]);
}

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

      {Object.keys(cv.basics).map (element => { 

        if (element !=='foto') {
        return (
          <label className='sub-label' id={element} key={element}>{element}
              <input type='text' id={element}/>
          </label>
        ) }

        else {
          return (
            <><label className='sub-label' id={element} key={element}>{element}
              <input type='file' id={element} onChange={(loadImg)} />
            </label><div>
                {selectedImage && (
                  <div>
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

      {Object.keys(cv.basics.location).map (element => 
          
          <div className='sub-label' id={element} key={element}>
            <label className ='sub-label'id={element} key={element}>{element}
              <input input type='text' id={element}/>
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
          <Skills/>
      </div>
    
      <input id = 'guardar' type='submit' value='Guardar en template'/>
      <input id = 'eliminar' type='reset' value='Eliminar' onClick={eraseContent}/>

    </form>
    
)

}

export default UserData;


