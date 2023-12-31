


import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Hoks/Provider/AuthProvider";


const NavBar = () => {

  const {user,  logOut} = useContext(AuthContext);

  const handelSignOut = ()=>{
    logOut()
    .then(result=>{
      console.log(result.user)
    })

    .catch(error=>{
      console.log(error)
    })

  }


//  * This Is NabBar Section

    const navLinks = <>
    <li><NavLink to='/'>HOME</NavLink></li>
    <li><NavLink to='/services'>SERVICES</NavLink></li>
    <li><NavLink to='/login'>LOGIN</NavLink></li>
    <li><NavLink to='/register'>REGISTER</NavLink></li>
    <li><NavLink to='/contact'> CONTACT US</NavLink></li>


    </>
    return (
        <div className="navbar bg-[#E9B824]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
        
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"> Community and Cultural Events Ltd.</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">

    {
      user ?
      <button onClick={handelSignOut} className="btn">Sign Out</button>
      :
      <Link to='/login'>
       <button className="btn">Login</button>
     </Link>

    }

   
    
  </div>
</div>
    );
};

export default NavBar;