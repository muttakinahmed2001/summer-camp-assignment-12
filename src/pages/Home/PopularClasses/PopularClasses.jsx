import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: enrolledClasses = [] } = useQuery(
    ["enrolledClasses"],
    async () => {
      const response = await axiosSecure.get("enrolledClasses");
      return response.data;
    }
  );
  console.log(enrolledClasses);
  return (
    <div className="py-10  mx-auto">
      <h1 className="text-center text-black text-3xl font-bold my-5">
        Popular Classes
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-10 container max-w-screen-2xl">
        {enrolledClasses.map((languageClass) => (
          <div
            key={languageClass._id}
            className={`card w-full bg-base-100 shadow-xl ${
              languageClass.AvailableSeat === 0 ? "bg-red-500" : ""
            }`}>
            <figure>
              <img
                src={languageClass.ClassImage}
                alt="Shoes"
                className="rounded-xl w-full h-[300px] object-fill "
              />
            </figure>
            <div className="card-body py-4 gap-0">
              {" "}
              <h2 className="card-title text-2xl font-bold">
                {languageClass._id}
              </h2>
              <h2 className=" font-bold">
                Instructor: {languageClass.instructorName}
              </h2>
              <p>Available seats: {languageClass.AvailableSeat}</p>
              <p>Enrolled Students: {languageClass.totalEnrollment}</p>
              <p>Price: ${languageClass.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
