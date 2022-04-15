import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';

const Photo = () => {
    //const [state, setState] = useContext(TemplateState);
    const context = useContext(TemplateState);
    const state = context[0];
    //const stateLength = state.length === 0;

    return (
        <>
            {state[0].map((item) => {

                    if (item.id === 'foto' && item.value !== null) { console.log(item)

                        return (

                                <>
                                    
                                    <img alt='not found' id='pdf-img' src={item.img}></img>
                                
                                </>
                        )
                        
                    }


                    })}
                
        </>
    )

}

export default Photo;