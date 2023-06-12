import { useQuery } from "@tanstack/react-query";

 

const AllUsers = () => {
    const {data: users =[], refetch} = useQuery(['users'],async()=>{
         
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    return (
        <div>
           
             <h1 className="text-2xl font-bold">Total Users:{users.length}</h1>
        </div>
    );
};

export default AllUsers;