import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import logoImg from '../../../assets/icons/logo.svg'
import { useContext, useState } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const {user, logOut} = useContext(AuthContext)
    console.log(user)

  const handleLogOut = () =>{
    logOut()
  }

  const navLinks = (
    <>
      <li>
        <NavLink className='mx-2 text-[#444444] font-semibold text-lg' to={'/'}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className='mx-2 text-[#444444] font-semibold text-lg'
          to={'/about'}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className='mx-2 text-[#444444] font-semibold text-lg'
          to={'/services'}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className='mx-2 text-[#444444] font-semibold text-lg'
          to={'/blog'}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className='mx-2 text-[#444444] font-semibold text-lg'
          to={'/contact'}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className='mx-2 text-[#444444] font-semibold text-lg'
          to={'/login'}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          className='mx-2 text-[#444444] font-semibold text-lg'
          to={'/signup'}
        >
          Sign Up
        </NavLink>
      </li>
    </>
  )

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost lg:hidden opacity-100'
            onClick={() =>setToggle(!toggle)}
            
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          {
            toggle ? <ul
            className='menu menu-sm  absolute bg-white mt-3 z-50 p-2 shadow  rounded-box w-64 text-center lg:hidden  flex content-center'
          >
            {navLinks}
          </ul>:''
          }
        </div>
        <Link to={'/'} className='btn btn-ghost text-xl'>
          <img src={logoImg} alt='' className='w-full h-full' />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
      </div>
      <div className='navbar-end'>
        <p>{user?.email}</p>
        {user? <button className='btn mx-2' onClick={handleLogOut}>LogOut</button>: <Link to={'login'}>Login</Link>}
        <a className='btn text-[#FF3811] text-lg font-semibold'>Appointment</a>
      </div>
    </div>
  )
}

export default Navbar
