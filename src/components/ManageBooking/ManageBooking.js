import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleBooking from './SingleBooking';

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [reload, setReload] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/bookings')
      .then((res) => setBookings(res.data));
  }, [reload]);

  console.log(bookings);
  return (
    <div>
      <h1> Manage Bookings</h1>
      <div className=' container package-container'>
        <div className='single_package'>
          <div class='row row-cols-1 row-cols-md-12 g-4'>
            {bookings.map((booking) => (
              <SingleBooking
                setReload={setReload}
                key={booking._id}
                booking={booking}
              ></SingleBooking>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBooking;
