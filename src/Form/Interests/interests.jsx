import {cv} from '../../resume/resume';


const Interests = () => {

  let interests = [];

  interests.push(
    <div className='fields' id={Object.keys(cv)[7]}>
      <label>
        {Object.keys(cv)[7]}
      </label>
    </div>
  )


for (let element in Object.entries(cv)[7][1][0]) {
  interests.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>);
}


return (

    <>

    {interests}

    </>
)

}

export default Interests;