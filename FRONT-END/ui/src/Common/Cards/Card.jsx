import React from 'react'

const Card = ({data}) => {
  return (
    <div>
        <div className="h-72 w-72 relative cursor-pointer mb-5">
    <div className="absolute inset-0 opacity-25 rounded-lg shadow-2xl">
        <h1 className="bg-green-500">has</h1>
    </div>
    <div className="absolute inset-0 transform hover:skew-y-12 transition duration-300"> 
        <div className="h-full w-full bg-white rounded-lg shadow-2xl flex flex-col justify-center items-center p-4">
            <img src="../../../../../assets/images/group-scuba.jpg" alt="Placeholder" className="h-16 w-16 mb-2"/>
            <h2 className="text-xl font-bold mb-1">{data}</h2>
            <p className="text-gray-700">This is some sample text inside the card. It provides additional information.</p>
        </div>
    </div>
</div>
      
    </div>
  )
}

export default Card
