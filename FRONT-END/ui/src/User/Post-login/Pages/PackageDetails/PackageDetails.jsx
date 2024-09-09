import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { PackageData } from './path_to_your_data_file'; // Adjust the path accordingly
import { PackageDetail } from '../../../../constants/index';
import { bookmark, camera, flightimage, info } from '../../../../assets/Index';
import './PackageDetails.css'
import { Line } from '../../../../assets/Index';
import thinnakkara from "../../../../assets/images/thinnakkara.jpg"


const PackageDetails = () => {
  const [placeImage, setPlaceImages] = useState(null);
  const [selectedDay, setSelectedDay] = useState(1); // State to manage the selected day
  const [activeSection, setActiveSection] = useState('itinerary');
  const [planCategoryScetion,setplanCategorySection] =useState('day');

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
  <div className=" w-full mx-auto    main-container bg-slate-400" >
    <div className='main-Heading-container mb-4 w-11/12 mx-auto'>
      <h1 className='main-heading mt-4'>Kavaratti & Agatti Islands of Lakshadweep</h1>
      <div className='flex space-x-4'>
        <div className='custamizable-box flex'>
          <p>Custamizable</p>
        </div>
        <div className='day-box'>
          <p>3N/4D</p>
        </div>
        <p>2N Kavaratti</p>
        <p>3N Agatti</p>
      </div>
    </div>
    <div className='image-gallery-container bg-green-400 flex h-56 w-11/12 mx-auto overflow-auto'>
  <div className='bg-blue-600 w-4/12 mr-2'>
    <img className='h-full w-full' src={thinnakkara} />
  </div>

  <div className='bg-yellow-300 w-4/12 flex'>
    <div className='w-1/2 bg-orange mr-2'>
      <div className='w-full bg-slate-600 h-1/2 mb-2'>
        <img className='h-full w-full' src={thinnakkara} />
      </div>
      <div className='w-full bg-yellow-200 h-1/2'>
        <img className='h-full w-full' src={thinnakkara} />
      </div>
    </div>

    <div className='w-1/2 bg-orange-700'>
      <div className='w-full bg-slate-600 h-1/2 mb-2'>
        <img className='h-full w-full' src={thinnakkara} />
      </div>
      <div className='w-full bg-yellow-200 h-1/2'>
        <img className='h-full w-full' src={thinnakkara} />
      </div>
    </div>
  </div>

  <div className='bg-red-500 w-4/12 ml-2'>
    <img className='h-full w-full' src={thinnakkara} />
  </div>
</div>

    <div className='heading-bar-container w-11/12 mx-auto flex bg-blue-700 my-5 space-x-5'>
        <h1 className='heading' onClick={() => setActiveSection('itinerary')}>ITINERARY</h1>
        <h1 className='heading' onClick={() => setActiveSection('policy')}>POLICY</h1>
        <h1 className='heading' onClick={() => setActiveSection('summary')}>SUMMARY</h1>

    </div>
    {activeSection === 'itinerary' && (
    <div className='iternerary-container second-parent-container'>
      <div className='second-inner-container flex bg-yellow w-11/12 mx-auto pt-5 '>
        <div className='left-inner-container w-9/12 bg-slate-100'> 

            <div className='left-inner-heading-container w-11/12 '>
              <h1 className='innner-heading mt-2 mb-5 text-2xl'>Here’s a list of Activities & Inclusions in this package for you</h1>
              <div className=' inner-dot-ponts w-11/12 mx-auto mb-3'>
                <p>Accommodation & All meals: Breakfast | Lunch | Dinner | Evening Tea or Coffee</p>
                <p>Agatti Island Tour</p>
                <p className='mb-5'>Kalpitty Island - Rocky Island Tour</p>
                <button className='text-blue-500'>View All Inclusions</button>
              </div>
            </div>

            <div className='menu-bar bg-blue-300 flex w-full space-x-20'>
               <p  className='my-5'onClick={() => setplanCategorySection('day')}>6 Day Plan</p>
               <p  className='my-5'onClick={() => setplanCategorySection('travel')}>2 Flights</p>
               <p  className='my-5'onClick={() => setplanCategorySection('accomadation')}>2 Hotels </p>
               <p  className='my-5' onClick={() => setplanCategorySection('activy')}>3Activities</p>
               <p  className='my-5' onClick={() => setplanCategorySection('food')}>18 Meals</p>

            </div>
            <div className='plan-details-container flex w-full'>
              <div className='time-line-container w-3/12 bg-green-600'>
                <h1 className='day-plan-heading mt-5'>Day Plan</h1>
              </div>

            {planCategoryScetion==="day"&&(
              <div className='day-plan-data-container w-9/12 bg-red-500'>
                <div className='each-day-headings flex'>
                  <button className='bg-red-400 rounded-lg w-1/12 my-5 ml-5'>Day 1</button>
                  <p className='ml-5 my-5 '>Arrival at Agatti Airport </p>
                  <p className='ml-4 my-5 '>included:</p>
                  <p className='my-5 ml-2 '>!Flight</p>
                  <p className='my-5 ml-2'>1 hotel</p>
                  <p className='my-5 ml-2'>2 Meals</p>
                </div>
                <div className='place-details-section w-11/12 mx-auto'>
                    <p className='place-description text-xs mb-5'>Upon arrival at Agatti Airport, you'll be escorted to the Eastern Jetty for a speedboat transfer to Kavaratti Island (2-2.5 hours). At the hotel, you'll receive a warm welcome with a refreshing drink, followed by a briefing on the Holiday Home facilities. Spend your evening relaxing on the serene beaches of Kavaratti.
                      Note: The above itinerary is subject to weather conditions and may be adjusted for your convenience & based on Ferry schedules.
                    </p>
                    <div className='flex place-image-container mb-12 '>
                      <div className='w-1/2 rounded-lg bg-blue-500 mx-2 h-32'>sd</div>
                      <div className='w-1/2 rounded-lg bg-orange-400 mx-2'>sd</div>
 
                    </div>

                </div>
                <div className='travel-section'>
                  <div className='travel-heading flex'>
                    <div className='w-8/12 space-x-2 flex ml-5'>
                      <h1 className=''>FLIGHT</h1>
                      <p className=''>New Delhi to Lakshadweep</p>
                      <h1 className=''>07h 15 m</h1>
                    </div>
                    <div className='w-4/12 ml-auto flex'>
                       <p className='text-button'>Remove</p>
                       <p>|</p>
                       <p className='text-button'>Change</p>
                    </div>
                  </div>
                  <div className='travel-data-contaier mb-10'>
                    <div className='flex w-10/12 mx-auto'>
                       <div className='travel-image-section mt-5'>
                          <img className='mb-2' src={flightimage}/>
                          <p className='traveller-name'>6E-2069</p> 
                       </div>
                       <div className='time-container mt-5 ml-5'>
                         <h1 className='time mb-2'>05:45</h1>
                         <p className='date'>Tue, 01 oct</p>
                         <p className='date'>New Delhi</p>
                       </div>    
                      <div className='w-1/12 ml-5'></div> 

                      <div className='time-container mt-5 ml-5'>
                         <h1 className='time mb-2'>08:30</h1>
                         <p className='date'>Tue, 01 oct</p>
                         <p className='date'>New Delhi</p>
                       </div>  

                       <div className='verticle-line'></div>  

                       <div className='ml-auto  mt-5'>
                         <p className='text-xs mb-3'>Cabin :7 Kgs (1 piece only)</p>   
                         <p className='text-xs'>Cabin :7 Kgs (1 piece only)</p>     
                       </div>     
                    </div>
                    
                    <div className='flex w-10/12 mx-auto'>
                       <div className='travel-image-section mt-5'>
                          <img className='mb-2' src={flightimage}/>
                          <p className='traveller-name'>6E-2069</p> 
                       </div>
                       <div className='time-container mt-5 ml-5'>
                         <h1 className='time mb-2'>05:45</h1>
                         <p className='date'>Tue, 01 oct</p>
                         <p className='date'>New Delhi</p>
                       </div>    
                      <div className='w-1/12 ml-5'></div> 

                      <div className='time-container mt-5 ml-5'>
                         <h1 className='time mb-2'>08:30</h1>
                         <p className='date'>Tue, 01 oct</p>
                         <p className='date'>New Delhi</p>
                       </div>  

                       <div className='verticle-line'></div>  

                       <div className='ml-auto  mt-5'>
                         <p className='text-xs mb-3'>Cabin :7 Kgs (1 piece only)</p>   
                         <p className='text-xs'>Cabin :7 Kgs (1 piece only)</p>     
                       </div>     
                    </div>  
                  </div>

                  <div className='accomodation-data-container'>
                    <div className='accomodation-heading flex space-x-4 ml-5'>
                        <h1>RESORT</h1>
                        <h1>2Nights</h1>
                        <h1>In Kavarathy</h1>

                    </div>
                    <div className='accomodation-image-container flex w-8/12'>

                      <div className='w-5/12 bg-green-400'>dd</div>
                      <div className='w-7/12 bg-yellow-400 ml-auto'>
                        <h1 className='resort-name'>Dweep Mahal - Holidays Collections
                        (Or Similar)</h1> 

                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            )}
            {planCategoryScetion==="travel" && (
            <div className='day-plan-data-container w-9/12 bg-red-500'>
              <div className='each-day-headings flex'>
                <button className='bg-red-400 rounded-lg w-1/12 my-5 ml-5'>Day 1</button>
                <p className='ml-5 my-5 '>Arrival at Agatti Airport </p>
                <p className='ml-4 my-5 '>included:</p>
                <p className='my-5 ml-2 '>!Flight</p>
                <p className='my-5 ml-2'>1 hotel</p>
                <p className='my-5 ml-2'>2 Meals</p>
              </div>
              <div className='travel-data-contaier mb-10 w-full bg-green-400'>
                    <div className='flex w-10/12 mx-auto'>
                       <div className='travel-image-section mt-5'>
                          <img className='mb-2' src={flightimage}/>
                          <p className='traveller-name'>6E-2069</p> 
                       </div>
                       <div className='time-container mt-5 ml-5'>
                         <h1 className='time mb-2'>05:45</h1>
                         <p className='date'>Tue, 01 oct</p>
                         <p className='date'>New Delhi</p>
                       </div>    
                      <div className='w-1/12 ml-5'></div> 

                      <div className='time-container mt-5 ml-5'>
                         <h1 className='time mb-2'>08:30</h1>
                         <p className='date'>Tue, 01 oct</p>
                         <p className='date'>New Delhi</p>
                       </div>  

                       <div className='verticle-line'></div>  

                       <div className='ml-auto  mt-5'>
                         <p className='text-xs mb-3'>Cabin :7 Kgs (1 piece only)</p>   
                         <p className='text-xs'>Cabin :7 Kgs (1 piece only)</p>     
                       </div>     
                    </div>

                    <div className='flex w-10/12 mx-auto'>
                       <div className='travel-image-section mt-5'>
                          <img className='mb-2' src={flightimage}/>
                          <p className='traveller-name'>6E-2069</p> 
                       </div>
                       <div className='time-container mt-5 ml-5'>
                         <h1 className='time mb-2'>05:45</h1>
                         <p className='date'>Tue, 01 oct</p>
                         <p className='date'>New Delhi</p>
                       </div>    
                      <div className='w-1/12 ml-5'></div> 

                      <div className='time-container mt-5 ml-5'>
                         <h1 className='time mb-2'>08:30</h1>
                         <p className='date'>Tue, 01 oct</p>
                         <p className='date'>New Delhi</p>
                       </div>  

                       <div className='verticle-line'></div>  

                       <div className='ml-auto  mt-5'>
                         <p className='text-xs mb-3'>Cabin :7 Kgs (1 piece only)</p>   
                         <p className='text-xs'>Cabin :7 Kgs (1 piece only)</p>     
                       </div>     
                    </div>

                    
              </div>   
            </div>       
            )}

               {planCategoryScetion==="accomadation" && (
            <div className='day-plan-data-container w-9/12 bg-red-500'>
              <div className='each-day-headings flex '>
                <button className='bg-red-400 rounded-lg w-1/12 my-5 ml-5'>Day 1</button>
                <p className='ml-5 my-5 '>Arrival at Agatti Airport </p>
                <p className='ml-4 my-5 '>included:</p>
                <p className='my-5 ml-2 '>!Flight</p>
                <p className='my-5 ml-2'>1 hotel</p>
                <p className='my-5 ml-2'>2 Meals</p>
              </div>
              <div className='accomadation-container w-full bg-red-600 '>
                  <div className='accomodation-data-container w-11/12 mx-auto'>
                    <div className='accomodation-heading flex space-x-4 ml-5 py-5'>
                        <h1>RESORT</h1>
                        <h1>2Nights</h1>
                        <h1>In Kavarathy</h1>
                    </div>
                    <div className='accomodation-image-container flex mb-10'>

                      <div className='w-5/12 bg-green-400 h-48'>d</div>
                      <div className='w-7/12 bg-yellow-400 ml-auto'>
                        <h1 className='resort-name font-bold mb-3'>Dweep Mahal - Holidays Collections
                        (Or Similar)</h1> 
                        <p className='mb-2'>*****</p>
                        <p className='mb-2'>Kavarati</p>
                        <div className='flex'>
                           <p>1 October - 3 October, 2 Nights</p>
                        </div> 

                      </div> 
                    </div>
                  </div>
              </div>
            </div>
            )}   

            

            {planCategoryScetion==="activy" && (
            <div className='day-plan-data-container w-9/12 bg-red-500'>
              <div className='each-day-headings flex '>
                <button className='bg-red-400 rounded-lg w-1/12 my-5 ml-5'>Day 1</button>
                <p className='ml-5 my-5 '>Arrival at Agatti Airport </p>
                <p className='ml-4 my-5 '>included:</p>
                <p className='my-5 ml-2 '>!Flight</p>
                <p className='my-5 ml-2'>1 hotel</p>
                <p className='my-5 ml-2'>2 Meals</p>
              </div>
              <div className='activity-container flex mb-10'>
                  <div className='w-5/12 bg-green-400 h-48'>d</div>
                  <div className='w-7/12 bg-yellow-400 ml-auto'>
                    <h1 className='resort-name font-bold mb-3'>Agatti Island DiscoveryTour</h1> 
                    <p className='mb-2 text-xs'>Embark on an enchanting journey with our "Agatti Island Odyssey" a guided tour that unveils the hidden treasures of Agatti. Immerse yourself in the rich history and natural beauty as you explore key landmarks such as the Agatti Museum, Eas Read More...</p>
                    <div className='flex'>
                      <p>Duration 1 Hour</p>
                      <p>Afternoon</p>
                    </div> 
                  </div> 
               </div>
            </div>
            )}   

            {planCategoryScetion==="food" && (
            <div className='day-plan-data-container w-9/12 bg-red-500'>
                <div className='each-day-headings flex '>
                   <button className='bg-red-400 rounded-lg w-1/12 my-5 ml-5'>Day 1</button>
                   <p className='ml-5 my-5 '>Arrival at Agatti Airport </p>
                   <p className='ml-4 my-5 '>included:</p>
                   <p className='my-5 ml-2 '>!Flight</p>
                   <p className='my-5 ml-2'>1 hotel</p>
                   <p className='my-5 ml-2'>2 Meals</p>
                </div>

               <div className='food-container'>
                   <div className='flex ml-10'>
                      <h1>MEAL</h1>
                      <p>Lunch</p>
                      <p>In Kavaratti</p>
                   </div>
               </div>
             </div>
            )}
          </div> 



        </div>
         <div className='left-inner-container bg-orange-500 w-3/12 ml-20 '> 
           <div className='payment-section bg-slate-300'>
                <div className='flex w-11/12 mb-3 mx-auto pt-5'>
                  <h1 className='text-3xl font-extrabold '>₹1,11,998</h1>
                  <p className='text-md'>/Adult</p>
                </div>
                <p className='text-md mb-3 ml-3'>Excluding applicable taxes</p>
                <div className='pb-5 '>
                   <div className='w-10/12 mx-auto bg-blue-500 rounded-lg  '>
                    <p className='text-center'>PROCEED TO PAYMENT</p>
                  </div>
                </div>
           </div>
         </div>

      </div>
     sdf
    </div>
    )}
     {activeSection === 'policy' && (
    <div className='policy-container bg-red-400'>
      <div className=' w-11/12 mx-auto flex pt-5'>
        <div className='w-9/12 bg-slate-500 '>
         <div className='policies-data mb-2   bg-slate-300'>
          <div className='ml-10'>
           <h1 className='policy-Heading lg:text-2xl text-lg mb-2 mt-5'>Cancellation & Date Change</h1>
            <p className='policy-description mb-7'>Cancellation not possible after booking</p>
           
           <h1 className='policy-Heading  lg:text-2xl text-lg mb-2'>Package Cancellation Policy</h1>
           <p className='policy-description mb-7'>Cancellation not possible after booking</p>
           
           <h1 className='policy-Heading  lg:text-2xl text-lg mb-2'>Package Date Change Policy</h1>
           <p className='policy-description mb-7'>Cancellation not possible after booking</p>
          </div>
         </div>
         <div className='terms-and-conditions bg-slate-300'>
           <h1 className='policy-Heading lg:text-2xl text-lg mb-5 mt-5 ml-10'>Terms and Conditions</h1>
           <div className='important-info-container'>
              <h3 className='terms-sub-heading text-md mb-3'>Important Information</h3>
              <div className='flex mb-5 w-11/12 mx-auto'>
                <p className='text-md ml-3'>We recommend booking your Lakshadweep trip at least 30 days in advance, as it involves necessary paperwork and documentation to obtain permits for your visit. Required documents include the original hard copy of the Police Verification Certificate (PCC) from your local police station, a color copy of your Aadhar card/Passport, and three passport-size photos or scanned copies. All these documents must be submitted at least 20 days prior to your departure date.</p>
              </div>
              <div className='flex mb-5 w-11/12 mx-auto'>
                <p className='text-md ml-3'>We recommend booking your Lakshadweep trip at least 30 days in advance, as it involves necessary paperwork and documentation to obtain permits for your visit. Required documents include the original hard copy of the Police Verification Certificate (PCC) from your local police station, a color copy of your Aadhar card/Passport, and three passport-size photos or scanned copies. All these documents must be submitted at least 20 days prior to your departure date.</p>
              </div>
            </div>
            <div className='inclusion-container'>
              <h3 className='terms-sub-heading text-md mb-3'>Exclusions</h3>
              <div className='flex mb-5 w-11/12 mx-auto'>
                <p className='text-md ml-3'>We recommend booking your Lakshadweep trip at least.</p>
              </div>
              <div className='flex mb-5 w-11/12 mx-auto'>
                <p className='text-md ml-3'>We recommend booking your Lakshadweep trip at least.</p>
              </div>
              <div className='flex mb-5 w-11/12 mx-auto'>
                <p className='text-md ml-3'>We recommend booking your Lakshadweep trip at least.</p>
              </div>
            </div>
            <div className='inclusion-container'>
              <h3 className='terms-sub-heading text-md mb-3'>Terms and Conditions</h3>
              <div className='flex mb-5 w-11/12 mx-auto'>
                <p className='text-md ml-3'>We recommend booking your Lakshadweep trip at least.</p>
              </div>
              <div className='flex mb-5 w-11/12 mx-auto'>
                <p className='text-md ml-3'>We recommend booking your Lakshadweep trip at least.</p>
              </div>
              <div className='flex mb-5 w-11/12 mx-auto'>
                <p className='text-md ml-3'>We recommend booking your Lakshadweep trip at least.</p>
              </div>
            </div>
          


         </div>

           
        
        </div>
        <div className='w-3/12 bg-orange-500 ml-20'>sdfj</div>
        
      </div>

    </div>
    )}
    {activeSection === 'summary' && (    
      <div className='summery bg-green-600'>
        <div className='bg-green-500 w-11/12 mx-auto flex pt-5'>
        <div className='w-9/12 bg-slate-500 '>
           <p className='text-sm'> Arrival in Lakshadweep by IndiGo Flight 6E-2069, 6E-7271 | Departing on 01 Oct, 05:45 AM | Arriving on 01 Oct, 01:00 PM | Includes Check In Baggage</p>
           <div className='w-11/12  flex bg-red-500'>
             <div className='w-2/12  '>
                <h1 className='font-bold mt-4 ml-10'>Day 1</h1>
                <p className='ml-10'>Oct 1, Tue</p>
             </div>
             <div className='w-10/12 bg-yellow-50'>
               
             </div>
           </div>
        </div>
        <div className='w-3/12 bg-slate-500  flex'>
        
        </div>
      
      </div>
    </div>
    )}
      
      {/* <div className='w-5/12  fixed left-4 top-32 lg:top-24  image-container  '>
        <div className='w-11/12 mx-auto bg-green-500 my-5 h-96'
            style={{ 
              backgroundImage: `url(${placeImage || packageDetail.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
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
        
  </div> */}
</div>  
 



  );
};
export default PackageDetails;
