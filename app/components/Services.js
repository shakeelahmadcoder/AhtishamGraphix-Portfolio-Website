"use client";
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
      let direction;
      switch (index % 4) {
        case 0:
          direction = { x: -100, y: 0 }; // Left se aayega
          break;
        case 1:
          direction = { x: 100, y: 0 }; // Right se aayega
          break;
        case 2:
          direction = { x: 0, y: -100 }; // Top se aayega
          break;
        case 3:
          direction = { x: 0, y: 100 }; // Bottom se aayega
          break;
        default:
          direction = { x: 0, y: 0 };
      }

      gsap.fromTo(
        box,
        { 
          opacity: 0, 
          ...direction // Initial position based on direction
        },
        { 
          opacity: 1, 
          x: 0, // Move to original position (x-axis)
          y: 0, // Move to original position (y-axis)
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%", // Start animation when the top of the box is 80% in view
            end: "top 30%", // End animation when the top of the box is 30% in view
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
            markers: false, // Set to true for debugging
          }
        }
      );
    });
  }, []);

  return (
    <div id='services' className="container mx-auto px-4 md:px-8 lg:px-16 py-8 services-container">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <div key={service.id} className="service-box border border-gray-400 p-6 text-center bg-white">
            <div className="flex justify-center mb-4">
              <img src={service.imgSrc.src} alt={service.title} className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;