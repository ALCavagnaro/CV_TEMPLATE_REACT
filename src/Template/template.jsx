import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';
import { jsPDF } from "jspdf";
import Button from '../Button/button';

const Template = () => {

      const [state, setState] = useContext(TemplateState);

      console.log(state);

      const print = () => {

            //const newArray = JSON.stringify(state);
            const item = state.map((item) => JSON.stringify(item))
            console.log(typeof(item), item);
            // Default export is a4 paper, portrait, using millimeters for units
            const doc = new jsPDF();
            doc.setFontSize(10);
            doc.setTextColor(235,232,240);
            doc.text(item, 10, 10);
            //doc.save("a4.pdf");
            doc.html(document.querySelector("#test"), {
                  callback: function (doc) {
                    doc.save();
                  }
               });
      }
     

            return (
            
            <> 

                  {

                       state.map((obj) => 
                        
                        <div id='test'>
                        {obj}
                        </div>
                        )
                  }

            <Button text='descargar' onClick = {print}/>
            </>

            )


}


export default Template;

