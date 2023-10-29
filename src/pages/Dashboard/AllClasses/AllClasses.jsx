import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [clicked, setClicked] = useState([]);

  const { data: languageClasses = [], refetch } = useQuery(
    ["classes"],
    async () => {
      const response = await axiosSecure.get("/classes");
      return response.data;
    }
  );
  console.log(languageClasses);

  const handleMakeApprove = (id) => {
    const newClicked = [...clicked, id];
    setClicked(newClicked);
    fetch(
      `https://assignment-12-server-one-sepia.vercel.app/classes/approve/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class approved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeDeny = (id) => {
    const newClicked = [...clicked, id];
    setClicked(newClicked);
    fetch(
      ` https://assignment-12-server-one-sepia.vercel.app/classes/deny/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class denied",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Mange Classes | Language Class</title>
      </Helmet>
      <div className="overflow-x-auto w-full">
        <table className="table table-compact table-responsive min-w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
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
            {languageClasses.map((languageClass, index) => (
              <tr key={languageClass._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle  ">
                        <img src={languageClass.ClassImage} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{languageClass.ClassName}</td>
                <td>{languageClass.instructorName}</td>
                <td>{languageClass.instructorEmail}</td>
                <td>{languageClass.AvailableSeat}</td>
                <td>{languageClass.price}</td>
                <td className="text-xl font-semibold">
                  {" "}
                  {languageClass.status}{" "}
                </td>
                <td>
                  <button
                    disabled={clicked.includes(languageClass._id)}
                    onClick={() => handleMakeApprove(languageClass._id)}
                    className="btn btn-success btn-sm">
                    Approve
                  </button>
                  <br />

                  <button
                    disabled={clicked.includes(languageClass._id)}
                    onClick={() => handleMakeDeny(languageClass._id)}
                    className="btn btn-error btn-sm my-4">
                    Deny
                  </button>
                  <br />
                  <Link to={`/dashboard/feedback/${languageClass._id}`}>
                    <button className="btn btn-primary btn-sm">Feedback</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllClasses;
