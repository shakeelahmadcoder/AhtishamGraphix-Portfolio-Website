"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

import Bilboard1 from "../../public/ImagesPortfolio/Bilboard1.jpg";
import Bilboard2 from "../../public/ImagesPortfolio/Bilboard2.jpg";
import Bilboard3 from "../../public/ImagesPortfolio/Bilboard3.jpg";
import Bilboard4 from "../../public/ImagesPortfolio/Bilboard4.jpg";
import Bilboard5 from "../../public/ImagesPortfolio/Bilboard5.jpg";
import Bilboard6 from "../../public/ImagesPortfolio/Bilboard6.jpg";
import Bilboard7 from "../../public/ImagesPortfolio/Bilboard7.jpg";
import Facebook1 from "../../public/ImagesPortfolio/Facebook1.jpg";
import Facebook2 from "../../public/ImagesPortfolio/Facebook2.jpg";
import Fiverr1 from "../../public/ImagesPortfolio/Fiverr1.jpg";
// import Fiverr2 from "../../public/ImagesPortfolio/Fiverr2.jpg";
import Fiverr3 from "../../public/ImagesPortfolio/Fiverr3.jpg";
import Fiverr4 from "../../public/ImagesPortfolio/Fiverr4.jpg";
import Fiverr5 from "../../public/ImagesPortfolio/Fiverr5.jpg";
import Fiverr6 from "../../public/ImagesPortfolio/Fiverr6.jpg";
import Fiverr7 from "../../public/ImagesPortfolio/Fiverr7.jpg";
import Fiverr8 from "../../public/ImagesPortfolio/Fiverr8.jpg";
import Fiverr9 from "../../public/ImagesPortfolio/Fiverr9.jpg";
import Fiverr10 from "../../public/ImagesPortfolio/Fiverr10.jpg";

import Logo1 from "../../public/ImagesPortfolio/Logo1.jpg";
import Logo2 from "../../public/ImagesPortfolio/Logo2.jpg";
import Media1 from "../../public/ImagesPortfolio/Media1.jpg";
import Media2 from "../../public/ImagesPortfolio/Media2.jpg";
import Media3 from "../../public/ImagesPortfolio/Media3.jpg";
import Media4 from "../../public/ImagesPortfolio/Media4.jpg";
import Media5 from "../../public/ImagesPortfolio/Media5.jpg";
import Media6 from "../../public/ImagesPortfolio/Media6.jpg";
import Media7 from "../../public/ImagesPortfolio/Media7.jpg";
import Package1 from "../../public/ImagesPortfolio/Package1.jpg";
import Package2 from "../../public/ImagesPortfolio/Package2.jpg";
import Package3 from "../../public/ImagesPortfolio/Package3.jpg";
import Package4 from "../../public/ImagesPortfolio/Package4.jpg";
import Package5 from "../../public/ImagesPortfolio/Package5.jpg";
import Package6 from "../../public/ImagesPortfolio/Package6.jpg";
import Package7 from "../../public/ImagesPortfolio/Package7.jpg";
import Package8 from "../../public/ImagesPortfolio/Package8.jpg";
import Package9 from "../../public/ImagesPortfolio/Package9.jpg";
import Package10 from "../../public/ImagesPortfolio/Package10.jpg";
import Standay1 from "../../public/ImagesPortfolio/Standay1.jpg";
import Standay2 from "../../public/ImagesPortfolio/Standay2.jpg";
import Standay3 from "../../public/ImagesPortfolio/Standay3.jpg";
import Standay4 from "../../public/ImagesPortfolio/Standay4.jpg";
import Standay5 from "../../public/ImagesPortfolio/Standay5.jpg";
import Standay6 from "../../public/ImagesPortfolio/Standay6.jpg";
import Standay7 from "../../public/ImagesPortfolio/Standay7.jpg";
import Standay8 from "../../public/ImagesPortfolio/Standay8.jpg";
import Standay9 from "../../public/ImagesPortfolio/Standay9.jpg";
import Standay10 from "../../public/ImagesPortfolio/Standay10.jpg";
import Standay11 from "../../public/ImagesPortfolio/Standay11.jpg";
import Standay12 from "../../public/ImagesPortfolio/Standay12.jpg";
import Standay13 from "../../public/ImagesPortfolio/Standay13.jpg";
import Standay14 from "../../public/ImagesPortfolio/Standay14.jpg";
import Standay15 from "../../public/ImagesPortfolio/Standay15.jpg";
import Standay16 from "../../public/ImagesPortfolio/Standay16.jpg";
import Thumbnail1 from "../../public/ImagesPortfolio/Thumbnail1.jpg";
import Thumbnail2 from "../../public/ImagesPortfolio/Thumbnail2.jpg";
import Thumbnail3 from "../../public/ImagesPortfolio/Thumbnail3.jpg";
import Thumbnail4 from "../../public/ImagesPortfolio/Thumbnail4.jpg";
import Thumbnail5 from "../../public/ImagesPortfolio/Thumbnail5.jpg";
import Thumbnail6 from "../../public/ImagesPortfolio/Thumbnail6.jpg";
import Thumbnail7 from "../../public/ImagesPortfolio/Thumbnail7.jpg";
import Thumbnail8 from "../../public/ImagesPortfolio/Thumbnail8.jpg";
import Thumbnail9 from "../../public/ImagesPortfolio/Thumbnail9.jpg";
import Thumbnail10 from "../../public/ImagesPortfolio/Thumbnail10.jpg";
import Thumbnail11 from "../../public/ImagesPortfolio/Thumbnail11.jpg";
import Thumbnail12 from "../../public/ImagesPortfolio/Thumbnail12.jpg";
import Thumbnail13 from "../../public/ImagesPortfolio/Thumbnail13.jpg";
import Thumbnail14 from "../../public/ImagesPortfolio/Thumbnail14.jpg";
import Thumbnail15 from "../../public/ImagesPortfolio/Thumbnail15.jpg";
import Thumbnail16 from "../../public/ImagesPortfolio/Thumbnail16.jpg";
import Thumbnail17 from "../../public/ImagesPortfolio/Thumbnail17.jpg";
import Thumbnail18 from "../../public/ImagesPortfolio/Thumbnail18.jpg";
import Thumbnail19 from "../../public/ImagesPortfolio/Thumbnail19.jpg";
import Thumbnail20 from "../../public/ImagesPortfolio/Thumbnail20.jpg";
import Thumbnail21 from "../../public/ImagesPortfolio/Thumbnail21.jpg";
import Thumbnail22 from "../../public/ImagesPortfolio/Thumbnail22.jpg";
import Thumbnail23 from "../../public/ImagesPortfolio/Thumbnail23.jpg";
import Company1 from "../../public/ImagesPortfolio/Company1.jpg";
import Company2 from "../../public/ImagesPortfolio/Company2.jpg";
import Company3 from "../../public/ImagesPortfolio/Company3.jpg";
import Company4 from "../../public/ImagesPortfolio/Company4.jpg";
import Company5 from "../../public/ImagesPortfolio/Company5.jpg";
import Company6 from "../../public/ImagesPortfolio/Company6.jpg";
import Company7 from "../../public/ImagesPortfolio/Company7.jpg";
import Company8 from "../../public/ImagesPortfolio/Company8.jpg";
import Company9 from "../../public/ImagesPortfolio/Company9.jpg";
import Company10 from "../../public/ImagesPortfolio/Company10.jpg";
import Company11 from "../../public/ImagesPortfolio/Company11.jpg";

const portfolioData = {
  Fiverr: [
    { id: 1, image: Fiverr1 },
    // { id: 2, image: Fiverr2 },
    { id: 3, image: Fiverr3 },
    { id: 4, image: Fiverr4 },
    { id: 5, image: Fiverr5 },
    { id: 6, image: Fiverr6 },
    { id: 7, image: Fiverr7 },
    { id: 8, image: Fiverr8 },
    { id: 9, image: Fiverr9 },
    { id: 10, image: Fiverr10 },
  ],
  Package: [
    { id: 11, image: Package1 },
    { id: 12, image: Package2 },
    { id: 13, image: Package3 },
    { id: 14, image: Package4 },
    { id: 15, image: Package5 },
    { id: 16, image: Package6 },
    { id: 17, image: Package7 },
    { id: 18, image: Package8 },
    { id: 19, image: Package9 },
    { id: 20, image: Package10 },
  ],
  Bilboard: [
    { id: 21, image: Bilboard1 },
    { id: 22, image: Bilboard2 },
    { id: 23, image: Bilboard3 },
    { id: 24, image: Bilboard4 },
    { id: 25, image: Bilboard5 },
    { id: 26, image: Bilboard6 },
    { id: 27, image: Bilboard7 },
  ],
  Facebook: [
    { id: 28, image: Facebook1 },
    { id: 29, image: Facebook2 },
  ],
  Logo: [
    { id: 30, image: Logo1 },
    { id: 31, image: Logo2 },
  ],
  Media: [
    { id: 32, image: Media1 },
    { id: 33, image: Media2 },
    { id: 34, image: Media3 },
    { id: 35, image: Media4 },
    { id: 36, image: Media5 },
    { id: 37, image: Media6 },
    { id: 38, image: Media7 },
  ],
  CompanyProfile: [
    { id: 39, image: Company1 },
    { id: 40, image: Company2 },
    { id: 41, image: Company3 },
    { id: 42, image: Company4 },
    { id: 43, image: Company5 },
    { id: 44, image: Company6 },
    { id: 45, image: Company7 },
    { id: 46, image: Company8 },
    { id: 47, image: Company9 },
    { id: 48, image: Company10 },
    { id: 49, image: Company11 },
  ],
  Standay: [
    { id: 50, image: Standay1 },
    { id: 51, image: Standay2 },
    { id: 52, image: Standay3 },
    { id: 53, image: Standay4 },
    { id: 54, image: Standay5 },
    { id: 55, image: Standay6 },
    { id: 56, image: Standay7 },
    { id: 57, image: Standay8 },
    { id: 58, image: Standay9 },
    { id: 59, image: Standay10 },
    { id: 60, image: Standay11 },
    { id: 61, image: Standay12 },
    { id: 62, image: Standay13 },
    { id: 63, image: Standay14 },
    { id: 64, image: Standay15 },
    { id: 65, image: Standay16 },
  ],
  Thumbnail: [
    { id: 66, image: Thumbnail1 },
    { id: 67, image: Thumbnail2 },
    { id: 68, image: Thumbnail3 },
    { id: 69, image: Thumbnail4 },
    { id: 70, image: Thumbnail5 },
    { id: 71, image: Thumbnail6 },
    { id: 72, image: Thumbnail7 },
    { id: 73, image: Thumbnail8 },
    { id: 74, image: Thumbnail9 },
    { id: 75, image: Thumbnail10 },
    { id: 76, image: Thumbnail11 },
    { id: 77, image: Thumbnail12 },
    { id: 78, image: Thumbnail13 },
    { id: 79, image: Thumbnail14 },
    { id: 80, image: Thumbnail15 },
    { id: 81, image: Thumbnail16 },
    { id: 82, image: Thumbnail17 },
    { id: 83, image: Thumbnail18 },
    { id: 84, image: Thumbnail19 },
    { id: 85, image: Thumbnail20 },
    { id: 86, image: Thumbnail21 },
    { id: 87, image: Thumbnail22 },
    { id: 88, image: Thumbnail23 },
  ],
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Fiverr");
  const filteredItems = portfolioData[activeCategory] || [];

  const imageRefs = useRef([]);

  useEffect(() => {
    // GSAP Animation with ScrollTrigger
    filteredItems.forEach((_, index) => {
      gsap.fromTo(
        imageRefs.current[index],
        {
          opacity: 0,
          x: index % 3 === 0 ? -200 : index % 3 === 1 ? 200 : 0, // Different directions
          y: index % 3 === 2 ? -200 : 0, // Coming from the top for some images
        },
        {
          opacity: 1,
          x: 0, // Final x position (reset to original position)
          y: 0, // Final y position
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRefs.current[index],
            start: "top 80%", // Start when the element is 80% from the top of the viewport
            end: "top 30%",
            toggleActions: "play reverse play reverse", // Play when entering, reverse when exiting
            markers: false, // Remove debug markers if you don’t need them
          },
        }
      );
    });
  }, [filteredItems]);

  return (
    <section id="portfolio" className="py-12 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-8 text-blue-900">
          My Creative Portfolio
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {Object.keys(portfolioData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-900 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="group relative"
            ref={(el) => (imageRefs.current[index] = el)} // Assigning refs to each image
          >
            {/* Image Container with Fixed Aspect Ratio */}
            <div className="aspect-w-1 aspect-h-1">
              <Image
                src={item.image.src}
                width={1000} // Image width
                height={1000} // Image height
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
