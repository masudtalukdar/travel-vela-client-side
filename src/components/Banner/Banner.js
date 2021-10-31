import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import img1 from '../../Images/Banner/img1.jpg';
import img2 from '../../Images/Banner/img2.jpg';
import img3 from '../../Images/Banner/img3.jpg';

const Banner = () => {
  return (
    <div className='banner-container'>
      <Carousel fade variant='white'>
        <Carousel.Item>
          <img className='d-block w-100' src={img1} alt='First slide' />
          <Carousel.Caption>
            <h5>
              Welcome To our Hotel <br />
              and Resort{' '}
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img2} alt='Second slide' />
          <Carousel.Caption>
            <h5>
              It's Perfect Time <br />
              to Travel
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img3} alt='Third slide' />
          <Carousel.Caption>
            <h5>
              Discover your Beautiful <br /> Place With us
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
