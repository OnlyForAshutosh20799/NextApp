import Head from 'next/head';

export default function DZodiacSign() {
  const zodiacSigns = [
    {
      name: 'Aries',
      dates: 'Mar 21 - Apr 19',
      image: 'https://duastro.com/admin/banner/rashi/Aries.webp',
      color: 'bg-red-500'
    },
    {
      name: 'Taurus',
      dates: 'Apr 20 - May 20',
      image: 'https://duastro.com/admin/banner/rashi/Taurus.webp',
      color: 'bg-yellow-600'
    },
    {
      name: 'Gemini',
      dates: 'May 21 - Jun 20',
      image: 'https://duastro.com/admin/banner/rashi/Gemini.webp',
      color: 'bg-blue-500'
    },
    {
      name: 'Cancer',
      dates: 'Jun 21 - Jul 22',
      image: 'https://duastro.com/admin/banner/rashi/Cancer.webp',
      color: 'bg-pink-500'
    },
    {
      name: 'Leo',
      dates: 'Jul 23 - Aug 22',
      image: 'https://duastro.com/admin/banner/rashi/Leo.webp',
      color: 'bg-orange-500'
    },
    {
      name: 'Virgo',
      dates: 'Aug 23 - Sep 22',
      image: 'https://duastro.com/admin/banner/rashi/Virgo.webp',
      color: 'bg-green-600'
    },
    {
      name: 'Libra',
      dates: 'Sep 23 - Oct 22',
      image: 'https://duastro.com/admin/banner/rashi/Libra.webp',
      color: 'bg-purple-500'
    },
    {
      name: 'Scorpio',
      dates: 'Oct 23 - Nov 21',
      image: 'https://duastro.com/admin/banner/rashi/Scorpio.webp',
      color: 'bg-red-700'
    },
    {
      name: 'Sagittarius',
      dates: 'Nov 22 - Dec 21',
      image: 'https://duastro.com/admin/banner/rashi/Sagittarius.webp',
      color: 'bg-orange-400'
    },
    {
      name: 'Capricorn',
      dates: 'Dec 22 - Jan 19',
      image: 'https://duastro.com/admin/banner/rashi/Capricorn.webp',
      color: 'bg-gray-600'
    },
    {
      name: 'Aquarius',
      dates: 'Jan 20 - Feb 18',
      image: 'https://duastro.com/admin/banner/rashi/Aquarius.webp',
      color: 'bg-blue-400'
    },
    {
      name: 'Pisces',
      dates: 'Feb 19 - Mar 20',
      image: 'https://duastro.com/admin/banner/rashi/Pisces.webp',
      color: 'bg-cyan-500'
    }
  ];

  return (
    <div className=" bg-[#FBF1E3] py-7 md:py-15 px-4">
      <Head>
        <title>Choose Your Zodiac Sign</title>
      </Head>
      
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Choose Your Zodiac<span className='text-[#FD7E14]'> Sign</span>
        </h1>
        <p className="text-base italic text-gray-600 mb-3">
          Discover Your Daily, Monthly and Yearly Horoscope
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Unlock personalized astrological insights with our expertly crafted horoscopes, designed to guide
          you with 90% accuracy across all aspects of life.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-7 px-5 sm:px-0">
          {zodiacSigns.map((sign, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-3 hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100 hover:border-amber-200"
            >
              <div className={` rounded-full mx-auto mb-1 flex items-center justify-center`}>
                <img
                  src={sign.image}
                  alt={`${sign.name} symbol`}
                  className="h-15 md:h-25"
                />
              </div>
              <h3 className="text-md md:text-lg font-semibold text-gray-800">{sign.name}</h3>
              <p className="text-xs md:text-sm text-gray-500">{sign.dates}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}