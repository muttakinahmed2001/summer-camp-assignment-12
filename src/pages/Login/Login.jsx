import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const [show, setShow] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
  };
  console.log(errors);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">Please Login</h1>


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
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email"  {...register("name", { required: true })} className="input input-bordered" />
              {errors.name && <span>Email is required</span>}


            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex items-center"> <input type={show ? 'text' : 'password'} name="password" placeholder={"password"} {...register("password", { required: true })} className="input input-bordered" />

                <p onClick={() => setShow(!show)}>  {
                  show ? <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
                    <> <AiFillEyeInvisible className="ml-2"></AiFillEyeInvisible> </> </IconContext.Provider> : <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
                    <>  <AiFillEye className="ml-2"></AiFillEye> </> </IconContext.Provider>
                } </p>
              </div>
              {errors.password && <span>Password is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Already have an account? Sign Up</a>
              </label>
            </div>
            <div className="form-control mt-6">

              <input className="btn btn-success" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;