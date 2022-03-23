import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';

const Ability = () => {
    //const [state, setState] = useContext(TemplateState);
    const context = useContext(TemplateState);
    const state = context[0];
    const stateLength = state.length === 0;

    let ability = [];

    return (
        <>
            {stateLength? <></> : state[0].map((item) => {

            if (item.id === 'habilidad/conocimiento' || 
                item.id === 'nivel')
                
                {
                
                ability.push(<h6 className= 'user-ability-p' id={item.id + `-user`}>{item.value}</h6>)

                }


            }) }

            <div className = 'user-ability'>
                <h6 className='ability-title'>Habilidades y conocimientos</h6>
                    {ability}
            </div>
        </>
    )

}

export default Ability;