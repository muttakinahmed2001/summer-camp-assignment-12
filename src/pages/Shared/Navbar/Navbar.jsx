import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
       .then(() => {})
       .catch(error => console.log(error));

    }

    const navItems = <>
        {/* TODO: img src should be user profile */}
       {user? <img className="rounded-full border w-[40px] mr-4   lg:invisible md:invisible ml-3" src={user.photoURL} alt="" /> : ''}
        <li><Link to='/'>Home</Link></li>
        <li><Link>Instructors</Link></li>
        <li><Link>Classes</Link></li>
        {user ? <li><Link to='dashboard'>Dashboard</Link></li> : ''}

    </>
    
    return (
        <div className="navbar bg-black bg-opacity-20 fixed  z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black bg-opacity-20 rounded-box w-52 text-xl text-white font-semibold">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl text-white font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {/* TODO: img src should be user profile */}
                {user?<img className="rounded-full border w-[40px] mr-4 invisible lg:visible md:visible" src={user.photoURL} alt="" />:''}
                {user ? <Link><button onClick={handleLogOut} className="btn btn-success btn-sm ml-4">LogOut</button></Link> : <Link to='/login'><button className="btn btn-success btn-sm">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;