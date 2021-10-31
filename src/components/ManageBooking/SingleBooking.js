import axios from 'axios';
import React, { useState } from 'react';

const SingleBooking = ({ booking, setReload }) => {
  const [status, setStatus] = useState(booking.status);
  const handleChange = (event) => {
    setStatus(event.target.value);
    const value = { status: event.target.value };
    console.log(value);
    axios
      .patch(
        `https://grisly-mansion-13947.herokuapp.com/updateBooking/${booking._id}`,
        value
      )
      .then((res) => {
        console.log(res.data);
        setReload(res.data);
      });
  };

  return (
    <div>
      <div className='single-info text-start'>
        <div className='d-flex justify-content-between'>
          <h5>Name: {booking.name}</h5>
          <h5>Contact-Mail: {booking.email}</h5>
        </div>
        <div className='d-flex justify-content-between'>
          <h5>Phone Number: {booking.phone}</h5>
          <h5>Person: {booking.numberOfPerson}</h5>
        </div>
        <div className='d-flex justify-content-between text-start'>
          <h5>Booking Date: {booking.date}</h5>
          <h6>
            Status:{' '}
            <select value={status} onChange={handleChange}>
              <option value='pending'>pending</option>
              <option value='on tour'>On Tour</option>
              <option value='finished'>finished</option>
            </select>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SingleBooking;
