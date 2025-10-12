"use client";

import Link from "next/link";

export default function IUnderstandYourFuture() {
  return (
    <section className="bg-[#FFF5E9] py-12 px-5 border md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 ">
      
      {/* Left: Images using div backgrounds */}
      <div className="flex items-center justify-center gap-4">
        <div
          className="w-28 h-40 md:w-32 md:h-48 rounded-lg shadow-md bg-cover bg-center"
          style={{ backgroundImage: "url('https://duastro.com/assetsonline/bookcover/22.webp')" }}
        ></div>
        <div
          className="w-28 h-40 md:w-32 md:h-48 rounded-lg shadow-md bg-cover bg-center"
          style={{ backgroundImage: "url('https://duastro.com/assetsonline/bookcover/23.webp')" }}
        ></div>
        <div
          className="w-28 h-40 md:w-32 md:h-48 rounded-lg shadow-md bg-cover bg-center"
          style={{ backgroundImage: "url('https://duastro.com/assetsonline/bookcover/24.webp')" }}
        ></div>
      </div>

      {/* Right: Text Section */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-900 mb-2">
          Numerology <span className="text-[#FF5722]">Combo</span>
        </h2>
        <p className="text-sm italic text-gray-700 mb-4">
          Decode Your Destiny with Numbers
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          The <strong>Numerology Combo</strong> offers 3 meaningful PDF reports
          on <strong>Numerology</strong>, <strong>Lo Shu</strong> and{" "}
          <strong>Life Forecast</strong>. Our expert numerologists reveal how
          numbers shape your life path and provide power to you with numbers’
          understanding for success.
        </p>
        <Link
          href="#"
          className="inline-block bg-[#FF5722] hover:bg-[#e64a19] text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
        >
          Get Your Numerology Combo Now
        </Link>
      </div>
    </section>
  );
}
