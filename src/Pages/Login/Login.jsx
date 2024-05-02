

const Login = () => {
    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const user={email,password}
        console.log(user)
    }
    return (
        <div className="hero min-h-screen ">
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
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;