import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import EditPackage from './EditPackage';

const ManagePackage = () => {
  const [packages, setPackages] = useState([]);
  const [reload, setReload] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/allPackages')
      .then((res) => setPackages(res.data));
  }, [reload]);
  console.log(packages);
  return (
    <div>
      <h1> Manage Package</h1>
      <div className=' container package-container'>
        <div className='single_package'>
          <div class='row row-cols-1 row-cols-md-3 g-4'>
            {packages?.map((pack, i) => (
              <EditPackage
                key={pack._id}
                setReload={setReload}
                pack={pack}
              ></EditPackage>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePackage;
