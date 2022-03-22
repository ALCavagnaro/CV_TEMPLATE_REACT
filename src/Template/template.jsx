import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';
import Print from '../Print/Print';
import Contact from '../Contact/Contact';


const Template = () => {

      //const [state, setState] = useContext(TemplateState);
      const context = useContext(TemplateState);
      const state = context[0];
      console.log('elementos del obj state', state, 'Length:', state.length);
      const stateLength = state.length === 0;
      
     // console.log('item.value:', state[0].map((item) => item.value));

      const eraseContent = (e) => { //No anda//
              e.preventDefault();
              state[0].map((item) => item.value='');
              console.log(state[0].value);
            }
            
            return (  //la condición sirve para que cuando el template esté vacío se muestre un texto y no crashee el código
            
            <> 

            {stateLength? <button disabled='disabled' style={{cursor:'no-drop'}} id='btn-descarga' onClick = {Print}>Descargar</button>:<button id='btn-descarga' onClick = {Print}>Descargar</button>}
            {stateLength? <button disabled='disabled' style={{cursor:'no-drop'}} id='btn-borrar' onClick = {eraseContent}>Borrar</button>:<button id='btn-borrar' onClick = {eraseContent}>Borrar</button>}  

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

                                    

                                    // else if (item.id==='email-input' || item.id==='teléfono-input'|| item.id === 'linkedin-input' || item.id ==='localidad' || item.id === 'CP') {
                                          
                                    //       return (
                                                
                                    //             <>
                                                
                                    //                   <div className='user-contact' id={item.id}>{item.value}</div>
                                    //             </>

                                    //             )
                                    // }
                                    
                                    
                                    else if (item.id === 'tareas' || item.id === 'empleador-input' || item.id === 'localidad-input' || item.id === 'cargo.input' || item.id === 'inicio-input' || item.id === 'finalización-input') {   
                                          
                                          return (
                                                <div className = 'user-experience'>
                                                      <h6 className= 'user-experience-p' id={item.id + `-user`}>{item.value}</h6>
                                                </div>
                                          )       
                                    }
                                    
                                    else if (item.id === 'desde-input' || item.id === 'hasta-input' || item.id === 'campo-input' || item.id === 'título-input' || item.id === 'institución-input') {   
                                          
                                          return (
                                                <div className = 'user-education'>
                                                      <h6 className= 'user-education-p' id={item.id + `-user`}>{item.value}</h6>
                                                </div>
                                          )       
                                    }

                                    else if (item.id === 'recomendación' || item.id === 'responsable') {   
                                          
                                          return (
                                                <div className = 'user-education'>
                                                      <h6 className= 'user-education-p' id={item.id + `-user`}>{item.value}</h6>
                                                </div>
                                          )       
                                    }

                                    else if (item.id === 'habilidad/conocimiento' || item.id === 'nivel') {   
                                          
                                          return (
                                                <div className = 'user-education'>
                                                      <h6 className= 'user-education-p' id={item.id + `-user`}>{item.value}</h6>
                                                </div>
                                          )       
                                    }

                                    else if (item.id === 'actividad') {   
                                          
                                          return (
                                                <div className = 'user-education'>
                                                      <h6 className= 'user-education-p' id={item.id + `-user`}>{item.value}</h6>
                                                </div>
                                          )       
                                    }

                                    
                            })}

                              <Contact/>
                              

                          </div>
                  
                  }
      
            </>

            )


}


export default Template;

