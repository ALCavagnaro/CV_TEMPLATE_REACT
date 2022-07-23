import React , {useContext, useState} from 'react';
import { TemplateState } from '../Context/CVContext';
import Print from '../Print/Print';
import Contact from '../Contact/Contact';
import Presentación from '../Presentación/Presentación';
import Experience from '../Experience/Experience';
import Study from '../Study/Study';
import Recommendation from '../Recommendation/Recommendation';
import Ability from '../Ability/Ability'; 
import Activities from '../Activities/Activities';
import Photo from '../Photo/Photo';

const Template = () => {

      const context = useContext(TemplateState);
      const [state, setState] = useState(context[0]);
      console.log('elementos del obj state', state,'context',context[0], 'state length',state.length);
      //const stateLength = context.length === 0;
      
      const eraseContent = (e) => { 
              e.preventDefault();
              setState([]);
              context[0] = [];
              console.log(state, 'contexto', context);
            }
            
            return (  
            
            <> 

                  <div className='template-container'>
                        {context[0].length === 0 ? <h2 id='pdf-template'>Template vacío</h2> : 
                        
                        <div id='pdf-template'>
                              
                                    <Photo/>
                                    <Presentación/>
                                    <Contact/>
                                    <Experience/>
                                    <Study/>
                                    <Recommendation/>
                                    <Ability/>
                                    <Activities/>
                                          
                        </div>

                              
                        
                        }

                              <div className= 'template-btn-container'>

                              {context[0].length === 0 ?

                                    <button disabled='disabled' style={{cursor:'no-drop'}} id='btn-descarga' onClick = {Print}>Descargar</button>:
                                    <button id='btn-descarga' onClick = {Print}>Descargar</button>}
                                    
                              {context[0].length === 0 ?
                              
                              <button disabled='disabled' style={{cursor:'no-drop'}} id='btn-borrar'>Borrar</button>:
                              <button id='btn-borrar' onClick = {eraseContent}>Borrar</button>}

                              </div>

                  </div>
      
            </>

            )


}


export default Template;

