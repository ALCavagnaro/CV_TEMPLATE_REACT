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
      
     // console.log('item.value:', state[0].map((item) => item.value));

      const eraseContent = (e) => {
              e.preventDefault();
              state[0].map((item) => item.value='');
              console.log(state[0].value);
            }

      const print = () => {

            const item = state.map((item) => JSON.stringify(item))
            const doc = new jsPDF();
            const html = document.querySelector("#pdf-template");
            const html2 = html.cloneNode(true);
            html2.style.backgroundColor = 'bisque'; // clonación
            html2.style.fontSize = '7px';
            html2.style.width = '50mm';
            html2.style.height = '72mm';
            html2.style.margin ='2mm';
            html2.style.padding = '1mm';
            html2.childNodes[0].style.height = '30px';
            html2.childNodes[0].style.width = '30px';
            html2.childNodes[0].style.margin = '3px 21mm';

            let description = html2.querySelector('.descripción');
            description.style.fontSize='3.5px';

            let contact = html2.querySelectorAll('.user-contact');

                  for (let element of contact) {
                        
                        element.style.fontSize = '3.4px';
                        element.style.width = '48mm';
                        element.style.margin = 'auto';
                  }

            let experience = html2.querySelectorAll('.user-experience-p');

                  for (let element of experience) {

                        element.style.fontSize = '3.6px';
                        element.style.width = '48mm';
                        element.style.padding = '1px';
                        element.style.margin = '3px auto';
                        element.style.letterSpacing = '0.8px';
                  }

      
            doc.html(html2, {
                  callback: function (doc) {     
                   doc.save();
                  },

               });
      }
     

            return (  //la condición sirve para que cuando el template esté vacío se muestre un texto y no crashee el código
            
            <> 

            <button id='btn-descarga' onClick = {print}>Descargar</button>
            <button id='btn-borrar' onClick = {eraseContent}>Borrar</button>  

              {stateLength ? <h2 id='pdf-template'>Template vacío</h2> : 
              
                  <div id='pdf-template'>

                            {state[0].map((item) => {
                                  //item.img para aplicarle tag img

                              if (item.id === 'foto') {

                                    return (

                                          <>
                                                
                                                <img alt='not found' id='pdf-img' src={item.img}></img>
                                          
                                          </>
                                    )
                                    
                              }
                                    
                              else if (item.id === 'nombre-input' || item.id === "puesto-input" || item.id === 'descripción') {
                                    
                                    return (

                                          <div className= 'user-data-info'>
                                                <h6 className={item.id} id={item.id + ` - user`}>{item.value}</h6>
                                          </div>

                                           )        
                              }

                              else if (item.id==='email-input' || item.id==='teléfono-input'|| item.id === 'linkedin-input' || item.id ==='localidad' || item.id === 'CP') {
                                    
                                    return (
                                          
                                          <>
                                          
                                                <div className='user-contact' id={item.id}>{item.value}</div>
                                          </>

                                          )
                              }
                               
                              
                              else if (item.id === 'tareas' || item.id === 'empleador-input' || item.id === 'localidad-input' || item.id === 'puesto.input' || item.id === 'inicio-input' || item.id === 'finalización-input') {   //arreglar la condición para que el título no aparezca por default//
                                    
                                    return (
                                          <div className = 'user-experience'>
                                                <h6 className= 'user-experience-p' id={item.id + ` - user`}>{item.value}</h6>
                                          </div>
                                    )       
                              }
                              
                              
                            })}

                          </div>
                  
                  }
      
            </>

            )


}


export default Template;

