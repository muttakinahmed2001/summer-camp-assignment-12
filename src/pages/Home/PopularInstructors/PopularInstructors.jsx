import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PopularInstructors = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const response = await axiosSecure.get("/instructors?role=instructor");
    return response.data;
  });
  console.log(instructors);

  return (
    <div className="mt-[100px] mb-[100px] px-4  mx-auto">
      <h1 className="text-center text-3xl mb-10">Popular Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10 container max-w-screen-2xl">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="card w-full  bg-base-100 shadow-xl">
            <figure>
              <img
                src={instructor.image}
                alt="Shoes"
                className="rounded-xl w-full h-[300px] object-cover "
              />
            </figure>
            <div className="card-body py-4 gap-0">
              <h2 className="card-title"> {instructor.name}</h2>
              <small className="font-semibold text-blue-500">
                {instructor.email}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
