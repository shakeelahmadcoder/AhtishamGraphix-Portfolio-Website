import React from "react";
import Image from "next/image";
import self from "../../public/self.jpg";
// import cv from "../../public/cv.pdf";

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 flex flex-col sm:flex-row items-center sm:items-start gap-12">
      {/* Image Section */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <Image
          className=""
          src={self.src}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-1/2">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Hey there! I am Muhammad Ahtisham
        </h1>
        <p className="text-gray-800 text-lg leading-relaxed">
          a passionate Graphic Designer and Social Media Manager with a deep
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
    </div>
  );
};

export default About;
