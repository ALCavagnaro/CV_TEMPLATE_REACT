import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';

const Recommendation = () => {
    //const [state, setState] = useContext(TemplateState);
    const context = useContext(TemplateState);
    const state = context[0];
    const stateLength = state.length === 0;

    let recommendation = [];

    return (
        <>
            {stateLength? <></> : state[0].map((item) => {

            if (item.id === 'recomendación' || 
                item.id === 'responsable') 
                
                {
                
                recommendation.push(<h6 className= 'user-recommendation-p' id={item.id + `-user`}>{item.value}</h6>)

                }


            }) }

            <div className = 'user-recommendation'>
                <h6 className='recommendation-title'>Recomendaciones</h6>
                    {recommendation}
            </div>
        </>
    )

}

export default Recommendation;