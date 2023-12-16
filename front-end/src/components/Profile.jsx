
import avatar from '../assets/images/Frame.svg'

const Profile = () => {
  return (

    <div className='flex items-center gap-3 text-x justify-center mt-2'>
        <div className="img">
            <img src={avatar} alt="avatar" className='w-10 rounded-full'/>
        </div>
        
    </div>
  )
}

export default Profile