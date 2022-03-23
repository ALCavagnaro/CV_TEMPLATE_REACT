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
                
                activities.push(<h6 className= 'user-activities-p' id={item.id + `-user`}>{item.value}</h6>)

                }


            }) }

            <div className = 'user-activities'>
                <ul className='activities-title'>Intereses personales</ul>
                    {activities}
            </div>
        </>
    )

}

export default Activities;