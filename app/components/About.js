import React from 'react';
import Image from 'next/image';
import self from "../../public/self.jpg";

const About = () => {
  return (
    <div className='container mx-auto px-4 md:px-8 lg:px-16 py-12 flex flex-col sm:flex-row items-center sm:items-start gap-12'>
      {/* Image Section */}
      <div className='w-full sm:w-1/2 flex justify-center'>
        <Image 
          className='rounded-lg shadow-lg' 
          src={self.src} 
          width={500} 
          height={500} 
          alt='Picture of the author' 
        />
      </div>
      
      {/* Content Section */}
      <div className='w-full sm:w-1/2'>
        <h1 className='text-3xl font-bold text-yellow-500 mb-6'>Hello, I am Muhammad Ahtisham</h1>
        <p className='text-gray-800 text-lg leading-relaxed'>
          I am a passionate Graphic Designer and Social Media Manager with extensive experience in creating visually appealing and engaging designs. 
          From branding to digital marketing assets, I bring creativity and strategic thinking to every project. My expertise includes logo design, 
          social media graphics, and complete brand identity solutions. I help businesses establish a strong online presence through professional design 
          and effective social media management.
        </p>
        
        {/* Info Section */}
        <div className='mt-6 space-y-4 text-lg'>
          <div className='flex gap-4'>
            <h1 className='font-semibold w-32'>Name</h1>
            <p>: Muhammad Ahtisham</p>
          </div>
          <div className='flex gap-4'>
            <h1 className='font-semibold w-32'>Address</h1>
            <p>: Lahore, Pakistan</p>
          </div>
          <div className='flex gap-4'>
            <h1 className='font-semibold w-32'>Phone</h1>
            <p>: +99222229299</p>
          </div>
          <div className='flex gap-4'>
            <h1 className='font-semibold w-32'>Email</h1>
            <p>: ahtishamgraphix@gmail.com</p>
          </div>
        </div>
        
        {/* Download CV Button */}
        <div className='mt-8'>
          <button className='py-3 px-6 border-2 border-yellow-500 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 hover:scale-105 transition-transform duration-300'>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
