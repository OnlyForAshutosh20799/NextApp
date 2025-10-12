import Head from 'next/head';

export default function HAstrologicalConnections() {
  const services = [
    { title: 'Gun Milan Report', desc: 'Marriage Matching', img: 'https://duastro.com/admin/serviceimages/ashtakoot.webp' },
    { title: 'Love & Relationship Prediction', desc: 'Kundli Milan', img: 'https://duastro.com/admin/serviceimages/Love%20&%20Relationship%20Matching.webp' },
    { title: 'Ashtakoot Prediction', desc: 'Marriage Matching', img: 'https://duastro.com/admin/serviceimages/Marriage%20Matching.webp' },
    { title: 'Marriage Matching', desc: 'Complete Matching', img: 'https://duastro.com/admin/serviceimages/Marriage%20Matching%20(2).webp' },
  ];

  return (
    <div className="m bg-gradient-to-r from-[#FFCC33] to-[#FD8115] flex flex-col items-center p-6">
      <Head>
        <title>Astrological Connections for Eternal Love</title>
      </Head>
      <h1 className="md:text-3xl text-2xl font-bold mb-4 text-center">Astrological Connections for <span className='text-orange-500'>Eternal Love</span></h1>
      <p className="text-black italic  mb-4 text-center max-w-2xl">
        Find Your Perfect Match with Duastro Expert Marriage Predictions
      </p>
      <div className='flex lg:flex-row  flex-col md:mx-20 lg:gap-10 gap-5'>    
      <div>
      <p className="text-white mb-6 text-center max-w-2xl text-[13px]">
        Astrology is the key to understand a harmonious marriage which guide you through the planetary alignment of 
        stars and planets to find your perfect life partner. By perfect calculation of planetary positions, birth charts
         and compatibility factors Duastro expert astrologers confirm matches that resonate on emotional, intellectual and 
         spiritual levels.
      </p>
      <p className="text-white md:mb-8 mb-4 text-center max-w-2xl text-[13px]">
        Duastro bring over 26 years of astrological expertise to deliver unparalleled marriage predictions.
         Our team of Vedic astrologers, numerologists and KP masters crafts detailed reports covering personality traits, 
         financial compatibility, family dynamics and long term harmony. With a remarkable 95%+ accuracy rate, we have provided power to over
          1 lakh individuals globally to find their ideal partners and earning us a top spot on Google through 3 years of dedicated excellence
          . Whether it is Ashtakoot analysis or in depth Kundli Milan, our services blend ancient wisdom with modern precision to confirm your 
          journey to love is confident and fulfilling.
      </p>
      </div>
       <div className="grid grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
            <img src={service.img} alt={service.title} className="w-full h-20 object-cover rounded-t-lg mb-2" />
            <h2 className="text-sm font-semibold text-gray-800">{service.title}</h2>
            <p className="text-xs text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
       </div>
     
    </div>
  );
}