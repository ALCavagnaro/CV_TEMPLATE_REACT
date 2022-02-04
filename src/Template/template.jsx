import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';
import { jsPDF } from "jspdf";
import Button from '../Button/button';

const Template = () => {

      const [state, setState] = useContext(TemplateState);
      console.log(state);

      const print = () => {

            const item = state.map((item) => JSON.stringify(item))
            const doc = new jsPDF();
            doc.html(document.querySelector("#pdf-template"), {
                  callback: function (doc) {
                    doc.save();
                  }
               });
      }
     

            return (
            
            <> 
              
              <div id='pdf-template'>

                  { 

                                         state.map(
                                          
                                               (item) =>  

                                               <div className='user-data-info'>
                                                      <img alt='not found' width={"50px"} height={'45px'} src={item[8]}></img>
                                                      <p>{item[0]}</p>
                                                      <p>{item[1]}</p>
                                                      <p>{item[2]}</p>
                                                      <p>{item[3]}</p>
                                                      <p>{item[4]}</p>
                                                      <p>{item[5]}</p>
                                                      <p>{item[6]}</p>
                                                      <p>{item[7]}</p>
                                               </div> 
                                         )

                       


                  } 

            </div>
            <Button text='descargar' onClick = {print}/>
            </>

            )


}


export default Template;



