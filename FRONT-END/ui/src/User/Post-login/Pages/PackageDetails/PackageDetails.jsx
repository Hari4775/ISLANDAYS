import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { PackageData } from './path_to_your_data_file'; // Adjust the path accordingly
import { PackageDetail } from '../../../../constants/index';
import { bookmark, camera, flightimage, info } from '../../../../assets/Index';
import './PackageDetails.css'
import { Line } from '../../../../assets/Index';
import thinnakkara from "../../../../assets/images/thinnakkara.jpg"
import { ticIcon } from '../../../../assets/icons/IconIndex';


const PackageDetails = () => {
  const [placeImage, setPlaceImages] = useState(null);
  const [selectedDay, setSelectedDay] = useState(1); 
  const [activeSection, setActiveSection] = useState('trip_Plan');
  const [planCategorySection,setplanCategorySection] =useState('day');
  const [packageDetailsData, setPackageDetailsData] =useState([])
  const [dayPlan,setDayPlan] =useState([])
  const { id } = useParams();

 

 const activeSectionUnderLines =(section) =>{
  return activeSection ===section
   ? 'border-b-4 border-white font-bold text-red-500'  : 'border-b-2 border-transparent text-white';
 }

 const planCategoryUnderLines =(section) =>{
  return planCategorySection===section
   ? 'border-b-4 border-white font-bold text-red-500'  : 'border-b-2 border-transparent text-white';
 }
 
 console.log(packageDetailsData, "dayplan");

  useEffect(() => {
    const selectedPackage = PackageDetail.find((pkg) => pkg.id === id);
    if (selectedPackage) {
      setPackageDetailsData(selectedPackage);
    }
     else {
      console.log("Package not found");
    }
  }, [id]); 
  
useEffect(()=>{
 if(packageDetailsData?.trip_Plan?.plan){
  setDayPlan(packageDetailsData?.trip_Plan?.plan)
 }
 else{
  console.log("no data plan")
 }
},[packageDetailsData])


const calkulateTotals =()=>{
  let totalDays = dayPlan.length;
  let totalActivities = 0;
  let totalFlights = 0;
  let totalFood = 0;
  let totalAccommodations = 0;

  dayPlan.forEach(day => {
    // Count activities
    if (Array.isArray(day.activity)) {
      totalActivities += day.activity.length;
    } else if (day.activity) {
      totalActivities += 1;
    }

    // Count flights
    if (Array.isArray(day.travel)) {
      totalFlights += day.travel.filter(t => t.mode === 'Flight').length;
    } else if (day?.travel?.mode === 'Flight') {
      totalFlights += 1;
    }

    // Count food
    if (day?.food) {
      totalFood += day.food.length;
    }

    // Count accommodations
    if (day?.accommodation) {
      totalAccommodations += 1;
    }
  });

  return {
    totalDays,
    totalActivities,
    totalFlights,
    totalFood,
    totalAccommodations
  };
};




const totals =calkulateTotals ()
  return (
  <div className=" w-full mx-auto    main-container " >
    <div className='main-Heading-container mb-4 w-11/12 mx-auto pt-10'>
      <h1 className='main-heading text-4xl'>{packageDetailsData?.title}</h1>
      <div className='flex space-x-4 '>
        <div className='custamizable-box flex'>
          <p className='sub-heading text-md'>Custamizable</p>
        </div>
        <p className='sub-heading text-md'>{packageDetailsData?.subtitle}</p>
      </div>
    </div>
    <div className='image-gallery-container  flex h-56 w-11/12 mx-auto overflow-x-scroll'>
 
  <div className=' w-4/12 mr-2'>
    <img className='h-full w-full' src={thinnakkara} />
  </div>

  <div className=' w-4/12 flex'>
    <div className='w-1/2 bg-orange mr-2'>
      <div className='w-full h-1/2 mb-2'>
        <img className='h-full w-full' src={thinnakkara} />
      </div>
      <div className='w-full  h-1/2'>
        <img className='h-full w-full' src={thinnakkara} />
      </div>
    </div>

    <div className='w-1/2 '>
      <div className='w-full  h-1/2 mb-2'>
        <img className='h-full w-full' src={thinnakkara} />
      </div>
      <div className='w-full  h-1/2'>
        <img className='h-full w-full' src={thinnakkara} />
      </div>
    </div>
  </div>
  

  <div className='w-4/12 ml-2'>
    <img className='h-full w-full' src={thinnakkara} />
  </div>
</div>

    <div className='heading-bar-container w-11/12 mx-auto flex my-5 space-x-5'>
        <h1 className={`heading ${activeSectionUnderLines('trip_Plan')} transition-all duration-300 ease-in-out`} onClick={() => setActiveSection('trip_Plan')}>TRIP PLAN</h1>
        <h1 className={`heading ${activeSectionUnderLines('policy')} transition-all duration-300 ease-in-out`} onClick={() => setActiveSection('policy')}>POLICY</h1>
        <h1 className={`heading ${activeSectionUnderLines('summary')} transition-all duration-300 ease-in-out`} onClick={() => setActiveSection('summary')}>SUMMARY</h1>

    </div>
    <div className='iternerary-container second-parent-container'>
      <div className='second-inner-container flex bg-yellow w-11/12 mx-auto pt-5 '>
      <div className='left-inner-container w-9/12 '> 

         {activeSection === 'trip_Plan' && (
                 // <div className='left-inner-container w-9/12 bg-slate-100'> 
            <div className='left-inner-heading-container w-full '>
                  <h1 className='heading mt-2 mb-2'>Here’s a list of Activities & Inclusions in this package for you</h1>
                  <div className=' inner-dot-ponts  mb-12'>
                    {packageDetailsData?.trip_Plan?.points.map((items,index)=>(

                     <div key={index}  className='flex justify-items-center'>
                          <img className='mr-1 w-5 h-5 my-auto' src={ticIcon}/>
                          <p className='sub-heading text-sm '>{items}</p>
                      </div>
                       ))}
                  </div>
               

                <div className='menu-bar  flex w-full space-x-12 bg-red-400'>
                      <p  className={`heading  text-lg my-5 ml-20 ${planCategoryUnderLines('day')} transition-all duration-300 ease-in-out`}onClick={() => setplanCategorySection('day')}>{totals.totalDays} Days Plan</p>
                      <p  className={`heading  text-lg my-5  ${planCategoryUnderLines('travel')} transition-all duration-300 ease-in-out`} onClick={() => setplanCategorySection('travel')}>{totals.totalFlights} Flights</p>
                      <p  className={`heading  text-lg my-5  ${planCategoryUnderLines('accomadation')} transition-all duration-300 ease-in-out`} onClick={() => setplanCategorySection('accomadation')}> {totals.totalAccommodations} Hotels </p>
                      <p  className={`heading  text-lg my-5  ${planCategoryUnderLines('activity')} transition-all duration-300 ease-in-out`}   onClick={() => setplanCategorySection('activity')}> {totals.totalActivities} Activitys</p>
                      <p  className={`heading  text-lg my-5  ${planCategoryUnderLines('food')} transition-all duration-300 ease-in-out`}  onClick={() => setplanCategorySection('food')}>{totals.totalFood} Meals</p>
                </div>

                {/* plan-detail-container start */}
                <div className='plan-details-container flex w-full   '>
                   <div className='time-line-container w-3/12 '>
                       <h1 className='day-plan-heading mt-5'>Day Plan</h1>
                    </div>

                     {planCategorySection==="day"&&(            
                    <div className='day-plan-data-container w-9/12 '>
                      {/* common-heading-section */}
                      {dayPlan.map((planItem,index)=>(

                      <div key={index}>
                     
                        <div className='each-day-headings flex'>
                            <button className='bg-red-400 rounded-lg w-1/12 my-5 ml-5'>Day {planItem?.day}</button>
                            <p className='ml-5 my-5 sub-heading'>{planItem?.day_Heading} </p>
                            <p className='ml-4 my-5 sub-heading'>included:</p>
                            <p className='my-5 ml-3 sub-heading'>{planItem?.travel?.length} Flight</p>
                            <p className='my-5 ml-3 sub-heading'>{planItem?.accommodation?.length} Hotel</p>
                            <p className='my-5 ml-3 sub-heading'>{planItem?.activity?.length} Activitys</p>
                            <p className='my-5 ml-3 sub-heading'>{planItem?.food?.length} meals</p>
                         </div>

                         {/* package description section */}
                        <div className='place-details-section  mx-auto'>
                            <p className=' text-xs mb-5 sub-heading'>{planItem?.description}</p>
                            

                       
                            <div className='flex place-image-container mb-12 h-48 overflow-x-hidden'>
                            {planItem?.images?.map((item,index)=>(
                                <div key={index} className='w-1/2 rounded-lg bg-blue-500 mx-2 '>
                                 <img src={item}/>
                                </div>
                             ))}
                                {/* <div className='w-1/2 rounded-lg bg-orange-400 mx-2'>sd</div> */}
                            </div>
                        </div>

                            {/* travel section */}
                        <div className='travel-section'>
                        {planItem?.travel?.map((travelItem,travelIndex)=>(

                         
                        <div key={travelIndex} className=''>
                          <div className='travel-heading flex'>
                              <div className='w-8/12 space-x-2 flex ml-5'>
                                  <h1 className='sub-heading'>{travelItem?.mode}</h1>
                                  <p className='sub-heading'>{travelItem?.from}</p>
                                  <p className='sub-heading'>{travelItem?.to}</p>
                                  <h1 className='sub-heading'>{travelItem?.duration}</h1>
                              </div>
                              <div className='w-4/12 ml-auto flex'>
                                  <p className='text-button'>Remove</p>
                                  <p>|</p>
                                  <p className='text-button'>Change</p>
                              </div>
                          </div>
                          {Array.isArray(travelItem?.flight) && travelItem.flight.map((flightItem, flightIndex) => (
                          <div key={flightIndex} className='travel-data-contaier mb-10'>

                            <div className='flex w-10/12 mx-auto'>
                                <div className='travel-image-section mt-5'>
                                    <img className='mb-2' src={flightimage}/>
                                    <p className='traveller-name'>{flightItem?.number}</p> 
                                </div>
                                <div className='travel-time-container mt-5 ml-5'>
                                    <h1 className='time mb-2'>{flightItem?.start_time}</h1>
                                    <p className='date'>{flightItem?.start_date}</p>
                                    <p className='date'>{flightItem?.from}</p>
                                </div>   
                                <div className='w-1/12 ml-5'></div> 
                                <div className='travel-time-container mt-5 ml-5'>
                                   <h1 className='time mb-2'>{flightItem?.reach_timee}</h1>
                                   <p className='date'>{flightItem?.reach_date}</p>
                                   <p className='date'>{flightItem?.to}</p>
                                </div>  
                                <div className='verticle-line'></div>  

                                <div className='ml-auto travel-cabin-container mt-5'>
                                    <p className='text-xs mb-3'>{flightItem?.weight}</p>   
                                </div>     
                            </div>

                          </div>
                          ))}
                          
                       
                        </div>
                        ))}

                        </div>


                          {/* accomadation section */}
                          {Array.isArray(planItem.accommodation) && planItem.accommodation.map((accomadationItem,accomadationIndex) => (  
                        <div key={accomadationIndex} className='accomodation-image-container flex mb-10'>
                              <div className='w-6/12 '>
                                <img className='h-56 w-full' src={accomadationItem?.hotel_image}/>
                              </div>
                              <div className='w-6/12  ml-auto'>
                                   <h1 className=' sub-heading ml-10 font-bold mb-3'>{accomadationItem?.hotel_name}</h1> 
                                   <p className='mb-2  sub-heading ml-10'>{accomadationItem?.stars}</p>
                                   <p className='mb-2 sub-heading ml-10'>{accomadationItem?.location}</p>
                                   <div className='flex'>
                                       <p className=' sub-heading ml-10'>{accomadationItem?.booking_date}</p>
                                   </div> 
                               </div> 
                         </div>

                        ))}

                        {/* activity section */}
                        {Array.isArray(planItem.activity) && planItem.activity.map((activityItem,activityIndex)=>(

                        <div key={activityIndex} >
                               <div className='activity-container flex mb-10'>
                                       <div className='w-5/12 bg-green-400 h-48'>
                                        <img src={activityItem?.images}/>
                                       </div>
                                       <div className='w-7/12  ml-auto'>
                                            <h1 className='resort-name font-bold mb-3'>{activityItem?.name}</h1> 
                                             <p className='mb-2 text-xs'>{activityItem?.description}</p>
                                             <div className='flex'>
                                                  <p>Duration 1 Hour</p>
                                                  <p>Afternoon</p>
                                             </div> 
                                       </div> 
                                 </div>
                         </div>
                        ))}




                      </div>
                      ))}
                    </div>         
                     )}

            
                     {planCategorySection === "travel" && (
                         <div className='day-plan-data-container w-9/12'>
                            {dayPlan.map((planItem, index) => (
                                 <div key={index}>
                                      <div className='each-day-headings flex'>
                                           <button className='bg-red-400 rounded-lg w-1/12 my-5 ml-5'> Day {planItem?.day}
                                           </button>
                                           <p className='ml-5 my-5'>{planItem?.day_Heading}</p>
                                           <p className='ml-4 my-5'>Included:</p>
                                           <p className='my-5 ml-2'>{planItem?.travel?.length} Flight</p>
                                           <p className='my-5 ml-2'>{planItem?.accommodation?.length} Hotel</p>
                                           <p className='my-5 ml-2'>{planItem?.food?.length} Meals</p>
                                       </div>

                                       {/* Travel section */}
                                        {planItem?.travel?.map((travelItem, travelIndex) => (
                                        <div key={travelIndex} className='travel-data-contaier my-10 w-full'>
                                          <div className='travel-heading flex'>
                                              <div className='w-8/12 space-x-2 flex ml-5'>
                                                   <h1 className='sub-heading'>{travelItem?.mode}</h1>
                                                   <p className='sub-heading'>{travelItem?.from}</p>
                                                   <p className='sub-heading'>{travelItem?.to}</p>
                                                   <h1 className='sub-heading'>{travelItem?.duration}</h1>
                                               </div>
                                               <div className='w-4/12 ml-auto flex'>
                                                    <p className='text-button'>Remove</p>
                                                    <p>|</p>
                                                    <p className='text-button'>Change</p>
                                               </div>
                                           </div>

                                              {travelItem.flight.map((flightItem, flightIndex) => (
                                               <div className='flex w-10/12 mx-auto'>
                                                    <div className='travel-image-section mt-5'>
                                                        <img className='mb-2' src={flightimage} />
                                                        <p className='traveller-name'>{flightItem?.number}</p>
                                                     </div>
                                                    <div className='time-container mt-5 ml-5'>
                                                         <h1 className='time mb-2'>{flightItem?.start_time}</h1>
                                                         <p className='date'>{flightItem?.start_date}</p>
                                                         <p className='date'>{flightItem?.from}</p>
                                                     </div>
                                                     <div className='w-1/12 ml-5'></div> 
                                                     <div className='time-container mt-5 ml-5'>
                                                           <h1 className='time mb-2'>{flightItem?.reach_time}</h1>
                                                           <p className='date'>{flightItem?.reach_date}</p>
                                                           <p className='date'>{flightItem?.to}</p>
                                                     </div>
                                                     <div className='verticle-line'></div>  
                                                     
                                                     <div className='ml-auto travel-cabin-container mt-5'>
                                                        <p className='text-xs mb-3'>{flightItem?.weight}</p>   
                                                     </div>   
                                               </div>
                                              ))}
                                         </div>
                                        ))}
                                   </div>
                               ))}
                         </div>
                         )}


                     {planCategorySection==="accomadation" && (
                      <div className='day-plan-data-container w-9/12 '>
                      {dayPlan.map((planItem, index) => (
                      <div key={index}>
                            <div className='each-day-headings flex'>
                                 <button className='bg-red-400 rounded-lg w-1/12 my-5 ml-5'> Day {planItem?.day}</button>
                                    <p className='ml-5 my-5'>{planItem?.day_Heading}</p>
                                    <p className='ml-4 my-5'>Included:</p>
                                    <p className='my-5 ml-2'>{planItem?.travel?.length} Flight</p>
                                    <p className='my-5 ml-2'>{planItem?.accommodation?.length} Hotel</p>
                                    <p className='my-5 ml-2'>{planItem?.food?.length} Meals</p>
                              </div>
                             {planItem?.accommodation.map((accommodationItem, accommodationIndex)=>(

                             
                             <div key={accommodationIndex} className='accomadation-container w-full  '>
                                  <div className='accomodation-data-container w-11/12 mx-auto'>
                                       <div className='accomodation-heading flex space-x-4 ml-5 py-5'>
                                            <h1>{accommodationItem?.hotel_name}</h1>
                                            <h1>{accommodationItem?.duration}</h1>
                                            <h1>{accommodationItem?.location}</h1>
                                       </div>
                                      <div className='accomodation-image-container flex mb-10'>
                                           <div className='w-5/12  h-48'>
                                             <img className='w-full h-48' src={accommodationItem?.hotel_image}/>
                                           </div>
                                           <div className='w-7/12  ml-auto'>
                                               <h1 className='resort-name font-bold mb-3'>{accommodationItem?.hotel_name}</h1> 
                                               <p className='mb-2'>{accommodationItem?.rating}</p>
                                               <p className='mb-2'>{accommodationItem?.location}</p>
                                               <div className='flex'>
                                                   <p>{accommodationItem?.booking_date}</p>
                                               </div> 
                                           </div> 
                                       </div>
                                   </div>
                               </div>

                            ))}
                        </div>
                      ))}
                       </div>
                     )}   

                     {planCategorySection==="activity" && (
                         <div className='day-plan-data-container w-9/12 '>
                          {dayPlan.map((planItem, index) => (
                            <div key={index}>
                               <div className='each-day-headings flex'>
                                 <button className='bg-red-400 rounded-lg w-1/12 my-5 ml-5'> Day {planItem?.day}</button>
                                    <p className='ml-5 my-5'>{planItem?.day_Heading}</p>
                                    <p className='ml-4 my-5'>Included:</p>
                                    <p className='my-5 ml-2'>{planItem?.travel?.length} Flight</p>
                                    <p className='my-5 ml-2'>{planItem?.accommodation?.length} Hotel</p>
                                    <p className='my-5 ml-2'>{planItem?.food?.length} Meals</p>
                                </div>

                                {planItem?.activity.map((activityItem,activityIndex)=>(
                                  <div key={activityIndex} className='activity-container flex mb-10'>
                                    <div className='w-5/12 bg-green-400 h-48'>

                                      <img src={activityItem?.imges}/>
                                    </div>
                                    <div className='w-7/12  ml-auto'>
                                         <h1 className='resort-name font-bold mb-3'>{activityItem?.name}</h1> 
                                         <p className='mb-2 text-xs'>{activityItem?.description}</p>
                                         <div className='flex'>
                                              <p>{activityItem?.duration}</p>
                                              <p>{activityItem?.time}</p>
                                          </div> 
                                     </div> 
                                </div>

                                ))}
                                
                          </div>
                          ))}
                           </div>
                      )}   

                      {planCategorySection==="food" && (
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
                {/* plan detail container end */}



           </div>
        )}

             {activeSection === 'policy' && (
    
        <div className='w-full '>
         <div className='policies-data mb-2  '>
          <div className='ml-10'>
           <h1 className='policy-Heading lg:text-2xl text-lg mb-2 mt-5'>Cancellation & Date Change</h1>
            <p className='policy-description mb-7'>Cancellation not possible after booking</p>
           
           <h1 className='policy-Heading  lg:text-2xl text-lg mb-2'>Package Cancellation Policy</h1>
           <p className='policy-description mb-7'>Cancellation not possible after booking</p>
           
           <h1 className='policy-Heading  lg:text-2xl text-lg mb-2'>Package Date Change Policy</h1>
           <p className='policy-description mb-7'>Cancellation not possible after booking</p>
          </div>
         </div>
         <div className='terms-and-conditions '>
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

             )}

             {activeSection === 'summary' && (    
        <div className='w-full bg-slate-500 '>
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
             )}
      </div>
    
      <div className='left-inner-container w-3/12 ml-10 '> 
    <div className='payment-section bg-slate-400 shadow-lg rounded-lg shadow-blue-400'>
        <div className='flex w-11/12 mb-3 mx-auto pt-5'>
            <h1 className='text-5xl font-extrabold '>₹1,11,998</h1>
            <p className='text-md'>/Adult</p>
        </div>
        <p className='text-md mb-3 ml-3'>Excluding applicable taxes</p>
        <div className='pb-5 '>
            <div className='w-10/12 mx-auto bg-blue-500 rounded-lg'>
                <p className='text-center'>PROCEED TO PAYMENT</p>
            </div>
        </div>
    </div>
 </div>

    </div>
     </div>
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
