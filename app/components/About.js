import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import about from "../../public/Images/about.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(imgRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: imgRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(statsRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div className='container mx-auto px-4 md:px-8 lg:px-16 py-8 flex flex-col items-center gap-8 text-center'>
      {/* Text Section */}
      <div ref={textRef} className='w-full md:w-3/4 lg:w-2/3'>
        <h1 className='text-yellow-400 font-bold text-3xl mb-4'>About Me</h1>
        <p className='text-base text-gray-800'>
          I am a passionate Graphic Designer and Social Media Manager with extensive experience in creating visually appealing and engaging designs. 
          From branding to digital marketing assets, I bring creativity and strategic thinking to every project. My expertise includes logo design, 
          social media graphics, and complete brand identity solutions. I help businesses establish a strong online presence through professional design 
          and effective social media management.
        </p>
      </div>

      {/* Image Section */}
      <div ref={imgRef} className='w-full '>
        <Image 
          className='w-full h-96 object-cover rounded-lg shadow-md'
          src={about.src} 
          width={800} 
          height={500} 
          alt='Graphic Designer at work' 
        />
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className='grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-4xl'>
        <div className='flex flex-col items-center'>
          <h1 className='text-yellow-400 text-3xl font-bold'>5+</h1>
          <p className='text-sm text-gray-800'>Years of Experience</p>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-yellow-400 text-3xl font-bold'>50+</h1>
          <p className='text-sm text-gray-800'>Satisfied Clients</p>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-yellow-400 text-3xl font-bold'>100+</h1>
          <p className='text-sm text-gray-800'>Successful Projects</p>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-yellow-400 text-3xl font-bold'>10+</h1>
          <p className='text-sm text-gray-800'>Team Members</p>
        </div>
      </div>
    </div>
  );
};

export default About;
