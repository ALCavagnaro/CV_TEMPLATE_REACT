import {cv} from '../../resume/resume';

const Work = () => {
    let work = [];

  work.push(
    <div className='fields' id={Object.keys(cv)[6]}>
      <label>
        {Object.keys(cv)[6]}
      </label>
    </div>
  )


for (let element in Object.entries(cv)[6][1][0] ) {
  work.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>);
}

return (
    <>
    {work}
    </>
)

}

export default Work;