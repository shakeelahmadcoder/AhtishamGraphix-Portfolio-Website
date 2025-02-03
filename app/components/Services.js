"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from "../../public/Images/pen-tool.png";
import solution from "../../public/Images/solution.png";
import branding from "../../public/Images/branding.png";
import media from "../../public/Images/media.png";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  { id: 1, title: "Brand Identity Design", imgSrc: branding, description: "Crafting unique and memorable brand identities that leave a lasting impression." },
  { id: 2, title: "Company Profile Design", imgSrc: solution, description: "Professional company profiles tailored to showcase your business effectively." },
  { id: 3, title: "Logo Design", imgSrc: logo, description: "Creating impactful and meaningful logos that represent your brand vision." },
  { id: 4, title: "Social Media Management", imgSrc: media, description: "Enhancing your online presence with strategic social media marketing." }
];

const Services = () => {
  useEffect(() => {
    gsap.utils.toArray(".service-box").forEach((box, index) => {
      gsap.fromTo(
        box,
        { 
          opacity: 0, 
          x: index % 2 === 0 ? -100 : 100 // Left items move from left, right items move from right
        },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "restart none none none"
          }
        }
      );
    });
  }, []);

  return (
    <div id='services' className="container mx-auto px-4 md:px-8 lg:px-16 py-8 services-container">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service) => (
          <div key={service.id} className="service-box border border-gray-400 p-6 text-center bg-white ">
            <div className="flex justify-center mb-4">
              <img src={service.imgSrc.src} alt={service.title} className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-2 ">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;