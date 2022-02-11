import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';
import { jsPDF } from "jspdf";
import Button from '../Button/button';

const Template = () => {

      const [state, setState] = useContext(TemplateState);
      
       console.log('elementos del obj state', state, 'Length:', state.length);
       const stateLength = state.length == 0;
      // console.log('obj state 0 0', state[0][0].value);
       console.log('tipo de state:', typeof(state));

      // for (let element of state[0]){
      //   console.log("aleluya", element.id, element.value)
      // }

      
      //   for (let key in Object.keys(state)) {
      //       let element = state.key;
      //       console.log('hola prueba', element);
      //     }  

      const print = () => {

            const item = state.map((item) => JSON.stringify(item))
            const doc = new jsPDF();
            doc.html(document.querySelector("#pdf-template"), {
                  callback: function (doc) {
                    doc.save();
                  }
               });
      }
     

            return (  //ponerle una condición para que cuando el template esté vacío muestre un texto o algo
            
            <> 

              {stateLength ? <div id='pdf-template'>Template vacío</div> : state[0].map((item) => (

                  <h1 key={item.id}>{item.value}</h1>
                  ))}   
            
            <Button text='descargar' onClick = {print}/>  
      
            </>

            )


}


export default Template;



 {/* {state[0].map((item) => (

                <h1 key={item.id}>{item.value}</h1>
              ))} */}