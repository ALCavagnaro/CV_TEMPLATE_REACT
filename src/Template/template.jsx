import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';
import { jsPDF } from "jspdf";
//import Button from '../Button/button';

const Template = () => {

      //const [state, setState] = useContext(TemplateState);
      const context = useContext(TemplateState);
      const state = context[0];
      console.log('elementos del obj state', state, 'Length:', state.length);
      const stateLength = state.length === 0;


      const eraseContent = (e) => {
              e.preventDefault();
              state[0].map((item) => item.value='');
              console.log(state[0].value);
            }

      const print = () => {


            const item = state.map((item) => JSON.stringify(item))
            const doc = new jsPDF();
            doc.html(document.querySelector("#pdf-template"), {
                  callback: function (doc) {
                    doc.save();
                  }
               });
      }
     

            return (  //la condición sirve para que cuando el template esté vacío se muestre un texto y no crashee el código
            
            <> 

            <button id='btn-descarga' onClick = {print}>Descargar</button>
            <button id='btn-descarga' onClick = {eraseContent}>Borrar</button>  

              {stateLength ? <h2 id='pdf-template'>Template vacío</h2> : 
              
                  <div id='pdf-template'>

                        <div id= 'user-data-info'>
                        
                            {state[0].map((item) => (

                              item.id === 'foto' ? <img alt='not found' id='pdf-img' src={item.img}></img> : //item.img para aplicarle tag img
                              
                              <p className ='pdf-p' key={item.id}>{item.value}</p>
                              
                              
                              ))}

                          </div>
                      
                      </div>}
      
            </>

            )


}


export default Template;

