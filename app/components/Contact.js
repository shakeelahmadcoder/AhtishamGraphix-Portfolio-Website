import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // Framer Motion import

const Contact = () => {
  const data = {
    header: {
      title: "Get in Touch",
      description:
        "Feel free to reach out to us via WhatsApp or call. We're here to assist you!",
    },
    contactInfo: [
      {
        icon: <FaWhatsapp className="text-green-500 text-5xl md:text-6xl" />,
        title: "WhatsApp Us",
        link: "https://wa.me/923219350989",
        buttonText: "Message on WhatsApp",
      },
      {
        icon: <FaPhoneAlt className="text-blue-900 text-5xl md:text-6xl" />,
        title: "Call Us",
        link: "tel:+923219350989",
        buttonText: "Call Now",
      },
      {
        icon: <FaMapMarkerAlt className="text-red-500 text-5xl md:text-6xl" />,
        title: "Visit Us",
        details: ["Jauharabd District Khushab"],
      },
    ],
  };

  return (
    <div id="contact" className="flex items-center justify-center bg-white text-black px-4 py-10 md:py-20">
      <div className="w-full max-w-6xl bg-opacity-60 p-6 md:p-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.8 }} // Animation duration
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-4 md:mb-6">
            {data.header.title}
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {data.header.description}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.contactInfo.map((item, index) => {
            let direction;
            switch (index % 3) {
              case 0:
                direction = { x: -100, y: 0 }; // Left se aayega
                break;
              case 1:
                direction = { x: 100, y: 0 }; // Right se aayega
                break;
              case 2:
                direction = { x: 0, y: 100 }; // Bottom se aayega
                break;
              default:
                direction = { x: 0, y: 0 };
            }

            return (
              <motion.div
                key={index}
                className="bg-white border border-gray-300 p-6 md:p-10 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
                initial={{ opacity: 0, ...direction }} // Initial state (hidden)
                whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate when in view
                transition={{ duration: 0.8, delay: index * 0.2 }} // Animation duration with delay
              >
                <div className="mb-4 md:mb-6">{item.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-blue-900">
                  {item.title}
                </h3>
                {item.details &&
                  item.details.map((line, idx) => (
                    <p key={idx} className="text-gray-600 text-sm md:text-lg mb-2">
                      {line}
                    </p>
                  ))}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 md:px-6 md:py-3 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition"
                  >
                    {item.buttonText}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;