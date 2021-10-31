import React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import AddPackages from '../AddPackages/AddPackages';
import ManageBooking from '../ManageBooking/ManageBooking';
import ManagePackage from '../ManagePackage/ManagePackage';

const Admin = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div
          style={{ height: '100vh' }}
          className='col-md-4 bg-danger d-flex flex-column text-start p-0'
        >
          <NavLink
            activeClassName='active'
            className='text-decoration-none text-white p-3 '
            style={{ fontSize: '20px' }}
            to='/admin/addPackage'
          >
            Add Package
          </NavLink>
          <NavLink
            activeClassName='active'
            className='text-decoration-none text-white p-3 '
            style={{ fontSize: '20px' }}
            to='/admin/managePackage'
          >
            Manage Package
          </NavLink>
          <NavLink
            activeClassName='active'
            className='text-decoration-none text-white p-3 '
            style={{ fontSize: '20px' }}
            to='/admin/ManageBooking'
          >
            Manage Booking
          </NavLink>
        </div>
        <div
          style={{ height: '100vh', overflowX: 'scroll' }}
          className='col-md-8 p-0'
        >
          <Switch>
            <Route exact path='/admin/'>
              <h2 className='text-danger fw-bolder' style={{ marginTop: 300 }}>
                Welcome To Admin Dashboard
              </h2>
            </Route>
            <Route path='/admin/addPackage'>
              <AddPackages></AddPackages>
            </Route>
            <Route path='/admin/managePackage'>
              <ManagePackage></ManagePackage>
            </Route>
            <Route path='/admin/ManageBooking'>
              <ManageBooking></ManageBooking>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default Admin;
