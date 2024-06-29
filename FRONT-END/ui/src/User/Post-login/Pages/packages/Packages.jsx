import React, { useState } from 'react'
import Header from '../../../../Common/Header/Header'
import './Packages.css'
import { PackageData } from '../../../../constants'
import { useNavigate } from 'react-router-dom';

const Packages = () => {
  const navigate = useNavigate();

  const handleCardClick = (pkg) => {
    navigate(`/packagedetails/${pkg.id}`);
  };


  return (


<>
<div className='pt-10  mb-10' id='packages'>
  <div className='md:w-1/2 w-11/12 mx-auto'>
    <h1 className='tour-packages-text '>CHOOSE YOUR TOUR PACKAGE</h1>
    <p className='text-white mb-5 md:text-lg  text-sm md:text-center text-left'>
      Select the package & explore the <span className='text-blue-500 text-xs'>ISLAND</span><span className='text-red-700 text-lg font-bold'>DAYS</span> with us
    </p>
  </div>
  
<div className="flex overflow-x-auto overflow-y-hidden w-full bg-blue-500 space-x-3 md:space-x-2 h-72">
  {PackageData.map((pkg) => (
    <div
      key={pkg.id}
      className="relative w-8/12 md:w-1/3 h-72 bg-yellow-500 border flex-shrink-0 cursor-pointer transform hover:scale-105 transition-transform duration-300 group"
      onClick={() => handleCardClick(pkg)}
    >
      <div className="absolute right-0 top-0 h-72">
        <div className="absolute transform rotate-45 bg-green-600 text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
          {pkg.offer} off
        </div>
      </div>
      <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white p-4 overflow-hidden">
        <ul className="text-center w-1/2 list-disc list-inside">
          {pkg.description.split(',').map((point, index) => (
            <li key={index}>{point.trim()}</li>
          ))}
        </ul>
      </div>
      
      <div className="absolute bottom-5 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
      <h2 className="text-xl" onClick={() => handleCardClick(pkg)}>View Details</h2>
      </div>
    </div>
  ))}
</div>


  
</div>
</>
  )
}

export default Packages
