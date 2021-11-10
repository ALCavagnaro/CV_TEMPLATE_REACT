import {cv} from '../../resume/resume';

const UserData = () => {

    let userData = [];

for (let element of Object.keys(cv.basics)) {
  
  userData.push(
    <div className='fields' id={element}>
      <label className ='basics'id={element} key={element}>{element}
        <input/>
      </label>
    </div>
  )
  
}

return (
    <>
    {userData}

    </>
)

}

export default UserData;