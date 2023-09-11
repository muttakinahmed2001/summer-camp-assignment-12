import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ShowFeedback = () => {
  const languageClass = useLoaderData();
  return (
    <div className="mx-auto mt-5">
      <Helmet>
        <title>Show FeedBack | Language Class</title>
      </Helmet>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Feedback</h2>
          <p>{languageClass.feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowFeedback;
