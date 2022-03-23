import React , {useContext} from 'react';
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
      const state = context[0];
      console.log('elementos del obj state', state, 'Length:', state.length);
      const stateLength = state.length === 0;
      
      const eraseContent = (e) => { //No anda//
              e.preventDefault();
              state[0].map((item) => item.value='');
              console.log(state[0].value);
            }
            
            return (  
            
            <> 

            {stateLength? <button disabled='disabled' style={{cursor:'no-drop'}} id='btn-descarga' onClick = {Print}>Descargar</button>:<button id='btn-descarga' onClick = {Print}>Descargar</button>}
            {stateLength? <button disabled='disabled' style={{cursor:'no-drop'}} id='btn-borrar' onClick = {eraseContent}>Borrar</button>:<button id='btn-borrar' onClick = {eraseContent}>Borrar</button>}  

              {stateLength ? <h2 id='pdf-template'>Template vacío</h2> : 
              
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
      
            </>

            )


}


export default Template;

