import axios from 'axios';
import { React, useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import UseFirebase from '../../hooks/useFirebase';
import './AllBooking.css';

const AllBooking = () => {
  const [bookings, setBooking] = useState([]);
  const [remove, setRemove] = useState(false);

  const { user } = useAuth();
  console.log(user.email);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/userBookings/${user.email}`)
      .then((res) => setBooking(res.data));
  }, [remove]);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/deleteBookings/${id}`;
    axios.delete(url).then((res) => {
      setRemove(!remove);
      console.log(res.data);
    });
  };

  return (
    <div className='container'>
      <h1>Manage Services</h1>
      {bookings.map((booking) => (
        <div
          key={booking._id}
          className='d-flex justify-content-between single-info'
        >
          <div>
            <img style={{ height: 150 }} src={booking.package.image} alt='' />
            <h4 className='mt-3'>{booking.package.packageName}</h4>
          </div>

          <div className=' text-start'>
            <div className='d-flex justify-content-between'>
              <h3>Name: {booking.name}</h3>
              <h3 className='ms-3'>Mail: {booking.email}</h3>
            </div>

            <div className='d-flex justify-content-between'>
              <h3>Phone Number: {booking.phone}</h3>
              <h3>Person: {booking.numberOfPerson}</h3>
            </div>
            <div className='d-flex justify-content-between'>
              <h3>Booking Date: {booking.date}</h3>
              <h3>
                Status: <span className='text-success'> {booking.status}</span>
              </h3>
            </div>
            <button
              className='btn btn-danger'
              onClick={() => handleDelete(booking._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBooking;
