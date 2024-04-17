import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";


const Register = () => {
const {createUser} = useContext(AuthContext)

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = data =>  {
    const {email, password} = data
    createUser (email, password)
    .then(result => {
        console.log(result)
    })
   
  }

    return (
        <div className="hero py-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" {...register("fullName", { required: true })} />
              </div>
              {errors.fullName && <span>This field is required</span>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" {...register("email", { required: true })} />
              </div>
              {errors.email && <span>This field is required</span>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input type="text" placeholder="image url" name="image" className="input input-bordered" {...register("imgURL", { required: true })}/>
              </div>
              {errors.imgURL && <span>This field is required</span>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;