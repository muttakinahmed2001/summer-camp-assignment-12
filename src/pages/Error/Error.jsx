 import { Link } from 'react-router-dom';
import '../../assets/error.jpg'
const Error = () => {
    return (
        <div>
           <img src={Error} alt="" />
           <Link to='/'><button className="btn">Home</button></Link>
        </div>
    );
};

export default Error;