import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";



const AllUsers = () => {
   const [adminClicked,setAdminClicked]= useState([]);
   const [instructorClicked,setInstructorClicked]= useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {

    const res = await axiosSecure.get('/users',
    )
    return res.data;
  })

  const handleMakeAdmin = id => {
    const newAdminClicked = [...adminClicked, id]
    setAdminClicked(newAdminClicked)
    fetch(` http://localhost:5000/users/admin/${id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Role changed successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
      )
  }
  const handleMakeInstructor = id => {
    const newInstructorClicked = [...instructorClicked, id]
    setInstructorClicked(newInstructorClicked)
    fetch(` http://localhost:5000/users/instructor/${id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Role changed successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
      )
  }

  return (
    <div className="w-full">

      <h1 className="text-2xl font-bold my-4">Total Users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role === 'admin' ? 'Admin' : user.role === 'instructor' ? 'Instructor' : 'Student'}</td>
                <td><button disabled={adminClicked.includes(user._id)} onClick={() => handleMakeAdmin(user._id)} className="btn btn-accent">Make Admin</button></td>
                <td><button disabled={instructorClicked.includes(user._id)}  onClick={() => handleMakeInstructor(user._id)} className="btn btn-info">Make Instructor</button></td>
              </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;