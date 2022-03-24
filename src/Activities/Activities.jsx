import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';

const Activities = () => {
    //const [state, setState] = useContext(TemplateState);
    const context = useContext(TemplateState);
    const state = context[0];
    const stateLength = state.length === 0;

    let activities = [];

    return (
        <>
            {stateLength? <></> : state[0].map((item) => {

            if (item.id === 'actividad')
                
                {
                
                activities.push(<ul className= 'user-activities-p' id={item.id + `-user`}>{item.value}</ul>)

                }


            }) }

            <div className = 'user-activities'>
                <h6 className='activities-title'>Intereses personales</h6>
                    {activities}
            </div>
        </>
    )

}

export default Activities;