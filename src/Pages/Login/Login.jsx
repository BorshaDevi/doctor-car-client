import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";

const Login = () => {
  const {signIn}=useContext(AuthContext)
  const location=useLocation()
  const navigate =useNavigate()
  

    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const user={email,password}
        
        signIn(email,password)
        .then(result => {
              navigate(location?.state?location?.state: '/')
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen  ">
  <div className="hero-content flex-col lg:flex-row p-16">
    <div className="w-1/2 ">
     
      <img src="https://i.ibb.co/W6NCBMF/mechanic-working-engine.jpg" className="lg:w-1/2" alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-md shadow-2xl  border border-orange-400">
      <form  onSubmit={handleSubmit}className="card-body">
      <h1 className="text-5xl font-bold text-center">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="bg-orange-400 btn" value='Login'/>
        </div>
        <div className="ml-16">
          <div className=" border p-3 w-3/4  "><FcGoogle className="ml-24 "  /></div>
          <div className=" border p-3 mt-2 w-3/4">
          <FaGithub className="ml-24 "  />
          </div>
          </div>
        <p>New doctors account?<Link to='/signUp' className="text-orange-400">Sign up</Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;