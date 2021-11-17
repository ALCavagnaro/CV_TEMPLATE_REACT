import {cv} from '../../resume/resume';


const Education = () => {

  let education = [];

  education.push(
    <div className='fields' id={Object.keys(cv)[2]} key={Object.keys(cv)[2]}>
      <label>
        {Object.keys(cv)[2]}
      </label>
    </div>
  )


for (let element in Object.entries(cv)[2][1][0] ) {
  education.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>)
}


return (

    <>

    {education}

    </>
)

}

export default Education;