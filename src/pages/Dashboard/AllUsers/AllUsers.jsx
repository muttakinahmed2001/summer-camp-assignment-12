import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";



const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {

    const res = await fetch('https://assignment-12-server-one-sepia.vercel.app/users')
    return res.json();
  })

  const handleMakeAdmin = id => {
    fetch(`https://assignment-12-server-one-sepia.vercel.app/users/admin/${id}`,{
      method: 'PATCH'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.modifiedCount >0){
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
    fetch(`https://assignment-12-server-one-sepia.vercel.app/users/instructor/${id}`,{
      method: 'PATCH'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.modifiedCount >0){
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
                <td>{user.role === 'admin' ? 'Admin' : user.role ==='instructor' ? 'Instructor' : 'Student' }</td>
                <td><button onClick={() =>handleMakeAdmin(user._id)} className="btn btn-accent">Make Admin</button></td>
                <td><button onClick={() =>handleMakeInstructor(user._id)} className="btn btn-info">Make Instructor</button></td>
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