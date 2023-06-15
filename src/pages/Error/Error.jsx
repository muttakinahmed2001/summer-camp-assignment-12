 import { Link } from 'react-router-dom';
import error from '../../assets/error.jpg'
const Error = () => {
    return (
        <div className='mx-auto my-8'>
          <div className='flex flex-col justify-center items-center'>
          <img src={error} alt="" />
           <Link to='/'><button className="btn btn-warning mt-5">Home</button></Link>
          </div>
        </div>
    );
};

export default Error;