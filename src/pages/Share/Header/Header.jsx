import { Link } from 'react-router-dom';
import logo from '../../../../public/assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
 

const Header = () => {
  const {logOut,user} = useContext(AuthContext)

   const logOuthandler = () => {
        logOut()
        .then(() => {
            
        })
        .catch(error=> console.log(error))
   }

        const navitem = <>
          <li><Link to = '/'>Home</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Servies</Link></li>
          <li><Link>Blog</Link></li>
          <li><Link>Contact</Link></li>
          {
            user?<li><Link to = '/booking'>My Booking</Link></li>: ''
          }
          
           
        </>
        return (
                <div>
                       <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {navitem}
      </ul>
    </div>
    <Link to='/' className=" mt-2 normal-case text-xl">
        <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navitem}
    </ul>
  </div>
  <div className="navbar-end">

    { user ? <button onClick={logOuthandler} className="btn btn-warning mr-3">
    <Link to = '/login'>Log Out</Link>
  </button> :
  <button className="btn btn-warning mr-3">
    <Link to = '/login'>Login</Link>
  </button>}

  <button className="btn btn-outline btn-warning">Appointment</button>
  </div>
</div>
                </div>
        );
};

export default Header;