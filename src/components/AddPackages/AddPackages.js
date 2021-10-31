import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router';

const AddPackages = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data, e) => {
    axios
      .post(`https://grisly-mansion-13947.herokuapp.com/addPackage`, data)
      .then((res) => {
        console.log(res.data);
        history.push('/admin/managePackage');
      });
  };
  return (
    <div>
      <div className='container text-start p-5'>
        <div className='row g-5'>
          <div className=' booking-form bg-warning'>
            <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
              <h3 className='my-5 text-white fw-bolder text-center '>
                Add Package
              </h3>
              <input
                type='text'
                placeholder='Duration'
                {...register('duration')}
              />
              <input
                type='text'
                placeholder='Package Name'
                {...register('packageName')}
              />
              <input
                type='text'
                placeholder='Image Url'
                {...register('image')}
              />

              <textarea
                style={{ width: '100%' }}
                placeholder='Description'
                {...register('description')}
              />

              <input type='submit' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPackages;
