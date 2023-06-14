import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

//  
// const { data: languageClasses = [] } = useQuery(['classesByEmail'], async () => {
//     const response = await axiosSecure.get(`/classesByEmail?email=${user.email}`)
//     return response.data;
// });
// console.log(languageClasses)
const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
const {data: classesByStatus =[]}= useQuery(['approveClasses'],async () => {
  
    const response = await axiosSecure.get('/classesByStatus?status=Approved')
    return response.data;
})
     
    return (
        <div >
            <h1 className="mt-[100px]">Approve Classes</h1>
            <h1>{classesByStatus.length}</h1>
             {classesByStatus.map( languageClass => <div key={languageClass._id} className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={languageClass.ClassImage} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>)}
        </div>
    );
};

export default Classes;