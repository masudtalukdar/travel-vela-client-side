import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const TopDeals = () => {
  return (
    <div>
      <h6 className='text-danger mt-3'>Popular Destinations</h6>
      <h3>
        Travel Most Popular Place <br /> In The World
      </h3>
      <div className='container d-flex mt-5 col-sm-12'>
        <div className='single-deal mb-5'>
          <img
            className='mb-2'
            style={{ width: '80%' }}
            src={'https://i.ibb.co/n7y4PLr/1.jpg'}
            alt=''
          />
          <div className='gallery '>
            <figcaption>
              <h5>
                <FontAwesomeIcon
                  style={{ color: 'orangered' }}
                  icon={faMapMarkerAlt}
                />
                Türkistan, Kazakistan
              </h5>
              <p>$300</p>
              <div class='tour-rating'>
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
              </div>
            </figcaption>
          </div>
        </div>

        <div className='single-deal mb-5'>
          <img
            className='mb-2'
            style={{ width: '80%' }}
            src={'https://i.ibb.co/QQSQWx9/2.jpg'}
            alt=''
          />
          <div className='gallery'>
            <figcaption>
              <h5>
                <FontAwesomeIcon
                  style={{ color: 'orangered' }}
                  icon={faMapMarkerAlt}
                />
                TokyO, japan
              </h5>
              <p>$350</p>
              <div class='tour-rating'>
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
              </div>
            </figcaption>
          </div>
        </div>

        <div className='single-deal mb-5'>
          <img
            className='mb-2'
            style={{ width: '80%' }}
            src={'https://i.ibb.co/TgRrftm/3.jpg'}
            alt=''
          />
          <div className='gallery'>
            <figcaption>
              <h5>
                <FontAwesomeIcon
                  style={{ color: 'orangered' }}
                  icon={faMapMarkerAlt}
                />
                Semporna, Malaysia
              </h5>
              <p>$300</p>
              <div class='tour-rating'>
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDeals;
