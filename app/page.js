"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image'; // Import Image from next/image
import logo from "../public/Images/pen-tool.png";
import solution from "../public/Images/solution.png";
import branding from "../public/Images/branding.png";
import media from "../public/Images/media.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from './components/About';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

// Register GSAP plugin once
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const services = [
    { id: 1, title: "Brand Identity Design", imgSrc: branding },
    { id: 2, title: "Company Profile Design", imgSrc: solution },
    { id: 3, title: "Logo Design", imgSrc: logo },
    { id: 4, title: "Social Media Management", imgSrc: media },
  ];
  
  const heroRef = useRef();
  const servicesRef = useRef();
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Hero section animation
    gsap.from(heroRef.current?.children || [], {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: 'power4.out'
    });

    // Services cards animation
    gsap.from(servicesRef.current?.children || [], {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: 'top center'
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    });

    // Section animations
    sectionRefs.current.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top center'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
      });
    });
  }, []);

  return (
    <>
      <div 
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative pt-20"
        style={{ backgroundImage: "url('/Images/hero-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Main Content */}
        <div ref={heroRef} className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="block">Creative Graphic</span>
            <span className="block">Design Solutions.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            We specialize in social media management and graphic design services.
          </p>
        </div>

        {/* Services Section */}
        <div 
          ref={servicesRef}
          className="md:w-3/4 relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 md:mt-24 px-4 w-full max-w-6xl"
        >
          {services.map((service) => (
            <div 
              key={service.id}
              className="flex flex-col items-center text-center p-6 bg-transparent border border-gray-300 hover:border-yellow-400"
            >
              <Image 
                src={service.imgSrc}
                alt={service.title}
                width={50} // Adjust the width as needed
                height={50} // Adjust the height as needed
                className="text-yellow-400 mb-4 hover:scale-110 transition-transform invert"
              />
              <h3 className="text-white md:text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Sections */}
      <div ref={(el) => sectionRefs.current[0] = el}>
        <About />
      </div>
      
      <div ref={(el) => sectionRefs.current[1] = el}>
        <Services />
      </div>

      <div ref={(el) => sectionRefs.current[2] = el}>
        <CallToAction />
      </div>

      <div ref={(el) => sectionRefs.current[3] = el}>
        <Portfolio />
      </div>
      
      <div ref={(el) => sectionRefs.current[4] = el}>
        <Testimonials />
      </div>
      
      <div ref={(el) => sectionRefs.current[5] = el}>
        <Contact />
      </div>
    </>
  );
};

export default Page;
