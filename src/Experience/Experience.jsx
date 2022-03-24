import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';

const Experience = () => {
    //const [state, setState] = useContext(TemplateState);
    const context = useContext(TemplateState);
    const state = context[0];
    const stateLength = state.length === 0;

    let experience = [];

    return (
        <>
            {stateLength? <></> : state[0].map((item) => {

            if (
                
                item.id === 'tareas' || 
                item.id === 'empleador-input' || 
                item.id === 'localidad-input' || 
                item.id === 'cargo-input' || 
                item.id === 'inicio-input' || 
                item.id === 'finalización-input') 
                
            {
                
                experience.push(<h6 className= 'user-experience-p' id={item.id + `-user`}>{item.value}</h6>)

            }


            }) }

            <div className = 'user-experience'>
                <h6 className='experience-title'>Experiencia Laboral</h6>
                    {experience}
            </div>
        </>
    )

}

export default Experience;