import React from 'react'
import './Card.css'

const Card = ({ data }) => {
  return (
    <div className="h-28 md:w-10/12 mx-2 bg-green-500  rounded-lg relative cursor-pointer mb-5">
      <div className="absolute inset-0 opacity-25 rounded-lg shadow-2xl">
        <h1 className="bg-green-500"></h1>
      </div>
      <div className="absolute inset-0 transform rounded-lg  card  transition duration-300 ">
        <div className="h-full w-full  rounded-lg   flex flex-col justify-center items-center p-4 ">
          {/* <img src="../../../../../assets/images/group-scuba.jpg" alt="Placeholder" className="h-16 w-16 mb-2"/> */}
          <h2 className="text-xl font-bold mb-1 text-blue-400">{data?.title}</h2>
          {/* <p className="text-gray-700">{data?.description}</p> */}
        </div>
      </div>
    </div>
  )
}

export default Card;
