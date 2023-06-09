import { Link } from "react-router-dom";



const Navbar = () => {

    const navItems = <>
    {/* TODO: img src should be user profile */}
     <img className="rounded-full border w-[40px] mr-4   lg:invisible md:invisible ml-3" src='https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/290213406_1095118624406773_5242759896864242341_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGfT3uw38IFMeODGr6x4ah5ZLh7OdoixoxkuHs52iLGjJQjWnkcjDrqOi5Qood8XxHPB4uy_UEhexkuj_ejZnw_&_nc_ohc=VViZa3u0u3QAX8bLezk&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDcwfwF-nIozJpOUHfqSZBJZtYacS0MsXB-lV7tyvrUZQ&oe=64879245' alt="" />
        <li><Link to='/'>Home</Link></li>
        <li><Link>Instructors</Link></li>
        <li><Link>Classes</Link></li>
        <li><Link>Dashboard</Link></li>
        
    </>
    return (
        <div className="navbar bg-base-100 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Learn Language</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {/* TODO: img src should be user profile */}
                <img className="rounded-full border w-[40px] mr-4 invisible lg:visible md:visible" src='https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/290213406_1095118624406773_5242759896864242341_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGfT3uw38IFMeODGr6x4ah5ZLh7OdoixoxkuHs52iLGjJQjWnkcjDrqOi5Qood8XxHPB4uy_UEhexkuj_ejZnw_&_nc_ohc=VViZa3u0u3QAX8bLezk&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDcwfwF-nIozJpOUHfqSZBJZtYacS0MsXB-lV7tyvrUZQ&oe=64879245' alt="" />
              <Link><button className="btn btn-success btn-sm">Login</button></Link>
              <Link><button className="btn btn-success btn-sm ml-4">LogOut</button></Link>
            </div>
        </div>
    );
};

export default Navbar;