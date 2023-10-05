import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { FaMoneyBill, FaUsers } from "react-icons/fa";
import classIcon from "../../../assets/class.png";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <>
      <Helmet>
        <title>Dashboard | Language Class</title>
      </Helmet>

      <Navbar></Navbar>
      <div className="drawer lg:drawer-open  w-3/6">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex     ">
          {/* Page content here */}

          <label
            htmlFor="my-drawer-2"
            className="   text-xl font-bold  py-auto px-3 flex flex-col justify-center text-center bg-stone-300   border-slate-400 drawer-button lg:hidden  ">
            &lt;
          </label>

          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-25 sm:w-50 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <h1 className="text-xl font-bold">Admin Home</h1>
                </li>
                <li>
                  <Link to="mangeClasses">
                    {" "}
                    <img style={{ width: "30px" }} src={classIcon} alt="" />
                    Manage Classes
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/dashboard/users">
                    {" "}
                    <FaUsers style={{ width: "30px" }}></FaUsers>Manage Users
                  </Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <h1 className="text-xl font-bold">Instructor Home</h1>
                </li>
                <li>
                  <Link to="addAClass">
                    {" "}
                    <img style={{ width: "30px" }} src={classIcon} alt="" />
                    Add a class
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/dashboard/myClasses">
                    {" "}
                    <FaUsers style={{ width: "30px" }}></FaUsers>My classes{" "}
                  </Link>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <h1 className="text-xl font-bold">User Home</h1>
                </li>
                <li>
                  <Link to="/dashboard/mySelectedClasses">
                    {" "}
                    <img style={{ width: "30px" }} src={classIcon} alt="" />
                    My Selected Classes
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/dashboard/enrolledClasses">
                    {" "}
                    <FaUsers style={{ width: "30px" }}></FaUsers>My Enrolled
                    classes{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/dashboard/paymentHistory">
                    {" "}
                    <FaMoneyBill style={{ width: "30px" }}></FaMoneyBill>{" "}
                    Payment History
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
