"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FreeAstrologyServices() {
  const services = [
    { title: "Match Making", img: "/assets/services/marrying.jpg" },
    { title: "Panchang", img: "/assets/services/Panchang1.jpg" },
    { title: "Tarot Reading", img: "/assets/services/tarot.png" },
    { title: "Kundli", img: "/assets/services/Kundli.jpg" },
    { title: "Family Horosope", img: "/assets/services/family.png" },
    { title: "Numerology", img: "/assets/services/numerology.png" },
    { title: "Remedies", img: "/assets/services/meds.png" },
    { title: "Planet Transits", img: "/assets/services/planet.png" },
    { title: "Vastu", img: "/assets/services/home.jpg" },
    { title: "Zodiac Signs", img: "/assets/services/zodiac.png" },
    { title: "Festivals", img: "/assets/services/Festival.jpg" },
    { title: "Spirituality", img: "/assets/services/spritual.jpg" },
  ];

  return (
    <div className="bg-white py-12 px-4 md:px-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center"
      >
         <span className="text-amber-600">Astrology Services</span>
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-8 place-items-center">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Image
                src={item.img}
                alt={item.title}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-md md:text-lg font-semibold text-gray-900 mt-3">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
