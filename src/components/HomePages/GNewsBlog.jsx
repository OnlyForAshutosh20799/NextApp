"use client";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function GNewsBlog() {
  const newsPlatforms = [
    { name: "Sangri Today", img: "https://duastro.com/admin/banner/blog/Sangri.png" },
    { name: "Republic TV", img: "https://duastro.com/admin/banner/blog/republictoday.png" },
    { name: "English Loktej", img: "https://via.placeholder.com/150?text=English+Loktej" },
    { name: "Lokmat", img: "https://via.placeholder.com/150?text=Lokmat" },
    { name: "Google News Initiative", img: "https://via.placeholder.com/150?text=Google+News" },
    { name: "Google News Initiative", img: "https://via.placeholder.com/150?text=Google+News" },
    { name: "Google News Initiative", img: "https://via.placeholder.com/150?text=Google+News" },
    { name: "Google News Initiative", img: "https://via.placeholder.com/150?text=Google+News" },
    { name: "Google News Initiative", img: "https://via.placeholder.com/150?text=Google+News" },
  ];

  const blogPosts = [
    { title: "Zodiac Signs That Are Good At Arguing", desc: "Zodiac Signs", img: "https://duastro.com/admin/blogimageswebp/july/Zodiac-Signs-That-Are-Good-At-Arguing.webp" },
    { title: "Top Zodiac Signs Known As Frenemies", desc: "Zodiac Signs", img: "https://duastro.com/admin/blogimageswebp/july/Top-Zodiac-Signs-Known-As-Frenemies.webp" },
    { title: "Zodiac Women Who Are Controlling", desc: "Zodiac Signs", img: "https://duastro.com/admin/blogimageswebp/july/Zodiac-Women-Known-To-Be-Controlling.webp" },
    { title: "Top 5 Most Manipulative Zodiac Signs", desc: "Zodiac Signs", img: "https://duastro.com/admin/blogimageswebp/july/Top-5-Most-Manipulative-Zodiac-Signs.webp" },
  ];

  return (
    <div className="flex flex-col">
      <Head>
        <title>Duastro in the News</title>
      </Head>

      {/* 🟡 News Section */}
      <div className="bg-yellow-400 py-10 text-center">
        <h1 className="md:text-3xl text-2xl font-extrabold text-white mb-2">
          Duastro in the News
        </h1>
        <p className="text-white text-sm md:text-base">
          Featured on Leading Platforms for Our Astrological Excellence
        </p>

        {/* Slider Container */}
        <div className="mt-8 px-6 relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {newsPlatforms.map((platform, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center h-32">
                  <img
                    src={platform.img}
                    alt={platform.name}
                    className="object-contain w-24 h-24"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Pagination dots below cards */}
          <div className="custom-swiper-pagination mt-4"></div>
        </div>
      </div>

      {/* 🪐 Blog Section */}
      <div className="bg-yellow-50 py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6 text-black">Latest from Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full md:h-48 h-40 object-cover rounded-t-lg mb-2"
              />
              <h3 className="text-sm md:text-lg font-semibold text-gray-800">
                {post.title}
              </h3>
              <p className="md:text-sm text-xs text-gray-600">{post.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Pagination Styling */}
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
          transition: all 0.3s ease;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #facc15; /* Tailwind yellow-400 */
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
