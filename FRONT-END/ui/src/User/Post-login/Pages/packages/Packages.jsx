import React from 'react'
import Header from '../../../../Common/Header/Header'
import './Packages.css'
import { PackageData } from '../../../../constants'

const Packages = () => {
  return (
    <>
    
    <div className='   pt-32 bg-red-500 '>
      <div className='w-1/2 mx-auto'>
         <h1  className='tour-packages-text mb-3 '>
           CHOOSE YOUR TOUR PACKAGE</h1>
         <p className='text-white  mb-5 '>Get Bali Tour Packages Prices at affordable rates. Our company Bali Krisna Tour provide the best facilities for Bali Tour passengers. Enjoy fun travel services from Bali Krisna Tour.</p>
     </div>
      <div className=' w-10/12 mx-auto flex mb-20'>

      {PackageData.map((pkg) => (
            <div key={pkg.id} className="relative overflow-hidden w-1/3 h-72 bg-white border mx-5">
              <div className="absolute right-0 top-0 h-72 w-32">
                <div className="absolute transform rotate-45 bg-green-600 text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">20% off</div>
              </div>
              <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover"/>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
                <h2 className="text-xl">{pkg.title}</h2>
              </div>
            </div>
          ))}
          
      </div>

      </div>
   
    </>
  )
}

export default Packages
