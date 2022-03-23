import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';

const Study = () => {
    //const [state, setState] = useContext(TemplateState);
    const context = useContext(TemplateState);
    const state = context[0];
    const stateLength = state.length === 0;

    let study = [];

    return (
        <>
            {stateLength? <></> : state[0].map((item) => {

            if (
                
                item.id === 'desde-input' || 
                item.id === 'hasta-input' || 
                item.id === 'campo-input' || 
                item.id === 'título-input' || 
                item.id === 'institución-input'
                
                ) {
                
                study.push(<h6 className= 'user-education-p' id={item.id + `-user`}>{item.value}</h6>)

                }


            }) }

            <div className = 'user-education'>
                <h6 className='study-title'>Educación</h6>
                    {study}
            </div>
        </>
    )

}

export default Study;