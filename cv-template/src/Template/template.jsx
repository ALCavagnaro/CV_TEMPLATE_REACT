import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';


const Template = () => {

      const [state, setState] = useContext(TemplateState);

      return (
          
        <>
           <div>
              <p>{state.element}</p>
           </div>
        </>

      )

}


export default Template;