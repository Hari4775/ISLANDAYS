import React from 'react';
import TextField from '@mui/material/TextField';
import { MdPhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { rounded1Image, roundedImage, sendImage } from '../../../../assets/Index';

const ConnectUs = () => {
  return (
    <div className="py-10 mt-28 my-10 bg-slate-50 w-11/12 mx-auto rounded-md">
      <div className="flex flex-col-reverse lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden mx-auto w-11/12">
        <div className="lg:w-2/5 bg-black flex flex-col justify-between pl-8">
          <div>
            <h1 className='text-white pt-8 font-semibold text-3xl text-start px-5 mt-5'>Let's Chat and Connect!</h1>
            <p className='text-white text-start px-5'>We’re here to help. Reach out to us!</p>
          </div>

          
        {/* <div className='py-5 space-y-8 px-5'>
          <div className='flex items-center text-white'>
            <MdPhoneInTalk className='mr-2' />
            <span>+91 123 456 7890</span>
          </div>
          <div className='flex items-center text-white'>
            <IoIosMail className='mr-2' />
            <span>Islanddays@gmail.com</span>
          </div>
          <div className='flex items-center text-white w-auto'>
            <ImLocation2 className='mr-2' />
            <span>+1012 3456 789
                demo@gmail.com
                132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
          </div>
        </div> */}
        <div className='py-5 space-y-8 px-5'>
          <div className='flex items-center text-white'>
            <MdPhoneInTalk className='mr-2' />
            <span>+91 123 456 7890</span>
          </div>
          <div className='flex items-center text-white'>
            <IoIosMail className='mr-2' />
            <span>Islanddays@gmail.com</span>
          </div>
          <div className='flex items-center text-white flex-wrap'>
            <ImLocation2 className='mr-2' />
            <span className='whitespace-pre-line'>
               Island
            </span>
          </div>
        </div>
 
         <div className="flex ">
            <div className="flex justify-start md:pt-20  px-5 gap-5">
              <FaFacebook className="text-white hover:bg-gray-200 cursor-pointer rounded-full hover:text-black px-2 text-4xl" />
              <AiFillInstagram className="text-white hover:bg-gray-200 cursor-pointer rounded-full hover:text-black px-2 text-4xl" />
              <RiTwitterFill className="text-white hover:bg-gray-200 cursor-pointer rounded-full hover:text-black px-2 text-4xl" />
              </div>
              <div className="relative ml-auto flex items-end">
                <img src={roundedImage} alt="image1" className="absolute -top-8" />
                <img src={rounded1Image} alt="image2" className="rounded-lg" />
              </div>
          </div>

        </div>

        <div className="w-full px-5 lg:w-3/5 ">
          <h2 className="text-4xl font-bold text-cyan-800 text-center font-moderna py-5">Contact</h2>

          <div className="mt-4 flex flex-col md:flex-row justify-evenly items-center gap-8">
            <TextField
              id="First-name"
              label="First Name"
              type="text"
              variant="standard"
              className='w-full md:w-60'
            />
            <TextField
              id="last-name"
              label="Last Name"
              type="text"
              autoComplete="last-name"
              variant="standard"
              className='w-full md:w-60'
            />
          </div>

          <div className="mt-4 flex flex-col md:flex-row justify-evenly items-center gap-8">
            <TextField
              id="Email"
              label="Email"
              type="email"
              variant="standard"
              className='w-full md:w-60'
            />
            <TextField 
              id="Phone-number"
              label="Phone Number"
              type="number"
              autoComplete="Phone number"
              variant="standard"
              className='w-full md:w-60'
            />
          </div>

          <div className='mt-4 ml-10'>
            <TextField
              id="Message"
              label="Message"
              type="text"
              variant="standard"
              className='w-11/12'
            />
          </div>

          <div className='flex justify-end mx-10'>
            <button className='w-56 bg-black text-white h-14 my-10 rounded-lg text-lg'>Send Message</button>
          </div>

          <div className='flex justify-center'>
            <img src={sendImage} alt="send message" className='w-1/2 max-w-[12rem] -mt-16 hover:cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectUs;
