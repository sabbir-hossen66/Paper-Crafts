import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";


const Login = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [googleUser, setGoogleUser] = useState(null)
  const [githubSignUser, setGithubSignUser] = useState(null)
  console.log(googleUser, githubSignUser);

  // location
  const location = useLocation()
  const navigate = useNavigate()


  // use context
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)

  const [emailErr, emailSetErr] = useState('')
  const [PasswordErr, PasswordSetErr] = useState('')


  // google provider and github provider
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const handleSignIn = (e) => {


    e.preventDefault();

    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')


    signIn(email, password)
      .then(result => {
        const response = result.user;
        setSuccess(response)
        navigate(location?.state ? location.state : "/")
        Swal.fire({
          title: 'Success!',
          text: 'Thank you for sign Up',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      })
      .catch(error => {
        const errorMessege = error.messege;

        setError(errorMessege)
      })


    // error handle

    if (!email) {
      emailSetErr('please write your email')
      return;
    }
    emailSetErr('')

    if (password.length < 6) {
      PasswordSetErr('Create atleast 6 digit password')
      return;
    }

    else if (!/[A-Z]/.test(password)) {
      PasswordSetErr('Atleast one letter should be Uppercase')
      return
    }

    else if (!/[a-z]/.test(password)) {
      PasswordSetErr('Atleast one letter should e Lowercase')
      return;
    }
    PasswordSetErr('')
  }


  // social account
  const handleGoogleSign = () => {
    // e.preventDefault();
    googleSignIn(provider)
      .then(result => {
        const googleUser = result.user;
        setGoogleUser(googleUser);
        navigate(location?.state ? location.state : "/")
        Swal.fire({
          title: 'Successfully Google Login!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })

      })
      .catch(error => {
        const googleError = error.message;
        setGoogleUser(googleError);
      })
  }

  const handleGithub = () => {
    githubSignIn(githubProvider)
      .then(result => {
        const githubUser = result.user;
        console.log(githubUser);
        setGithubSignUser(githubUser);
        navigate(location?.state ? location.state : "/")
        Swal.fire({
          title: 'Successfully GitHub Login!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      })
      .catch(error => {
        const githubError = error.message;
        setGithubSignUser(githubError);
      })

  }


  return (
    <div className="py-10">
      <div className="text-center py-4">
        <h1 className="text-5xl font-bold text-center"> Please Login!</h1>
      </div>
      <div className=" lg:w-[700px] mx-auto text-center shadow-2xl bg-base-100">
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="lebel-text">Email</span>
            </label>
            <input type="email" id="email" name="email" placeholder="email" className="input input-bordered" />
            <p className=' text-red-500'>{emailErr}</p>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" id="password" placeholder="password" name="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            <p className='text-red-500'>{PasswordErr}</p>
          </div>
          <div className="form-control mt-6">

            <button className="relative px-8 py-2 ml-4 overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mb-5">Login</button>

            {/* social login and github */}
            <div className="flex justify-center   space-x-4 ">
              <div className="flex justify-center bg-pink-300 rounded-md px-3 items-center">
                <div>
                  <button onClick={handleGoogleSign} aria-label="Log in with Google" className="p-3 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                      <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <p className="text-2xl text-white">Google</p>
                </div>
              </div>

              <div className="flex justify-center items-center bg-pink-300 rounded-md px-3">
                <div>
                  <button onClick={handleGithub} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                      <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <p className="text-2xl text-white">Github</p>
                </div>
              </div>
            </div>

            {
              error ? <p className="text-red-500">{error}</p> :
                success && <p className="text-2xl text-green-500">{success}</p>
            }

          </div>
        </form>
        <p className="text-xs text-center sm:px-6 pb-6">Dont have an account?
          <Link to={'/register'} rel="noopener noreferrer" href="#" className="underline text-sm text-indigo-600 font-bold ml-1">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;