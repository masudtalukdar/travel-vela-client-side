import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EditPackage = ({ pack, setReload }) => {
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .patch(`http://localhost:5000/update/${pack._id}`, data)
      .then((res) => {
        console.log(res.data);
        setReload(res.data);
        setEdit(false);
      });
  };
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/delete/${pack._id}`).then((res) => {
      console.log(res.data);
      setReload(res.data);
      setEdit(false);
    });
  };

  return (
    <div class='col'>
      {edit ? (
        <form
          className='mt-5 bg-warning p-2 booking-form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              defaultValue={pack.duration}
              type='text'
              placeholder='Duration'
              {...register('duration')}
            />
            <input
              defaultValue={pack.packageName}
              type='text'
              placeholder='Package Name'
              {...register('packageName')}
            />
          </div>
          <div>
            <input
              defaultValue={pack.image}
              type='text'
              placeholder='Image Url'
              {...register('image')}
            />
            <textarea
              defaultValue={pack.description}
              style={{ width: '100%' }}
              placeholder='Description'
              {...register('description')}
            />
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            {' '}
            <button className='save btn btn-success' type='submit'>
              Save{' '}
            </button>
            <button onClick={handleDelete} className='btn btn-danger'>
              Delete
            </button>
          </div>
        </form>
      ) : (
        <div class='card h-100'>
          <img src={pack.image} class='card-img-top' alt='...' />
          <div class='card-body'>
            <h5 class='card-title'>{pack.packageName}</h5>
            <p class='card-text'>{pack.description}</p>
            <span>{pack.duration} </span>
          </div>
          <div class='card-footer'>
            <button onClick={() => setEdit(true)} className='btn btn-danger'>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPackage;
