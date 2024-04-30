import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Header = () => {

  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //     easing: 'ease-in-out',
  //     offset: 100,
  //     once: true
  //   });
  // }, []);

  const { user, logOut, } = useContext(AuthContext)


  const handleLogOut = () => {
    logOut()
      .then()
      .catch()
  }


  // set theme
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])

  const handleToggle = (e) => {

    e.preventDefault()

    if (e.target.checked) {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
    else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }



  const navLinks = <>
    <li className="head-section font-semibold"><NavLink to={'/'}>Home</NavLink></li>
    <li className="head-section font-semibold"><NavLink to={'/all-item'}>All  Items</NavLink></li>
    <li className="head-section font-semibold"><NavLink to={'/add-item'}>Add Item</NavLink></li>
    <li className="head-section font-semibold"><NavLink to={'/my-list'}>My Item List</NavLink></li>

  </>

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown hamburger">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <div>
            <img className="w-[30px] lg:w-[80px] bg-none" src="https://i.ibb.co/9HXq8LK/logho-removebg-preview.png" alt="" />
          </div>
          <div>
            <a className="text-base lg:text-3xl font-semibold">Paper & Glass_Craft</a>
          </div>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">

          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {/* theme set */}
        <div className="lg:mr-8">
          <label onChange={handleToggle} className="cursor-pointer grid place-items-center">
            <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label>
        </div>
        {

          user ?

            <div className="flex justify-center items-center">

              {/* dropdwon */}

              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className=" btn btn-ghost btn-circle avatar ">
                  <div className="w-10 rounded-full hover:relative">
                    <img alt="Tailwind CSS Navbar component" src='' />
                  </div>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] mb-2 menu p-2 shadow bg-indigo-400 font-semibold rounded-box w-40 text-white">
                  <li>Name- {user.displayName}</li>
                  <Link to={'/another-upProfile'}><li className="underline">See UpdatedProfile</li></Link>
                </ul>
              </div>

              <div>
                <button onClick={handleLogOut} type="button" className="relative px-8 py-2 ml-4 overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">LogOut
                </button>
              </div>

            </div>
            :
            <div>
              <Link to='/login'>
                <button type="button" className="relative px-8 py-2 ml-4 overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Login

                </button>
              </Link>
            </div>

        }
      </div>
    </div>
  );
};

export default Header;