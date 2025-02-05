import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import fehmida from "../../public/Fehmida.jpeg";
import click from "../../public/click.jpg";
import quran from "../../public/quran.jpeg";
import college from "../../public/college.jpeg";
import technology from "../../public/technology.jpeg";
import complex from "../../public/complex.jpeg";
import ceo from "../../public/SEO.jpeg";
import kinza from "../../public/kinzay.jpeg";
import CallToImg from "../../public/Images/hero-bg.jpg";

const testimonials = [
  {
    id: 1,
    name: "Shape and Shade by Fehmida",
    text: "I am working from 6 months and I had never seen the skills which you have Ma Sha Allah. You made all my posts and videos beautiful, which I really want. In our whole city, never ever seen is your compatible person. Allah bless you more success, Ameen.",
    image: fehmida,
    rating: 5,
  },
  {
    id: 2,
    name: "Click Solutions CEO",
    text: "I recently worked with a highly skilled and creative graphic designer, and I am thoroughly impressed with their work. They are not only an expert in their field but also bring a unique artistic flair to every project. Their designs were exactly what I needed—professional, eye-catching, and perfectly tailored to my requirements. I highly recommend their services to anyone looking for top-notch graphic design work!",
    image: click,
    rating: 5,
  },
  {
    id: 3,
    name: "Quran Academy",
    text: "I am truly impressed with the ad!!! The content is clear, engaging, and perfectly aligned with its purpose. The visuals are eye-catching, and the call-to-action is very effective. Thank you for putting in such effort and creativity—Great job!!!",
    image: quran,
    rating: 5,
  },
  {
    id: 4,
    name: "CHAPS Group of Colleges",
    text: "Muhammad Ahtisham has been an invaluable asset to the CHAPS Group of Colleges. Their creativity and professionalism shine through in every promotional ad and video they produce. Each project reflects a deep understanding of our brand, effectively capturing the essence of our institution. Their attention to detail, innovative designs, and timely delivery consistently exceed expectations. We highly recommend Muhammad Ahtisham for any creative endeavor!",
    image: college,
    rating: 5,
  },
  {
    id: 5,
    name: "Techlogics",
    text: "I was impressed with Ahtisham's professionalism and enthusiasm throughout the project. He was a pleasure to communicate with and provided valuable feedback at every stage. He was also very understanding of the creative process and patient with revisions. I would definitely work with him again.",
    image: technology,
    rating: 5,
  },
  {
    id: 6,
    name: "Ameer Medical Complex",
    text: "Working with Ahtisham was an absolute pleasure! They truly understood my vision and delivered designs that exceeded my expectations. The creativity, attention to detail, and professionalism they brought to the project were exceptional. Every step of the process was smooth, and they were always open to feedback and quick with revisions. I highly recommend their graphic design services to anyone looking for high-quality and impactful designs. Thank you for bringing my ideas to life!",
    image: complex,
    rating: 5,
  },
  {
    id: 7,
    name: "Hamza Packages CEO",
    text: "Muhammad Ahtisham is an exceptionally talented graphic designer who transformed our packaging and promotional materials into visually stunning creations. His creativity, attention to detail, and deep understanding of branding exceeded our expectations. He’s a true professional, and I highly recommend his services to anyone seeking impactful designs.",
    image: ceo,
    rating: 5,
  },
  {
    id: 8,
    name: "Kinza Irshad",
    text: "Collaborating with Ahtisham was a fantastic experience! They listened carefully to my ideas and turned them into designs that were even better than I had imagined. Their unique creativity and dedication to perfection really stood out. The entire process was seamless, and they were incredibly responsive to my suggestions, making adjustments swiftly and effectively. I’m beyond impressed with the results and would highly recommend their design expertise to anyone in need of outstanding visuals. Thank you for your exceptional work and commitment!",
    image: kinza,
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,

    centerMode: false,
    
    customPaging: () => <div className="slick-dot" style={{ backgroundColor: 'white' }}></div>,
  };

  return (
    <section  id='testimonials' className="relative  bg-cover bg-center text-white py-16" style={{ backgroundImage: `url(${CallToImg.src})` }}>
     {/* Overlay */}
     <div className="absolute inset-0 bg-blue-900/85"></div>
      <div className="relative container mx-auto px-6 text-center  ">
        <h2 className="text-3xl font-bold text-white mb-6">What Our Clients Say</h2>

        <SlickSlider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex   mx-auto flex-col items-center justify-center text-center  bg-transparent p-6 rounded-lg shadow-lg">
              <div className="w-32  m-auto items-center h-32 mb-4 rounded-full overflow-hidden border-4 border-white">
                <Image src={testimonial.image} alt={testimonial.name} width={128} height={128} className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
              <p className="text-gray-300">{testimonial.text}</p>

              <div className="flex mx-auto my-2 items-center justify-center  w-full">
                  <FaStar  className="text-yellow-400" />
                  <FaStar  className="text-yellow-400" />
                  <FaStar  className="text-yellow-400" />
                  <FaStar  className="text-yellow-400" />
                  <FaStar  className="text-yellow-400" />
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </section>
  );
};

export default Testimonials;
