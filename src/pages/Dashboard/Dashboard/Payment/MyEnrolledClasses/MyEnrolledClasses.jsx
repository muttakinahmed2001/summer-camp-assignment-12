import { useContext } from "react";
import { AuthContext } from "../../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

 

const MyEnrolledClasses = () => {
    const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();

  const { data: enrolledClasses = []} = useQuery(['enrolledClassesByEmail'], async () => {
    const response = await axiosSecure.get(`enrolledClassesByEmail?email=${user.email}`)
    return response.data;
  });
  console.log(enrolledClasses)

    return (
      <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
             #
            </th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
           
          </tr>
        </thead>
        <tbody>
          { enrolledClasses.map((enrolledClass,index) =>    <tr key={enrolledClass._id}>
            <th>
              {index +1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={enrolledClass.ClassImage} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{enrolledClass.ClassName}</div>
                   
                </div>
              </div>
            </td>
            <td>
            {enrolledClass.instructorName}
              
            </td>
            <td>{enrolledClass.instructorEmail}</td>
            
          </tr>
        )}
      
        </tbody>
        
      </table>
    </div>
    );
};

export default MyEnrolledClasses;