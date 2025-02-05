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
    // Left section animation (appears from left)
    gsap.fromTo(
      leftRef.current,
      {
        x: -200, // Start position: far left
        opacity: 0, // Start opacity: 0 (invisible)
      },
      {
        x: 0, // End position: original position
        opacity: 1, // End opacity: 1 (fully visible)
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%", // Start when element reaches 80% of viewport
          end: "top 30%",
          toggleActions: "play none none none", // Play once when it enters
          markers: false, // Remove debug markers if you don’t need them
        },
      }
    );

    // Right section animation (appears from right)
    gsap.fromTo(
      rightRef.current,
      {
        x: 200, // Start position: far right
        opacity: 0, // Start opacity: 0 (invisible)
      },
      {
        x: 0, // End position: original position
        opacity: 1, // End opacity: 1 (fully visible)
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%", // Start when element reaches 80% of viewport
          end: "top 30%",
          toggleActions: "play none none none", // Play once when it enters
          markers: false, // Remove debug markers if you don’t need them
        },
      }
    );
  }, []);

  return (
    <div id="about" className="container mx-auto px-4 md:px-8 lg:px-16 py-12 flex flex-col sm:flex-row items-center sm:items-start gap-12">
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
      <div ref={rightRef} className="w-full text-center sm:text-start sm:w-1/2">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Hey there! I am Muhammad Ahtisham
        </h1>
        <p className="text-gray-800 text-lg leading-relaxed">
          A passionate Graphic Designer and Social Media Manager with a deep
          love for visual storytelling. I specialize in branding, social media
          design, and digital marketing materials, ensuring that every design I
          create aligns perfectly with your business goals. If you're looking
          for unique and engaging visuals that make an impact, let’s
          collaborate!
        </p>

        {/* Info Section */}
        <div className="mt-6 space-y-4 text-lg">
          <div className="flex gap-4">
            <h1 className="font-semibold w-32">Name</h1>
            <p>: Muhammad Ahtisham</p>
          </div>
          <div className="flex gap-4">
            <h1 className="font-semibold w-32">Address</h1>
            <p>: Chak No 11/50MB Jauharabad</p>
          </div>
          <div className="flex gap-4">
            <h1 className="font-semibold w-32">Phone</h1>
            <p>: 03219350989</p>
          </div>
          <div className="flex gap-4">
            <h1 className="font-semibold w-32">Email</h1>
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
