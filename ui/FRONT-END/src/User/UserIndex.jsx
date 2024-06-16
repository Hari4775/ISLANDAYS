import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "../components";
//
import Footer from "../components/Footer";
import './index.css'
import LandingPage from "./pages/LandingPage/LandingPage";

// App
const UserIndex = () => {
  return (
    
 <>
    
    <Navbar/>  

 
 
    <Routes>
      <Route path="/" element={<LandingPage/>} />   
    </Routes>
    <Footer/>
  
  </> 
   
  );
};

export default UserIndex;
