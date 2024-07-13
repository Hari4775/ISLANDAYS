import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { PackageData } from './path_to_your_data_file'; // Adjust the path accordingly
import { PackageDetail } from '../../../../constants/index';
import { bookmark, camera, info } from '../../../../assets/Index';
import './PackageDetails.css'
import { Line } from '../../../../assets/Index';


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
  <div className=" mt-20  w-full h-screen   flex">
      
      <div className='w-5/12  fixed left-4 top-32 lg:top-24  image-container  '>
        <div className='w-11/12 mx-auto bg-green-500 my-5 h-96'
            style={{ 
              backgroundImage: `url(${placeImage || packageDetail.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
        {/* <img className='w-full h-96' src=
        {packageDetail?.image || packageDetail.bgimage}/> */}
        </div>
        <div className='w-11/12 mx-auto'>
        <button class="bg-green-700 w-full  hover:bg-green-900 text-white font-bold py-3 px-4  rounded-lg ">
 Book Now
</button>
        </div>
     </div>
      <div className='w-7/12  description-container ml-auto'>
       <h1 className='package-name my-10 ml-12'>{packageDetail?.title}</h1>  
       <p className='special-price ml-12'>Special Price</p>
       <div className='flex ml-12'>
         <h1 className='package-price mb-5 mr-3 package-name'>₹{packageDetail?.price} </h1>
         <p className='real-price mr-3 mt-3'>1189</p>
         <p className='offer-persentage mt-3'>{packageDetail?.offer}</p>
       </div>
       <div className='duration flex mb-5 ml-12'>
          <h1 className='duration-text mr-5'>Tour Duration</h1>
          <h1 className='duration-value'>{packageDetail?.days}</h1>
        </div>
       <ul className='mb-5 ml-12'>
        {packageDetail?.specification.split(',').map((spec, i) => (
                        <div className='flex mb-2'>
                          <img className='w-5 mr-1' src={bookmark}/>
                          <li className='' key={i}>{spec.trim()}</li>
                        </div>
                        
                      ))}
        </ul>
      
        <div className='duration ml-12'>
          <h1 className='package-description'>{packageDetail?.description}  </h1>
        </div>
      
      
      

          <h1 className='package-name text-center my-10'>OUR TRIP PLAN</h1>
            <div className="timeline w-full md:w-3/5 mx-auto flex mb-5 ">
           
            {packageDetail.plan.map((dayDetail, index) => (
        <div className="timeline-item  w-full bg-sky-50" key={index}>
          <div
            className={`timeline-content flex justify-center mb-10 items-center ${index % 2 === 0 ? 'left' : 'right'}`}
            onClick={() => setSelectedDay(dayDetail.day)} // Set the selected day on click
            style={{ cursor: 'pointer' }} // Adjust height as needed
          >
            <h2
              className={`mt-10 text-center ${selectedDay === dayDetail.day ? 'text-blue-600 font-bold underline' : 'text-gray-500'}`}
              style={selectedDay === dayDetail.day ? { textDecorationThickness: '3px', fontSize: '1.5rem' } : { fontSize: '1rem' }}
            >
              DAY {dayDetail.day}
            </h2>
          </div>
        </div>
      ))}
            </div>

            {packageDetail.plan.map((dayDetail, index) => (
              selectedDay === dayDetail.day && (
                <div className="day-details timeline bg-sky-50     w-10/12  mx-auto" key={index} >
                  <div className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <h2 className='py-10 text-center text-blue-600 font-bold text-3xl underline'>DAY {dayDetail.day} COMPLETE PLAN</h2>
                    <div className=' w-11/12  mx-auto '>
                    
                  <div className='accomodation-container  mb-10 '>
                   
                    <div className=' mx-4'>
                    <p className='duration-text pt-3'>ACCOMODATION</p>
                    </div>

                    <div className='w-full flex overflow-x-hidden ' >
                      {dayDetail.placesVistiting.map((place, i) => (
                        <div className='w-1/3 h-32 mx-2 small-image mt-4 mb-8  relative'  style={{ backgroundImage: `url(${place?.placeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                          key={i}
                          onMouseEnter={() => handlePlaceEnter(place?.placeImage)}
                          onMouseLeave={handlePlaceLeave}
                          >
                              <div className='absolute bottom-0 w-full bg-opacity-50 bg-black'>
        <h1 className='text-center text-white'> {place.placeName}</h1>
      </div>
                         
                        </div>
                      ))}
                    </div>

                  </div>
                   
                   
                    <div className='accomodation-container  mb-10'>
                      <div className=' mx-4'>
                      <p className='duration-text mt-5'>PLACES VISITING </p>
                      </div>
                  
                      <div className='w-full flex overflow-x-hidden' >
                      {dayDetail.placesVistiting.map((place, i) => (
                        <div className='w-1/3 h-32 mx-2 small-image my-4 relative'  style={{ backgroundImage: `url(${place?.placeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                          key={i}
                          onMouseEnter={() => handlePlaceEnter(place?.placeImage)}
                          onMouseLeave={handlePlaceLeave}
                          >
                         <div className='absolute bottom-0 w-full bg-opacity-50 bg-black'>
        <h1 className='text-center text-white'> {place.placeName}</h1>
      </div>
                        </div>
                      ))}
                      </div>
            
                    </div>

                    

                    <div className='accomodation-container mb-32'>
                     <div className=' mx-4'>
                      <p  className='duration-text'>ACTIVITY PLAN</p>
                     </div>
                    
                     <div className='w-full flex overflow-x-hidden' >
                      {dayDetail?.activities.map((place, i) => (
                       <div className='w-1/3 h-32 mx-2 small-image my-4 relative'  style={{ backgroundImage: `url(${place?.activityImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                          key={i}
                          onMouseEnter={() => handlePlaceEnter(place.activityImage)}
                          onMouseLeave={handlePlaceLeave}
                        >
                          <div className='absolute bottom-0 w-full bg-opacity-50 bg-black'>
                          <h1 className='text-center text-white'> 
                          {place?.activityName}</h1>
                          </div>
                      </div>
                      ))}
                    </div>
                  </div>
                 </div>
                  </div>
                </div>
              )
            ))}
        
  </div>
</div>  
 



  );
};
export default PackageDetails;
