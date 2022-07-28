import {React, useState} from 'react';
import { createContext } from 'react';

const CVContext = (props) => {


    const [template, setTemplate] = useState({})

    return (

        <TemplateState.Provider value = {[template, setTemplate]}>

            {props.children}

        </TemplateState.Provider>

    )
}


export default CVContext;
export const TemplateState = createContext();
