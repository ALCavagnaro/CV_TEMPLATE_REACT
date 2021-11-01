import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';


const Template = () => {

      const [state, setState] = useContext(TemplateState);

      return (
          
        <>
          <h1>HOLAAAAA</h1>
        </>

      )

}


export default Template;