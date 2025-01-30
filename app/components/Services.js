"use client"
import React, { useEffect } from 'react';
import { FaFigma, FaCamera, FaRegEye, FaPaintBrush, FaYoutube, FaFacebook } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  { id: 1, icon: <FaFigma />, title: "Fiverr Thumbnail Design", description: "Professional Fiverr thumbnails that attract customers to your gig.", price: "$30", cta: "Order Now" },
  { id: 2, icon: <FaCamera />, title: "Product Photography", description: "High-quality product shots that help you showcase your items.", price: "$50", cta: "Book a Shoot" },
  { id: 3, icon: <FaRegEye />, title: "YouTube Thumbnail Design", description: "Eye-catching thumbnails that boost your YouTube views.", price: "$25", cta: "Get Yours" },
  { id: 4, icon: <FaPaintBrush />, title: "Social Media Graphics", description: "Custom graphics for your social media posts to engage your audience.", price: "$40", cta: "Hire Now" },
  { id: 5, icon: <FaYoutube />, title: "YouTube Banner Design", description: "Create a stunning YouTube banner that represents your brand.", price: "$35", cta: "Design Yours" },
  { id: 6, icon: <FaFacebook />, title: "Social Media Management", description: "Efficient social media management to help you grow online.", price: "$150/month", cta: "Contact Us" }
];

const Services = () => {
  useEffect(() => {
    gsap.fromTo(".service-box", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        scrollTrigger: {
          trigger: ".service-box", 
          start: "top 80%", 
          end: "bottom 20%", 
          scrub: true,
          toggleActions: "restart none none none"
        }
      }
    );
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div key={service.id} className="service-box border border-gray-400 p-6  text-center">
            <div className="flex justify-center mb-4">
              <div className="text-yellow-400 text-4xl">{service.icon}</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-lg font-bold text-gray-800">{service.price}</p>
            <button className="mt-4 px-6 py-2 bg-yellow-400 text-black  hover:bg-yellow-500 transition duration-300">{service.cta}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
