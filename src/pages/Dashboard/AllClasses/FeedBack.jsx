import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const FeedBack = () => {
    const languageClass = useLoaderData();
    const {_id} = languageClass;
    console.log(_id)
     
    const handleFeedBack = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;

        fetch(`http://localhost:5000/classes/feedback/${_id}`,{
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
             body: JSON.stringify({feedback})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Feedback send successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
         
    return (
        <form onSubmit={handleFeedBack}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl">Feedback</span>

                </label>
                <textarea className="textarea textarea-bordered h-24" name="feedback" placeholder="Give Feedback"></textarea>

            </div>
            <input className="mt-5 btn btn-warning" type="submit" value="Send Feedback" />
        </form>
    );
};

export default FeedBack;