import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';

const Presentación = () => {
    
    const context = useContext(TemplateState);
    const state = context[0];
    const stateLength = state.length === 0;

    //let presentacion = [];

    console.log('presentación', state)

    return (
        <>
            {/* {stateLength? <></> : Object.keys(state).map((item) => {

            if (item.id === 'nombre-input' || 
                item.id === "puesto-input" || 
                item.id === 'descripción') 
                
            {

                presentacion.push(<h6 className={item.id} id={item.id + ` - user`}>{item.value}</h6>)

            }


            }) }

            <div className='user-data-info'>
                    {presentacion}
            </div> */}

            <h6 className='nombre-input' id='nombre-input'>{state["nombre-input"] === undefined ? "": state["nombre-input"].value}</h6>
        </>
    )

}

export default Presentación;