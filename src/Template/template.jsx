import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';
import { jsPDF } from "jspdf";
import Button from '../Button/button';



const Template = () => {

      const [state, setState] = useContext(TemplateState);

                  
            console.log(state[0]);

      const print = () => {
            // Default export is a4 paper, portrait, using millimeters for units
            const doc = new jsPDF();

            doc.text(state, 10, 10);
            doc.save("a4.pdf");
      }
     

      return (
          
        <> 
            <div>
                  <p>{state[0]}</p>
                  <p>{state[1]}</p>
                  <p>{state[2]}</p>
                  <p>{state[3]}</p>
            </div>
            <Button text='descargar' onClick = {print}/>
      </>

      )

}


export default Template;