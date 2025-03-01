"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import self from "../../public/self.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Left section animation (From left to center)
    gsap.fromTo(
      leftRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
          markers: false,
        },
      }
    );

    // Right section animation (From right to center)
    gsap.fromTo(
      rightRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div id="about" className="container mx-auto px-4 md:px-8 lg:px-16 py-12 flex flex-col sm:flex-row items-center sm:items-start md:gap-12">
      {/* Image Section */}
      <div ref={leftRef} className="w-full sm:w-1/2 flex justify-center">
        <Image
          src={self.src}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      {/* Content Section */}
      <div ref={rightRef} className="w-full text-center sm:text-start sm:w-1/2 flex flex-col sm:justify-start justify-center sm:items-start items-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Hey there! I am Muhammad Ahtisham
        </h1>
        <p className="text-gray-800 text-lg leading-relaxed">
          A passionate Graphic Designer and Social Media Manager with a deep
          love for visual storytelling...
        </p>

        {/* Info Section */}
        <div className="mt-6 space-y-4 text-lg text-start">
          <div className="flex gap-4">
            <h1 className="font-semibold w-14 md:w-32">Name</h1>
            <p>: Muhammad Ahtisham</p>
          </div>
          <div className="flex gap-4">
            <h1 className="font-semibold w-14 md:w-32">Address</h1>
            <p>: Chak No 11/50MB Jauharabad</p>
          </div>
          <div className="flex gap-4">
            <h1 className="font-semibold w-14 md:w-32">Phone</h1>
            <p>: 03219350989</p>
          </div>
          <div className="flex gap-4">
            <h1 className="font-semibold w-14 md:w-32">Email</h1>
            <p>: shamiahtisham909@gmail.com</p>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="mt-8">
          <a
            href="/cv.pdf"
            download="Muhammad_Ahtisham_CV.pdf"
            className="py-3 text-white px-6 border-2 border-blue-900 bg-blue-900 rounded-md hover:bg-blue-900 hover:scale-105 transition-transform duration-300 inline-block text-center"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;