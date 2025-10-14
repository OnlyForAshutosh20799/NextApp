"use client";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

export default function GNewsBlog() {
  const newsPlatforms = [
    { name: "Sangri Today", img: "https://duastro.com/admin/banner/blog/Sangri.png" },
    { name: "Republic TV", img: "https://duastro.com/admin/banner/blog/republictoday.png" },
    { name: "English Loktej", img: "https://via.placeholder.com/150?text=English+Loktej" },
    { name: "Lokmat", img: "https://via.placeholder.com/150?text=Lokmat" },
    { name: "Google News Initiative", img: "https://via.placeholder.com/150?text=Google+News" },
    { name: "India News", img: "https://via.placeholder.com/150?text=India+News" },
    { name: "ABP Live", img: "https://via.placeholder.com/150?text=ABP+Live" },
    { name: "Zee News", img: "https://via.placeholder.com/150?text=Zee+News" },
  ];

  const blogPosts = [
    {
      title: "Zodiac Signs That Are Good At Arguing",
      desc: "Explore which signs never back down and why!",
      img: "https://duastro.com/admin/blogimageswebp/july/Zodiac-Signs-That-Are-Good-At-Arguing.webp",
    },
    {
      title: "Top Zodiac Signs Known As Frenemies",
      desc: "Who loves you today and rivals you tomorrow?",
      img: "https://duastro.com/admin/blogimageswebp/july/Top-Zodiac-Signs-Known-As-Frenemies.webp",
    },
    {
      title: "Zodiac Women Who Are Controlling",
      desc: "These zodiac queens like things their way.",
      img: "https://duastro.com/admin/blogimageswebp/july/Zodiac-Women-Known-To-Be-Controlling.webp",
    },
    {
      title: "Top 5 Most Manipulative Zodiac Signs",
      desc: "Some play chess while others play checkers.",
      img: "https://duastro.com/admin/blogimageswebp/july/Top-5-Most-Manipulative-Zodiac-Signs.webp",
    },
  ];

  return (
    <div className="flex flex-col">
      <Head>
        <title>AstroVastuGuru in the News</title>
      </Head>

      {/* 🟡 News Section */}
      <section className="relative bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 py-16 text-center overflow-hidden">
        {/* Glowing Background Orbs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300 blur-3xl opacity-25 animate-pulse"></div>

        <div className="relative z-10">
           <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-4xl text-3xl font-bold text-gray-900 mb-3"
        >
          AstroVastuGuru <span className="text-[#FD7E14]">in the News</span>
        </motion.h1>
          <p className="text-white/90 text-base md:text-lg italic">
            🌟 Featured Across Leading Media Platforms for Astrological Excellence 🌟
          </p>

          {/* Slider Container */}
          <div className="mt-10 px-6">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
                el: ".custom-swiper-pagination",
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              spaceBetween={25}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
            >
              {newsPlatforms.map((platform, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg flex justify-center items-center h-32 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <img
                      src={platform.img}
                      alt={platform.name}
                      className="object-contain w-24 h-24 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-2 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      {platform.name}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ✅ Pagination Dots */}
            <div className="custom-swiper-pagination mt-6"></div>
          </div>
        </div>
      </section>

      {/* 🪐 Blog Section */}
      <section className="bg-[#FFF9EE] py-16 px-6 text-center relative">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Latest from <span className="text-amber-600">Our Blog</span>
        </h2>
        <p className="text-gray-600 italic mb-10 max-w-3xl mx-auto">
          ✨ Insights, cosmic secrets, and guides to help you understand your stars better ✨
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{post.desc}</p>
              </div>
              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-3">
                <button className="bg-white text-amber-600 font-semibold text-sm py-2 px-4 rounded-full shadow-md hover:bg-amber-100 transition-all">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#"
            className="inline-block bg-amber-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-amber-600 transition-all duration-300"
          >
            Explore All Blogs ✨
          </a>
        </div>
      </section>

      {/* 🌕 Custom Pagination Styling */}
      <style jsx global>{`
        .custom-swiper-pagination {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }
        .custom-swiper-pagination .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
          width: 10px;
          height: 10px;
          margin: 0 5px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #f59e0b;
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
}
