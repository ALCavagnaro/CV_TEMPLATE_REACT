import {cv} from '../../resume/resume';

const References = () => {

    let references = [];

  references.push(
    <div className='fields' id={Object.keys(cv)[3]} key={Object.keys(cv)[3]}>
      <label>
        {Object.keys(cv)[3]}
      </label>
    </div>
  )


for (let element in Object.entries(cv)[3][1][0] ) {
  references.push(<label className= 'sub-label'id={element} key={element}>{element}<input/></label>);
}

return (

    <>
    {references}
    </>
)

}

export default References;