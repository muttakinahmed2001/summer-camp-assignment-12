import { useLoaderData } from "react-router-dom";

 

const ShowFeedback = () => {
    const languageClass = useLoaderData();
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Feedback</h2>
    <p>{languageClass.feedback}</p>
    
  </div>
</div>
        </div>
    );
};

export default ShowFeedback;