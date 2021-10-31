import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import UseFirebase from '../../hooks/useFirebase';
import { useHistory, useParams } from 'react-router';

const Booking = () => {
  const [currentPackage, setCurrentPackage] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    axios
      .get(`https://grisly-mansion-13947.herokuapp.com/package/${params.id}`)
      .then((res) => setCurrentPackage(res.data));
  }, []);
  console.log(currentPackage);
  const { register, handleSubmit } = useForm();
  const { user } = UseFirebase();
  const history = useHistory();
  const onSubmit = (data) => {
    const newData = {
      ...data,
      status: 'Pending',
      user: user.email,
      package: currentPackage,
    };
    axios
      .post(`https://grisly-mansion-13947.herokuapp.com/addBooking`, newData)
      .then((res) => {
        history.push('/bookings');
        console.log(res.data);
      });
  };

  return (
    <div>
      <div className='container text-start p-5'>
        <div className='row g-5'>
          <div class='col-sm-6'>
            <div class='card'>
              <span> {currentPackage.duration}</span>
              <h4>{currentPackage.packageName}</h4>
              <img src={currentPackage.image} class='card-img-top' alt='...' />
              <div class='card-body'>
                <p class='card-text'>{currentPackage.description}</p>
              </div>
            </div>
          </div>
          <div className='col-sm-4 booking-form bg-warning'>
            <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
              <h3 className='my-5 text-white fw-bolder '>Tour Booking</h3>
              <input type='text' placeholder='Name' {...register('name')} />
              <input type='email' placeholder='Email' {...register('email')} />
              <input
                type='phone'
                placeholder='Contact No.'
                {...register('phone')}
              />
              <input
                type='number'
                placeholder='Number of Person'
                {...register('numberOfPerson')}
              />
              <input type='date' {...register('date')} />

              <input type='submit' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
