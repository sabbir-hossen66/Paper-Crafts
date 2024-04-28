import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";



const Login = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // location
  const location = useLocation()
  const navigate = useNavigate()


  // use context
  const { signIn } = useContext(AuthContext)

  const [emailErr, emailSetErr] = useState('')
  const [PasswordErr, PasswordSetErr] = useState('')


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



  return (
    <div className="py-10">
      <div className="text-center py-4">
        <h1 className="text-5xl font-bold text-center"> Please Login!</h1>
      </div>
      <div className="w-[700px] mx-auto text-center shadow-2xl bg-base-100">
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

            <button className="relative px-8 py-2 ml-4 overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Login</button>

            {
              error ? <p className="text-red-500">{error}</p> :
                success && <p className="text-2xl text-green-500">{success}</p>
            }

          </div>
        </form>
        <p className="text-xs text-center sm:px-6 pb-6">Dont have an account?
          <Link to={'/register'} rel="noopener noreferrer" href="#" className="underline text-indigo-600-500 font-bold ml-1">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;