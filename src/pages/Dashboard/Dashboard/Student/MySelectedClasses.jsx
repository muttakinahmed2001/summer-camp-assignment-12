import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const MySelectedClasses = () => {
    const {user}= useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { data: languageClasses = [],refetch } = useQuery(['selectedClassesByEmail'], async () => {
        const response = await axiosSecure.get(`selectedClassesByEmail?email=${user.email}`)
        return response.data;
    });
    console.log(languageClasses)

    const handleDelete = id => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
    
            axiosSecure.delete(`/selectedClass/${id}`)
              .then(res => {
                console.log('deleted res', res.data)
                if (res.data.deletedCount > 0) {
                  Swal.fire(
                    'Deleted!',
                    'Class has been deleted.',
                    'success'
                  )
                }
                refetch();
              })
          }
        })
      }
    return (
        <div>
             <div className="overflow-x-auto">
      <table className="table  mt-100px">
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
            <th>Status</th>
            <th>Approve/Deny</th>
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
            <td className="text-xl font-semibold">   {languageClass.status} </td>
            <td>


              <button
                
                className="btn btn-warning btn-sm"
              >
               Pay
              </button>
              <br />

              <button onClick={()=>{handleDelete(languageClass._id)}} className="btn btn-error btn-sm my-4"
              >
                Delete
              </button>
               
              

            </td>
          </tr>)

          }


        </tbody>


      </table>

   
    </div>
        </div>
    );
};

export default MySelectedClasses;