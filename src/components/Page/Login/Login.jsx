import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Hoks/Provider/AuthProvider";



const Login = () => {

   const {signIn,signWithGoogle} = useContext(AuthContext);
   




    const handelLogin = e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password)

        signIn(email,password)
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error)
        })
    }
      const handelGoogleSignIn = ()=>{
        signWithGoogle()
        .then(result=>{
          console.log(result.user)
        })

        .catch(error=>{
          console.log(error)
        })
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
            <div className="flex justify-items-center ">
            <p className="">Dont have an Account? please<Link className="text-blue-600" to='/register'> Register
                </Link>
             </p>
             <p className=""><button  onClick={handelGoogleSignIn} className="btn btn-primary hover:bg-red-600">Google</button></p>
            </div>


            </div>
  
            
        </div>
    );
};

export default Login;