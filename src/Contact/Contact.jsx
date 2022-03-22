import React , {useContext} from 'react';
import { TemplateState } from '../Context/CVContext';

const Contact = () => {
    //const [state, setState] = useContext(TemplateState);
    const context = useContext(TemplateState);
    const state = context[0];
    const stateLength = state.length === 0;

    let contact = [];

    return (
        <>
            {stateLength? <></> : state[0].map((item) => {

            if (item.id==='email-input' || item.id==='teléfono-input'|| item.id === 'linkedin-input' || item.id ==='localidad' || item.id === 'CP') {
                
                // return (
                        
                //         <div className='user-contact' id={item.id}>{item.value}</div>
                // )

                contact.push(<p>{item.value}</p>)

            }


            }) }

            <div className='user-contact'>
                <h4>Datos de contacto</h4>
                    {contact}
            </div>
        </>
    )

}

export default Contact;