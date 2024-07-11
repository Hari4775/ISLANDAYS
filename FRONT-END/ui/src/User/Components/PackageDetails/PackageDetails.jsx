import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { PackageData } from './path_to_your_data_file'; // Adjust the path accordingly
import { PackageDetail } from '../../../constants/index';
import { camera, info } from '../../../assets/Index';
import './PackageDetails.css'
import { Line } from '../../../assets/Index';


const PackageDetails = () => {
  const [placeImage, setPlaceImages] = useState(null);
  const [selectedDay, setSelectedDay] = useState(1); // State to manage the selected day

  const { id } = useParams();
  console.log(PackageDetail, "datata");
  const packageDetail = PackageDetail.find(pkg => pkg.id === id);
  console.log(packageDetail,"package dertails")

  console.log(placeImage, "images");
  if (!packageDetail) {
    return <div>Package not found</div>;
  }

  const handlePlaceEnter = (image) => {
    setPlaceImages(image);
  };

  const handlePlaceLeave = () => {
    setPlaceImages(null);
  };

  return (
    <div className='package-detail-container'>
      <video autoPlay loop className='background-video h-full'>
        <source src={packageDetail.bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='content mb-20' >
        <div className='content mt-48  mx-auto'>
          <h1 className='heading mb-10 text-3xl md:text-lg'>{packageDetail?.title}</h1>
         
          <img className='w-full h-2 text-black mb-20' src={Line}/>
          
          <div className='flex w-screen  md:w-1/2 mx-auto  mb-5 timeline'>
            {/* <p className='offer-texts text-white  text-green-400'>{packageDetail?.offer} Off</p> */}
            <p className='offer-texts text-xl lg:text-3xl text-bold ml-10'>{packageDetail?.days}</p>
            <p className='offer-texts text-white  lg:text-3xl text-bold ml-auto mr-10'>₹ {packageDetail?.price}</p>
          </div>
          <div className='w-8/12 mx-auto mb-10 '>
                     <p className='text-lg '>{packageDetail.description}</p>
          </div>
          <div className='button w-2/12 mx-auto flex jsus'>Book Package</div>

         
          {/* <h1 className='heading mb-2 mt-14'>Tour Plan</h1> */}
        </div>
      </div>
      <div className='w-10/12 mx-auto mb-32'>
        <h1 className='sub-heading text-left text-blue-700'>ADDITIONAL FEATURES</h1>
        <div className='w-full flex bg-blue-500' >
          <div className='card w-1/5 h-32 rounded-lg bg-green-500 mx-2'>
            <h1>skdjfhjksdfh</h1>
            {/* <img src={camera}/> */}
          </div>
          <div className='card w-1/5 rounded-lg bg-green-500  mx-2'>
            <h1>skdjfhjksdfh</h1>
          </div>
      

          <div className='card w-1/5 rounded-lg bg-green-500  mx-2'>
            <h1>skdjfhjksdfh</h1>
          </div>
          <div className='card w-1/5 rounded-lg bg-green-500  mx-2'>
            <h1>skdjfhjksdfh</h1>
          </div>
        </div>
      </div>
      <div className=' bg-red-400 w-10/12'>
      <h1 className='bg-yellow-500'>sadljkfkhasdkjfh</h1>
      </div>
        {/* <div className='w-11/12 mx-auto content'>
          <div className="container">
            <div className="timeline w-full md:w-3/5 mx-auto flex mb-5 ">
              {packageDetail.plan.map((dayDetail, index) => (
                <div className="timeline-item mb-10 w-1/2 " key={index}>
                  <div
                    className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}` } 
                    onClick={() => setSelectedDay(dayDetail.day)} // Set the selected day on click
                    style={{ cursor: 'pointer' }}
                  >
                    <h2 className='mt-10'>DAY {dayDetail.day}</h2>
                  </div>
                </div>
              ))}
            </div>
            {packageDetail.plan.map((dayDetail, index) => (
              selectedDay === dayDetail.day && (
                <div className="day-details timeline h-full mb-5  w-full md:w-3/5 mx-auto" key={index} style={{ backgroundImage: `url(${placeImage || packageDetail.bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className=' w-1/2 mx-auto'>
                    <h2 className='py-10'>DAY {dayDetail.day} PLAN</h2>
                    <p>FOOD</p>
                    <div>
                    <ul>
                      {dayDetail.food.split(',').map((food, i) => (
                        <li key={i}>{food.trim()}</li>
                      ))}
                    </ul>
                    </div>
                    <p>STAY {dayDetail?.accommodation}</p>
                    <p>PLACES </p>
                    <ul>
                      {dayDetail.placesVistiting.map((place, i) => (
                        <li
                          key={i}
                          onMouseEnter={() => handlePlaceEnter(place.placeImage)}
                          onMouseLeave={handlePlaceLeave}
                        >
                          {place.placeName}
                        </li>
                      ))}
                    </ul>
                    <div className='bg-red-500'>
                    <p>ACTIVITIES</p>
                    <ul>
                      {dayDetail?.activities.map((place, i) => (
                        <li
                          key={i}
                          onMouseEnter={() => handlePlaceEnter(place.activityImage)}
                          onMouseLeave={handlePlaceLeave}
                        >
                          {place?.activityName}
                        </li>
                      ))}
                    </ul>
                    </div>
                  </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div> */}
    </div>



  );
};
export default PackageDetails;
