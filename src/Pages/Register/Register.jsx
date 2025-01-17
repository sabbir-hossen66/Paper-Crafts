import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const Register = () => {

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  console.log(setSuccess);
  // use context
  const { createUser } = useContext(AuthContext)
  // location
  const location = useLocation()
  const navigate = useNavigate()


  const [nameErr, nameSetErr] = useState('')
  const [urlErr, urlSetErr] = useState('')
  const [emailErr, emailSetErr] = useState('')
  const [PasswordErr, PasswordSetErr] = useState('')


  const handleSignUP = (e) => {


    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const photo = form.get('photo URL')
    const password = form.get('password')


    createUser(email, password)
      .then(result => {
        const response = result.user;
        // setSuccess(response)
        console.log(response);
        // user start
        const createdAt = result.user?.metadata?.creationTime
        const user = { email, createdAt: createdAt }
        fetch(`https://b9a10-server-side-sabbir-hossen66.vercel.app/user`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: 'Success!',
                text: 'Thank you for sign Up',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
          })
        // setSuccess(response)

        // navigate
        navigate(location?.state ? location.state : "/")
        // Swal.fire({
        //   title: 'Success!',
        //   text: 'Thank you for sign Up',
        //   icon: 'success',
        //   confirmButtonText: 'Cool'
        // })
      })
      .catch(error => {
        const errorMessege = error.messege;

        setError(errorMessege)
      })


    // error handle
    if (!name) {
      nameSetErr('Please fullfill your name')
      return;
    }
    nameSetErr('')

    if (!photo == 'text') {
      urlSetErr('Please give us an url')
      return;
    }
    urlSetErr('')
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
    <>
      <Helmet>
        <title>Paper_craft || Register</title>
      </Helmet>
      <div className="py-10">
        <div className="text-center py-4">
          <h1 className="text-5xl font-bold text-center">Sign UP now!</h1>
        </div>
        <div className="w-[700px] mx-auto text-center shadow-2xl bg-base-100">
          <form onSubmit={handleSignUP} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="lebel-text">Name</span>
              </label>
              <input type="name" id="name" name="name" placeholder="email" className="input input-bordered" />
              <p className=' text-red-500'>{nameErr}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="lebel-text">Email</span>
              </label>
              <input type="email" id="email" name="email" placeholder="email" className="input input-bordered" />
              <p className=' text-red-500'>{emailErr}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="lebel-text">PhotoURL</span>
              </label>
              <input type="photoURl" id="photoUrl" name="photoURL" placeholder="photo URL" className="input input-bordered" />
              <p className=' text-red-500'>{urlErr}</p>
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

              <button className="relative px-8 py-2 ml-4 overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Sign Up</button>
              {
                error ? <p className="text-red-500">{error}</p> :
                  success && <p className="text-2xl text-green-500">{success}</p>
              }

            </div>
          </form>
        </div>

      </div>
    </>
  );
};

export default Register;