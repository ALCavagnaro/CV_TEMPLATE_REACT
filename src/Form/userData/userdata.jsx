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
    setState({id:'img', value:base64String});   
  
            //  const form = document.querySelector('#userForm')

            //  for (let item of form) {

            //    console.log(item.id);

            //    if (item.id == 'foto' || item.id == 'eliminar' || item.id == 'guardar') {
                
            //        setState({''})
            //    }

            //    else (

            //    setState({id:item.id,value:item.value})

            //    )
            //  }

            // const form = document.querySelector('#userForm')  // **** este funciona pero guarda el último elemento solamente **** //

            // for (let item of form) {

            //   setState([{id: item.id, value: item.value}])     // tiene que queda entre corchetes para que pueda mapear "state" después //
            // }

            const form = document.querySelector('#userForm')  // CAMBIAR ESTE CÓDIGO //

            let list;

            let returnList = [];

            for (let item of form) {
              list = new Object();

              if (item.id == 'foto' || item.id == 'eliminar' || item.id == 'guardar')
              
              {list.id=item.id;
              list.value = ''}
              
              else {
              list.id = item.id;
              list.value = item.value;
              returnList.push(list)}
              
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
  //console.log(e.target.files[0]);
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