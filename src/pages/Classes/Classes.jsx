import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

 
const Classes = () => {
    const {user}=useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();
const {data: classesByStatus =[]}= useQuery(['approveClasses'],async () => {
  
    const response = await axiosSecure.get('/classesByStatus?status=Approved')
    return response.data;
})
     console.log(classesByStatus)

     const handleSelectButton =() => {
      if(user){
        fetch(' https://assignment-12-server-one-sepia.vercel.app/selectedClasses',
        {
          method: 'POST',
          headers: {}
        })
        .then(res=> res.json())
        .then(data => {
          if(data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Class is selected',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please login to select the class',
           
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login now'
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login',{state: {from: location}})
          }
        })
        
      }
     }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            
             {classesByStatus.map( languageClass =>
           
             <div key={languageClass._id} className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={languageClass.ClassImage} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{languageClass.ClassName}</h2>
    <h2 className="text-xl font-bold">Instructor:{languageClass.instructorName}</h2>
    <p>Available seats: {languageClass.AvailableSeat}</p>
    <p>Price:{languageClass.price}</p>
    <div className="card-actions">
         <button onClick={handleSelectButton} className="btn btn-primary">Select Button</button>  
     
    </div>
  </div>
</div>)}
        </div>
    );
};

export default Classes;