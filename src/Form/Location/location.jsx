import {cv} from '../../resume/resume';

const Location = () => {

let location = []

for (let element of Object.keys(cv.basics.location)) {

  location.push(
    <div className='fields' id={element} key={element}>
      <label className ='basics'id={element} key={element}>{element}
        <input/>
      </label>
    </div>
  )

}

return (

    <>

    {location}

    </>
)

}

export default Location;