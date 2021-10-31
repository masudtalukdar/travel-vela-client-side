import React from 'react';

const Gallery = () => {
  return (
    <div className='container mt-5 px-5 mb-5 ' id='gallery'>
      <h6 className='text-danger'>Top Gallery</h6>
      <h3>Best Tourist'S Shared Photo</h3>
      <div className='row'>
        <div className='col-4'>
          <div className='row mb-3'>
            <img
              className='img-fluid'
              src='https://i.ibb.co/YQjkbH9/1-1.jpg'
              alt=''
            />
          </div>
          <div className='row'>
            <img src='https://i.ibb.co/X3TNfPN/6.jpg' alt='' />
          </div>
        </div>
        <div className='col-4 '>
          <div className='row mb-3'>
            <img
              className='img-fluid'
              src={'https://i.ibb.co/3zkc0F6/2.jpg'}
              alt=''
            />
          </div>
          <div className='row mb-3'>
            <img src={'https://i.ibb.co/6HbvzkQ/4.jpg'} alt='' />
          </div>
          <div className='row'>
            <img src={'https://i.ibb.co/N3GHN7y/7.jpg'} alt='' />
          </div>
        </div>
        <div className='col-4'>
          <div className='row mb-3'>
            <img src={'https://i.ibb.co/W5bJP4S/3.jpg'} alt='' />
          </div>
          <div className='row'>
            <img src={'https://i.ibb.co/kmGPKp9/5.jpg'} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

// https://i.ibb.co/YQjkbH9/1-1.jpg
// https://i.ibb.co/kmGPKp9/5.jpg
// https://i.ibb.co/N3GHN7y/7.jpg
// https://i.ibb.co/6HbvzkQ/4.jpg
// https://i.ibb.co/X3TNfPN/6.jpg
// https://i.ibb.co/W5bJP4S/3.jpg
// https://i.ibb.co/3zkc0F6/2.jpg
