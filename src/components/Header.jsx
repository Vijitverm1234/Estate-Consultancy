import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div 
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden" 
      style={{ backgroundImage: "url('/header_pic2.png')" }} 
      id="header"
    >
      <Navbar />
      <div  className='container text-center mx-auto py-6 px-6 md:px-20 lg:px-32 text-white'>
     <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Welcome to Your Dream Estate</h2>
        <div className='space-x-6 mt-10'>
            <a href="#projects" className='border border-white bg-white  text-gray-700 px-8 py-3 rounded'>Projects</a>
            <a href="#contact" className=' bg-gray-800 px-8 border border-white py-3 rounded'>Contacter</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
