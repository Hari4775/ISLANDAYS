import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { PackageData } from './path_to_your_data_file'; // Adjust the path accordingly
import { PackageDetail } from '../../../constants/index';
import { info } from '../../../assets/Index';
import './PackageDetails.css'
const PackageDetails = () => {
  const [plceimage,setPlaceImages]=useState()
  
  const { id } = useParams();
  console.log(PackageDetail,"datata")
  const packageDetail = PackageDetail.find(pkg => pkg.id === id);


  console.log(plceimage,"images")
  if (!packageDetail) {
    return <div>Package not found</div>;
  }

  const handlePlaceClick = (image) => {
    setPlaceImages(image);
  };

  return (
<div className='package-detail-container  '>
    <video autoPlay loop  className='background-video'>
      <source src={packageDetail.bgvideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  <div className='content '  style={{ backgroundImage: `url(${plceimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

 
    <div className='content mt-40 w-11/12 mx-auto  '>
       <h1 className='heading mb-2  text-2xl md:text-lg'>{packageDetail?.title}</h1>
      <div className='flex w-full md:w-6/12 mx-auto mb-5'>
          <p className='offer-texts text-white  text-xl  text-green-400 '>{packageDetail?.offer} Off</p>
          <p className=' offer-texts ml-10'>{packageDetail?.days}</p>
          <p className='offer-texts text-white   text-xl text-bold ml-10'>₹ {packageDetail?.price}</p>
      </div>
      <div className='w-11/12 mx-auto'>
          <p className='m'>{packageDetail.description}</p>
      </div>
      
      <h1 className='heading mb-2 mt-14'>Tour Plan</h1>
     
    </div>


    <div className='w-11/12 mx-auto  content   0'
     >

    <div className="container">
      <div className="timeline w-full md:w-3/5 mx-auto flex">
     
        {packageDetail.plan.map((dayDetail, index) => (
          <div className="timeline-item mb-10 w-1/2 bg" key={index}>
          
            <div className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`} >
                
              <h2 className='mt-10'>DAY {dayDetail.day}</h2>
              <p>FOOD</p>
              <ul>
                {dayDetail.food.split(',').map((food, i) => (
                <li key={i}>{food.trim()}</li>
                 ))}
              </ul>

              <p>STAY {dayDetail?.accommodation}</p>

              <p>PLACES </p>
              {/* <ul>
                {dayDetail?.placesVistiting.split(',').map((place, i) => (
                <li key={i} onClick={() => handlePlaceClick(place.placeImage)}>
                  {place.trim()}</li>
                 ))}
              </ul> */}
              <ul>
                    {dayDetail.placesVistiting.map((place, i) => (
                      <li key={i} onClick={() => handlePlaceClick(place.placeImage)}>
                        {place.placeName}
                      </li>
                    ))}
                  </ul>

              <p>ACTIVITIES</p>
              <ul>
              {dayDetail?.activities.map((place, i) => (
               <li key={i} onClick={() => handlePlaceClick(place.activityImage)}>
                {place?.activityName}</li>
               ))}
             </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
    </div>
  </div>

  );
};

export default PackageDetails;
