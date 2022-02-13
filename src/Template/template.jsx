import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';
import { jsPDF } from "jspdf";
import Button from '../Button/button';

const Template = () => {

      const [state, setState] = useContext(TemplateState);
      
       console.log('elementos del obj state', state, 'Length:', state.length);
       const stateLength = state.length == 0;
      // console.log('obj state 0 0', state[0][0].value);
      // console.log('tipo de state:', typeof(state)); 

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

              {stateLength ? <div id='pdf-template'>Template vacío</div> : 
              
                  <div id='pdf-template'>

                        <div id= 'user-data-info'>
                        
                            {state[0].map((item) => (

                              item.id === 'foto' ? <img alt='not found' id='pdf-img' src={item.img}></img> : //item.img para aplicarle tag img
                              
                              <p id='pdf-p' key={item.id}>{item.value}</p>
                              
                              
                              ))}

                          </div>
                      
                      </div>}

              
            
            <Button text='descargar' onClick = {print}/>  
      
            </>

            )


}


export default Template;

