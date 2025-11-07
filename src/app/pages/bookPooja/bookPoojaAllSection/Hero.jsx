import React from 'react'

export default function Hero() {
  return (
      <section className="relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FD7E14] via-[#FFCC33] to-[#FF9F1C] " />
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 relative">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-block rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-amber-700 shadow">
                Verified Vedic Pandits • Pan-India
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Book Auspicious <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-900">Vedic Pooja</span> at Home
              </h1>
              <p className="mt-4 text-slate-700 md:text-lg">
                Premium, authentic, and serene puja experience—done as per shastra, matching your <span className="font-semibold">muhurat</span> and intention.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-700">
                <li>✅ Senior Pandits</li>
                <li>✅ Samagri Support</li>
                <li>✅ Genuine Muhurat</li>
                <li>✅ Photo/Videos on Request</li>
              </ul>
            </div>
            <div className="relative">
              <div className=" w-full rounded-3xl bg-gradient-to-tr from-orange-200 to-amber-100 shadow-xl ring-1 ring-amber-200" >
              <img src='/assets/PoojaHeroSection.png' alt='image' className='rounded-3xl' />
              </div>
              
            </div>
          </div>
        </div>
      </section>
  )
}
