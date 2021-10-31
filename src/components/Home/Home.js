import axios from 'axios';
import { React, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
const Home = () => {
  const [packages, setPackages] = useState();

  useEffect(() => {
    axios
      .get('https://grisly-mansion-13947.herokuapp.com/allPackages')
      .then((res) => setPackages(res.data));
  }, []);
  console.log(packages);
  return (
    <>
      <div>
        <Banner></Banner>
        <div className='section'>
          <h3 className='fw-bolder p-5'>
            The Best of Our All <br />
            Tour Packages
          </h3>
          <hr />
          <div className=' container package-container'>
            <div className='single_package'>
              <div class='row row-cols-1 row-cols-md-3 g-4'>
                {packages?.map((pack) => (
                  <div key={pack._id} class='col'>
                    <div class='card h-100'>
                      <img src={pack.image} class='card-img-top' alt='...' />
                      <div class='card-body'>
                        <h5 class='card-title'>{pack.packageName}</h5>
                        <p class='card-text'>{pack.description}</p>
                        <span>{pack.duration} </span>
                      </div>
                      <div class='card-footer'>
                        <Link to={`/package-booking/${pack._id}`}>
                          <button className='btn btn-danger'>Book Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
<h1>this is home</h1>;
