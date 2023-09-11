import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const response = await axiosSecure.get("/instructors?role=instructor");
    return response.data;
  });
  console.log(instructors);

  return (
    <div className="mt-[100px] mb-[100px]  mx-auto">
      <Helmet>
        <title>Instructors | Language Class</title>
      </Helmet>
      <h1 className="text-center text-3xl">Our Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 ">
              <img
                src={instructor.image}
                alt="Shoes"
                className="rounded-xl w-full h-[200px] "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Instructor Name: {instructor.name}</h2>
              <p className="font-semibold">
                Instructor Email: {instructor.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
