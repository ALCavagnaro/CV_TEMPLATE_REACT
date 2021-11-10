import {cv} from '../../resume/resume';

const Skills = () => {

    let skills = [];

  skills.push(
    <div className='fields' id={Object.keys(cv)[4]}>
      <label>
        {Object.keys(cv)[4]}
      </label>
    </div>
  )


for (let element in Object.entries(cv)[4][1][0] ) {
  skills.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>);
}

return (
    <>
     {skills}
    </>
)

}

export default Skills;