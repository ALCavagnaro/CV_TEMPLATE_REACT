import {cv} from '../../resume/resume';
import { useContext, useState } from 'react';
import { TemplateState } from '../../Context/CVContext';

const UserData = () => {

  const [state, setState] = useContext(TemplateState);
  const [selectedImage, setSelectedImage] = useState(null);

const handleSubmit = (e) => {
    e.preventDefault();
    
    let userData = []

    userData.push(e.target[0].value);
    userData.push(e.target[1].value);
    userData.push(e.target[3].value);
    userData.push(e.target[4].value);
    userData.push(e.target[5].value);
    userData.push(e.target[6].value);
    userData.push(e.target[7].value);
    userData.push(e.target[8].value);

    let blob = new Blob([selectedImage], { type: "image" });
// The full Blob Object can be seen 
// in the Console of the Browser
    console.log('Blob - ', blob);
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
    let base64String = reader.result;
    console.log('Base64 String - ', base64String);
    userData.push(base64String);
  }

    setState([...state, userData]);
    console.log(state);
}

const eraseContent = (e) => {
  e.preventDefault();
  setState([state.lenght = 0]);
}

const loadImg = (e) => {
  console.log(e.target.files[0]);
  setSelectedImage(e.target.files[0]);
}

//     let blob = new Blob([selectedImage], { type: "image" });
// // The full Blob Object can be seen 
// // in the Console of the Browser
//     console.log('Blob - ', blob);
//     let reader = new FileReader();
//     reader.readAsDataURL(blob);
//     reader.onloadend = function () {
//     let base64String = reader.result;
//     console.log('Base64 String - ', base64String);
  
//}

return (
    
    <form className='cvForm' onSubmit={handleSubmit}>
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

      <input type='submit' value='Guardar en template'/>
      <input type='reset' value='Eliminar' onClick={eraseContent}/>

    </form>
    
)

}

export default UserData;