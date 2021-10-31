import React from 'react';
import { Link } from 'react-router-dom';
import UseFirebase from '../../hooks/useFirebase';
import './NavMenu.css';
import logo from '../../Images/logo/logo.png';

const NavMenu = () => {
  const { user, LogOut } = UseFirebase();
  console.log(user);
  return (
    <>
      <div>
        <nav className='navbar navbar-expand-lg  navbar-dark bg-dark'>
          <div className='container-fluid wrap'>
            <img className='logo' src={logo} alt='' />
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavAltMarkup'
              aria-controls='navbarNavAltMarkup'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              class='collapse navbar-collapse nav-items'
              id='navbarNavAltMarkup'
            >
              <div className='navbar-nav'>
                <Link to='/'>HOME</Link>
                <Link to='/bookings'>BOOKINGS</Link>
                <Link to='/topDeals'>TOP DEALS</Link>
                <Link to='/gallery'>GALLERY</Link>
                <Link to='/admin'>ADMIN</Link>
                <Link to='/contactUs'>CONTACT US</Link>

                {user.email ? (
                  <button onClick={LogOut} className='btn btn-danger mx-2'>
                    Logout
                  </button>
                ) : (
                  <Link to='/login'>Login</Link>
                )}
                {user.email && (
                  <p style={{ color: 'white' }}>Welcome, {user.displayName}</p>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavMenu;
