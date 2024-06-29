import React from 'react';
import { useParams } from 'react-router-dom';
// import { PackageData } from './path_to_your_data_file'; // Adjust the path accordingly
import { PackageData } from '../../../constants/index'

const PackageDetails = () => {
  const { id } = useParams();
  console.log(PackageData,"datata")
  const packageDetail = PackageData.find(pkg => pkg.id === id);

  if (!packageDetail) {
    return <div>Package not found</div>;
  }

  return (
    <div className='w-screen bg-red-400'>
    <div className=''>
    
      <img src={packageDetail.image} className='w-screen' alt={packageDetail.title} />
      <p>{packageDetail.description}</p>
      <p>Offer: {packageDetail.offer}</p>
      {/* Add more details as needed */}
      </div>
    </div>

  );
};

export default PackageDetails;
