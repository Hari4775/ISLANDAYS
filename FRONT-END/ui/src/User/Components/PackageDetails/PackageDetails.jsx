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
<div className='package-detail-container  '>
    <video autoPlay loop  className='background-video'>
      <source src={packageDetail.bgvideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className='content mt-40 w-11/12 mx-auto '>
       <h1 className='heading mb-2'>{packageDetail?.title}</h1>
      <div className='flex w-10/12 md:w-6/12 mx-auto mb-5'>
          <p className='offer-texts text-white ml-5 text-xl  text-green-400 ml-10'>{packageDetail?.offer} Off</p>
          <p className=' offer-texts ml-10macbook'>{packageDetail?.days}</p>
          <p className='offer-texts text-white   text-xl text-bold ml-10'>₹ {packageDetail?.price}</p>
      </div>
      <div className='w-11/12 mx-auto'>
          <p className='m'>{packageDetail.description}</p>
      </div>
     
    </div>

    <div className='w-full  content  '>

    <div className="container">
      <div className="timeline flex">
      <h1 className='swipe-heading'>Package Plan</h1>
        {packageDetail.plan.map((dayDetail, index) => (
          <div className="timeline-item mb-10" key={index}>
          
            <div className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`} >
                
              <h2>Day {dayDetail.day}</h2>
              <p>Food</p>
              <ul>
                {dayDetail.food.split(',').map((food, i) => (
                <li key={i}>{food.trim()}</li>
                 ))}
              </ul>

              <p>Accommodation: {dayDetail.accommodation}</p>

              <p>Places Visiting: </p>
              <ul>
                {dayDetail.placesVistiting.split(',').map((place, i) => (
                <li key={i}>{place.trim()}</li>
                 ))}
              </ul>

              <p>Activities</p>
              <ul>
              {dayDetail.activities.split(',').map((place, i) => (
               <li key={i}>{place.trim()}</li>
               ))}
             </ul>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='w-4/5 ml-auto'>
    <p className='text-white  booking-form'>sdjkfhsjkhd</p>

    </div>
    <p className='text-white'>sdjkfhsjkhd</p>
    </div>
  </div>

  );
};

export default PackageDetails;
