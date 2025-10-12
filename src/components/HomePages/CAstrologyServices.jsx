import Head from 'next/head';

export default function CAstrologyServices() {
  const services = [
    { title: 'Career Report', desc: 'Get Your Customized Career Horoscope in PDF - Unlock your Future Success', img: 'https://duastro.com/admin/servicecategoryimg/career_category.webp' },
    { title: 'Finance Horoscope', desc: 'Get your Personalized Finance Horoscope in Convenient PDF Format', img: 'https://duastro.com/admin/servicecategoryimg/finance_category.webp' },
    { title: 'Family Horoscope', desc: 'Get Your PDF - Discover Your Destiny in Convenient PDF Format', img: 'https://duastro.com/admin/servicecategoryimg/family__category.webp' },
    { title: 'Health Horoscope', desc: 'Get Your Personalized Health Horoscope in Convenient PDF Format', img: 'https://duastro.com/admin/servicecategoryimg/health_category.webp' },
    { title: 'Education Horoscope', desc: 'Get Your Customized Situation Horoscope in PDF - Discover Your Academic Success', img: 'https://duastro.com/admin/servicecategoryimg/education_category.webp' },
    { title: 'Gemstone Prediction', desc: 'Discover Your Perfect Gemstone with Our FREE Recommendation Guide', img: 'https://duastro.com/admin/servicecategoryimg/gemstone_category.webp' },
    { title: 'Yearly Horoscope', desc: 'Get Your Full Year Horoscope in PDF Format - Ultimate Guide for 2022', img: 'https://duastro.com/admin/servicecategoryimg/2025_category.webp' },
    { title: 'Numerology Horoscope', desc: 'Get Your Personalized Numerology Horoscope in PDF - Discover Your Destiny', img: 'https://duastro.com/admin/servicecategoryimg/numerology_category.webp' },
    { title: 'Kundli Dasha Remedies', desc: 'Get Accurate Kundli Dasha Prediction & Remedies in PDF Format', img: 'https://duastro.com/admin/servicecategoryimg/dosh_category.webp' },
    { title: 'Lal Kitab Prediction', desc: 'Lal Kitab Prediction Guide in PDF', img: 'https://duastro.com/admin/servicecategoryimg/lalkitab_category.webp' },
    { title: 'Marriage Matching Report', desc: 'Get Your Marriage Matching Report in Convenient Format', img: 'https://duastro.com/admin/servicecategoryimg/marriage_category.webp' },
    { title: 'Planet Transit Prediction', desc: 'Get Your Personalized Guide to the Stars in PDF Format', img: 'https://duastro.com/admin/servicecategoryimg/transit_category.webp' },
    { title: 'In Depth Horoscope', desc: 'Get Your Detailed Horoscope in PDF - Explore Your Future Duastro', img: 'https://duastro.com/admin/servicecategoryimg/complete_category.webp' },
    { title: '120 Year Dasha Analysis', desc: 'Download Your Free PDF Guide to Complete 120 Year Dasha Analysis', img: 'https://duastro.com/admin/servicecategoryimg/dasha_category.webp' },
    { title: '300 Yoga Calculation', desc: 'Discover Your Destiny Generate 300 Kundli Yogi in PDF Format', img: 'https://duastro.com/admin/servicecategoryimg/yog_category.webp' },
    { title: 'Muhurat', desc: 'Discover the Perfect Timing Muhurat Guide for Auspicious Occasions', img: 'https://duastro.com/admin/servicecategoryimg/muhurat.webp' },
  ];

  return (
    <div className="  bg-gradient-to-r from-[#FFCC33] to-[#FD8115] flex flex-col items-center py-8 lg:py-16">
      <Head>
        <title>Astrology Services</title>
      </Head>
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2"><span className='text-black'>Astrology</span> <span className='text-[#FD7E14]'>Services</span></h1>
      <p className=" mb-6 text-black">Our Horoscope Prediction Services</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5 sm:mx-25">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg text-center">
            <img src={service.img} alt={service.title} className="w-full h-18 md:h-32 object-cover mb-2 rounded-t-2xl" />
            <h2 className="text-sm md:text-lg font-semibold text-gray-800 mt-2 md:mt-5">{service.title}</h2>
            <p className="md:text-sm text-xs  text-gray-600 mb-2 md:mb-5">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}