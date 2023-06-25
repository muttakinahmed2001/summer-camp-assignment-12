import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";



const MyClasses = () => {
    const {user}= useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { data: languageClasses = [] } = useQuery(['classesByEmail'], async () => {
        const response = await axiosSecure.get(`/classesByEmail?email=${user.email}`)
        return response.data;
    });
    console.log(languageClasses)

    const {data: totalEnrolledStudents=[]} = useQuery(['totalEnrolledStudents'], async () => {
        const response = await axiosSecure.get(`/totalEnrolledStudents?instructorName=${user.displayName}`)
        return response.data
    })
    return (
        <>
        <Helmet>
            <title>
                My Classes | Language Class
            </title>
        </Helmet>
       <h1 className="text-xl text-center my-4">Total enrolled students: {totalEnrolledStudents.totalEnrolledStudents}</h1>

        <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>Class Image</th>
                    <th>Class Name</th>
                    <th>Instructor Name</th>
                    <th>Instructor Email</th>
                    <th>Available Seats</th>
                    <th>Price</th>
                    <th>Total enrolled students</th>
                    <th>Status</th>

                    <th>See FeedBack</th>
                    <th>Update</th>

                </tr>
            </thead>
            <tbody>
                {languageClasses.map((languageClass, index) => <tr key={languageClass._id}>
                    <td>
                        {index + 1}
                    </td>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={languageClass.ClassImage} />
                                </div>
                            </div>

                        </div>
                    </td>
                    <td>
                        {languageClass.ClassName}
                    </td>
                    <td>
                        {languageClass.instructorName}
                    </td>
                    <td>{languageClass.instructorEmail}</td>
                    <td>{languageClass.AvailableSeat}</td>
                    <td>{languageClass.price}</td>
                    <td>Total enrolled students</td>
                    <td className="text-xl font-semibold">   {languageClass.status} </td>
                    <td>

                    {languageClass.feedback ?<Link to={`/dashboard/showFeedback/${languageClass._id}`}> <button className="btn btn-warning">Show Feedback</button> </Link>: null}




                    </td>
                    <td> <button className="btn btn-success btn-sm my-4"
                    >
                        Update
                    </button></td>

                </tr>)

                }


            </tbody>


        </table>


    </div></>
    );
};

export default MyClasses;