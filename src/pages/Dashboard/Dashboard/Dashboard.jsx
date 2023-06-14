import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import {  FaUsers } from "react-icons/fa";
 import classIcon from '../../../assets/class.png'
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
const Dashboard = () => {
  
  const [isAdmin] = useAdmin();
  const [isInstructor]= useInstructor();
    return (
       <>
       <Navbar></Navbar>
       <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center ">
   
    <Outlet></Outlet>
    
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-[100px]">Open drawer</label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content mt-[120px] ">
      {/* Sidebar content here */}
      {isAdmin ? <><li><Link to='mangeClasses'> <img style={{width:'30px'}} src={classIcon} alt="" />Manage Classes</Link> </li>
      <li>  <Link to='/dashboard/users'> <FaUsers style={{width:'30px'}}></FaUsers>Manage Users</Link></li></>: isInstructor ? <><li><Link to='addAClass'> <img style={{width:'30px'}} src={classIcon} alt="" />Add a class</Link> </li>
      <li>  <Link to='/dashboard/myClasses'> <FaUsers style={{width:'30px'}}></FaUsers>My classes </Link></li></> : <><li><Link> <img style={{width:'30px'}} src={classIcon} alt="" />My Selected Classes</Link> </li>
      <li>  <Link> <FaUsers style={{width:'30px'}}></FaUsers>My Enrolled classes </Link></li></>
     }
      
    </ul>
  
  </div>
</div>
       <Footer></Footer>
       </>
    );
};

export default Dashboard;