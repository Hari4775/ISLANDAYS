import React from 'react'
import './Feature.css'
const Feature = () => {
  return (
    <div>
        
        <div className="top-sub-container-1   mb-16   bg-black">
                <h1 className="top-ssub-container-2-heading mb-5 md:mb-16 md:text-4xl text-sm ">At Hireasy, we've developed a platform that tackles the myriad obstacles in recruitment holistically, utilizing cutting-edge technology</h1>
               
                <div className="price-container md:h-full h-80  items-center  text-center ">
                    <p className=" price-heading md:text-3xl text-sm md:mt-3 md:mb-7 mt-3 mb-2">Empower Your Hiring Journey with our suite of tools</p>
                    <img className="price-icons md:h-full h-16" src="{{ url_for('static', filename='images/Group 207.svg') }}" />
                    <p className="price-bottom-text md:text-3xl text-xs md:mb-7 mb-2  "> Get lightning-fast, impartial and accurate assessment results with robust digital documentation—all within 99 minutes</p>
                    <div className="view-price-button flex items-center  justify-center">
                        <a href="/pricing" class="talk-to-us mx-12"><b>View Pricing</b></a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Feature
