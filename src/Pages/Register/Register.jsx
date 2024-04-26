


const Register = () => {
  return (


    <div className="py-10">
      <div className="text-center py-4">
        <h1 className="text-5xl font-bold text-center">Sign UP now!</h1>
      </div>
      <div className="w-[700px] mx-auto text-center shadow-2xl bg-base-100">
        <form className="card-body">

          <div className="form-control">
            <label className="label">
              <span className="lebel-text">Name</span>
            </label>
            <input type="name" id="name" name="name" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="lebel-text">Email</span>
            </label>
            <input type="email" id="email" name="email" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="lebel-text">PhotoURL</span>
            </label>
            <input type="photoURl" id="photoUrl" name="photoURL" placeholder="email" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" id="password" placeholder="password" name="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="relative px-8 py-2 ml-4 overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;