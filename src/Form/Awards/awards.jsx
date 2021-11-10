import {cv} from '../../resume/resume';

const Awards = () => {

  let awards = [];
  
    awards.push(
      <div className='fields' id={Object.keys(cv)[5]}>
        <label>
          {Object.keys(cv)[5]}
        </label>
      </div>
    )

    for (let element in Object.entries(cv)[5][1][0] ) {
           awards.push(<label className= 'sub-label'id={element} key={element}>{element}<input placeholder='holaaaaa'/></label>);
         }

         return (<></>)

}


export default Awards;