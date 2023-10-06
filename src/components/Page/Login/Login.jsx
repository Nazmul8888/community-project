import { Link } from "react-router-dom";



const Login = () => {

    const handelLogin = e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password)
    }
    return (
        <div> 
            <div>
            <h2 className=" text-3xl my-10 text-center">Please Login</h2>

            <form onSubmit={handelLogin} className="md:w-3/4 lg:w-1/2 mx-auto" >
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
            <p className="text-center mt-4">Dont have an Account? please<Link className="text-blue-600" to='/register'> Register
                </Link>
             </p>


            </div>
  
            
        </div>
    );
};

export default Login;