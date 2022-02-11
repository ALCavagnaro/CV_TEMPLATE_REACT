import {cv} from '../../resume/resume';
import { useContext, useState } from 'react';
import { TemplateState } from '../../Context/CVContext';

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
            console.log('LISTA DE RETORNO', returnList); 
  }

    
}

const eraseContent = (e) => {
  e.preventDefault();
  setState([state.length = 0]);
}

const loadImg = (e) => {
  console.log(e.target.files[0]);
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
    console.log(base64String)
}

return (
    
    <form id = 'userForm' className='cvForm' onSubmit={handleSubmit}>
      {Object.keys(cv.basics).map (element => { 

        if (element !=='foto') {
        return (
          <label className='basics' id={element} key={element}>{element}
              <input type='text' id={element}/>
          </label>
        ) }

        else {
          return (
            <><label className='basics' id={element} key={element}>{element}
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
          
          <div className='fields' id={element} key={element}>
            <label className ='basics'id={element} key={element}>{element}
              <input input type='text' id={element}/>
            </label>
          </div>

          ) }

      <input id = 'guardar' type='submit' value='Guardar en template'/>
      <input id = 'eliminar' type='reset' value='Eliminar' onClick={eraseContent}/>

    </form>
    
)

}

export default UserData;