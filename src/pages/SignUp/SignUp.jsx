import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
import { useState } from 'react';

const SignUp = () => {
  const [error,setError]= useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
    const password = data.password;
    const confirmPassword = data.confirmPassword;
   

    if(password !== confirmPassword){
   
    setError('Password does not matched')
    return;
   }
    setError('')
   console.log(data)  
    };
    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-4">Please Sign Up</h1>
  
  
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
  
            <button className="btn btn-outline  my-4">  <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
              <>
                <FcGoogle className="mr-2  ">  </FcGoogle > <h1>Sign in with google</h1>
              </>
            </IconContext.Provider></button>
            <div className="divider">OR</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name"  {...register("name")} className="input input-bordered" />
                
  
  
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email"  {...register("email", { required: true })} className="input input-bordered" />
                {errors.email && <span>Email is required</span>}
  
  
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center"> <input type='password' name="password" placeholder={"password"} {...register("password", { required: true, minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/})} className="input input-bordered" />
  
                   
                </div>
                {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                {errors.password?.type ==='minLength' && <span className='text-red-600'>Password must be 6 characters</span>}
                {errors.password?.type ==='pattern' && <span className='text-red-600'>Password must have one capital letter and one special character</span>}
                  <p></p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm password</span>
                </label>
                <div className="flex items-center"> <input type='password' name="confirmPassword" placeholder={"Confirm password"} {...register("confirmPassword", { required: true })} className="input input-bordered" />
   
                </div>
                
                <p className='text-red-600'>{error}</p>
              </div>
               
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <div className="flex items-center"> <input type='text' name="photo" placeholder={"Photo URL"} {...register("photo" )} className="input input-bordered" />
  
                   
                </div>
                
                 <p className='mt-2'>Already have an account? <Link to='/login'>Login </Link> </p>
              </div>
               
              <div className="form-control mt-6">
  
                <input className="btn btn-success" type="submit" value="Sign Up" />
              </div>
            </form>
          </div>
        </div>
      </div>
           
    );
};

export default SignUp;