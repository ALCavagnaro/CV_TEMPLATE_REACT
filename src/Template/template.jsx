import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';



const Template = () => {

      const [state, setState] = useContext(TemplateState);

                  
            console.log(state[0]);
      

     

      return (
          
        <>
          
            <div>
                  <p>{state[0]}</p>
                  <p>{state[1]}</p>
                  <p>{state[2]}</p>
                  <p>{state[3]}</p>
            </div>
           </>

      )

}


export default Template;