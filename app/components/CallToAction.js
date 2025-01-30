import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CallToImg from "../../public/Images/hero-bg.jpg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const data = {
    backgroundImage: CallToImg,
    title: "Let’s Create Something Amazing!",
    description:
      "Our team of graphic designers is ready to bring your ideas to life. Get started today!",
    buttonText: "Hire a Designer",
  };

  useEffect(() => {
    // GSAP ScrollTrigger animations for title, description, and button
    gsap.fromTo(
      ".cta-title",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".cta-title",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      ".cta-description",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".cta-description",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      ".cta-button",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".cta-button",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          toggleActions: "restart none none none",
        },
      }
    );

    // Adding hover effect to the button
    gsap.fromTo(
      ".cta-button",
      { scale: 1 },
      {
        scale: 1.05,
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "ease-in-out",
        paused: true,
        scrollTrigger: {
          trigger: ".cta-button",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          toggleActions: "restart none none none",
          onEnter: () => gsap.resume(),
          onLeave: () => gsap.pause(),
        },
      }
    );
  }, []);

  return (
    <section
      className="relative bg-cover bg-center text-white py-24"
      style={{ backgroundImage: `url('${data.backgroundImage.src}')` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="cta-title text-5xl font-bold mb-6 text-yellow-400">
          {data.title}
        </h2>
        <p className="cta-description text-lg max-w-2xl mx-auto text-gray-200">
          {data.description}
        </p>
        <button className="cta-button mt-8 px-10 py-4 text-lg font-semibold bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105">
          {data.buttonText}
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
