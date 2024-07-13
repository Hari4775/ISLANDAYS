import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { experience, price, secure } from '../../../assets/Index';

const Services = () => {
    useEffect(() => {
        Aos.init({duration:2000});
      }, [])
  return (
    <>
        <div className='w-screen h-auto p-14 '>
            <h1 data-aos="fade-up" className='text-cyan-900 font-moderna text-3xl text-center'>Why Choose Us?</h1>
            <div className='flex justify-center md:w-10/12 mx-auto w-full my-10'>

                <div data-aos="fade-up" className='w-1/3 h-auto '>
                    <img className='mx-auto mb-2' src={price}/>
                    <h1 data-aos="fade-up" className='text-center text-sm font-semibold md:text-xl'>Competitive Prices</h1>
                    <p data-aos="fade-up text-center" className='hidden md:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi deserunt iusto eos. Lorem ipsum dolor sit amet </p>
                </div>


                <div data-aos="fade-up" className='w-1/3 h-auto mx-5 '>
                   <img className='mx-auto mb-2' src={secure}/>
                    <h1 data-aos="fade-up" className='text-center text-sm font-semibold md:text-xl'>Secure Booking</h1>
                    <p data-aos="fade-up text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi deserunt iusto eos.  Lorem ipsum dolor sit amet</p>
                </div>

                <div data-aos="fade-up" className='w-1/3 h-auto mx-5 '>
                   <img className='mx-auto mb-2' src={experience}/>
                    <h1 data-aos="fade-up" className='text-center text-sm font-semibold md:text-xl'>Seamless Experience</h1>
                    <p data-aos="fade-up text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi deserunt iusto eos.  Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>

    </>
  )
}

export default Services