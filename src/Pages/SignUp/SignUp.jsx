import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";

const SignUp = () => {
    const{createUser}=useContext(AuthContext)
    const handleSignUp=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const user={email,password,name}
        console.log(user)
        createUser(email,password)
        .then(result => {
             console.log(result.user)
        })
        .catch(error => console.log(error))

    }
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row p-16">
          <div className="w-1/2 ">
           
            <img src="https://i.ibb.co/W6NCBMF/mechanic-working-engine.jpg" className="lg:w-1/2" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl  border border-orange-400">
            <form  onSubmit={handleSignUp}className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Enter your name" name='name' className="input input-bordered " required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" name='email' className="input input-bordered " required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Conform Password</span>
                </label>
                <input type="password" placeholder="Your password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="bg-orange-400 btn" value='Sign up'/>
              </div>
              <p>Do you have any account?<Link to='/login' className="text-orange-400">login</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;