import { Link } from "react-router-dom";



const Register = () => {

    const handelRegister = e=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        console.log(name,email,password)
    }
    return (
        <div>

<div>
            <h2 className=" text-3xl my-10 text-center">Please Login</h2>

            <form onSubmit={handelRegister} className="md:w-3/4 lg:w-1/2 mx-auto" >
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" required name="name" placeholder="Name Here" className="input input-bordered" required />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" required name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" required name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
         </div>
         <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
            </div>

            </form>
            <p className="text-center mt-4">Have a Account? please<Link className="text-pink-600" to='/login'> Login
                </Link>
             </p>


            </div>
            
        </div>
    );
};

export default Register;
