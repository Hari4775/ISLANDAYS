import React from 'react';
import { useParams } from 'react-router-dom';
// import { PackageData } from './path_to_your_data_file'; // Adjust the path accordingly
import { PackageDetail } from '../../../constants/index';
import { info } from '../../../assets/Index';
import './PackageDetails.css'
const PackageDetails = () => {
  const { id } = useParams();
  console.log(PackageDetail,"datata")
  const packageDetail = PackageDetail.find(pkg => pkg.id === id);

  if (!packageDetail) {
    return <div>Package not found</div>;
  }

  return (
    <div className='package-detail-container'>
    <video autoPlay loop  className='background-video'>
      <source src={packageDetail.bgvideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className='content mt-40'>
    <h1 className='swipe-heading mb-2'>{packageDetail?.title}</h1>
    <div className='flex  w-3/12 mx-auto mb-5'>
        <p className='offer-texts text-white ml-5 text-xl  bg-green-700'>{packageDetail?.offer} Off</p>
        <p className='offer-texts text-white   ml-auto text-xl text-bold'>₹ {packageDetail?.price}</p>

        {/* <p className='offer-texts text-white ml-10' >{packageDetail?.offer}</p> */}
    </div>
    <p className='swipe-heading mb-10'>{packageDetail?.days}</p>
    <p className='m'>{packageDetail.description}</p>
      {/* <p className='video-overlay'>{packageDetail.description}</p> */}
      <div className='info-section bg-red-500'>
        <p>sdfkjhgsdf</p>
        <div className='flex items-center mb-4'>
          <img src={info} alt="Information Icon" className='mr-2' />
          <div className='w-8/12 mx-auto'>
          <p className='swipe-heading'>Information</p>
          </div>
        </div>
        <p>Offer: {packageDetail.offer}</p>
      </div>
    </div>
  </div>

  );
};

export default PackageDetails;
