import Head from 'next/head';

export default function FOurUnmatchedExpertise() {
  const experts = [
    { name: 'Astro Sudhi Saluja', title: 'Numerologist with 15 years of experience and decoding cosmic vibrations through numbers to guide your life path.' },
    { name: 'Shri Kavita Pediya', title: 'Vastu Expert harmonising spaces with cosmic energies for prosperity and peace with 18 years of expertise.' },
    { name: 'Acharya Kushal Verma', title: 'Vedic Astrologer with 20 years of mastery and offering precise Kundli analysis for life changing understanding.' },
    { name: 'Pandit Vidya Prasad', title: 'Palm Reader with 17 years of experience and providing your destiny through the lines of your hand.' },
    { name: 'Astro Anil Sharma', title: 'KP Astrologer with 22 years of expertise and delivering pin point predictions using Krishnamurti Paddhati.' },
    { name: 'Priya Mehra', title: 'Tarot Reader with 14 years of intuitive guidance and revealing hidden truths through the cards.' },
    { name: 'Acharya Rajesh Gupta', title: 'Gemstone Consultant with 19 years of experience and prescribing cosmic aligned gems for success.' },
    { name: 'Dr. Neha Kapoor', title: 'Nadi Astrologer with 16 years of expertise and decoding ancient palm leaf predictions for your future.' },
    { name: 'Astro Vikram Singh', title: 'Lal Kitab Specialist with 21 years of experience and offering powerful remedies for planetary challenges.' },
    { name: 'Phd. Meera Desai', title: 'Reiki Healer with 15 years of practice and channeling planets energy for holistic well being.' },
    { name: 'Pandit Amit Patel', title: 'Horary Astrologer with 18 years of expertise and answering life questions through precise planetary timing.' },
    { name: 'Mrs. Sonia Rathore', title: 'Matchmaking Astrologer with 20 years of experience and confirming cosmic compatibility for life long bonds.' },
  ];

  return (
    <div className=" bg-[#FFF5E6] flex flex-col items-center justify-center p-6">
      <Head>
        <title>Our Unmatched Expertise Team</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Our Unmatched Expertise Team</h1>
      <p className="text-lg mb-3 text-gray-600 text-center max-w-2xl italic">
        Precision, Trust and Planetary Wisdom from a World Class Team
      </p>
      <p className="text-md mb-8 text-gray-600 text-center max-w-2xl">
       With over 20 years of astrological mastery Duastro has provide power to 6 lakh lives globally with accurate Kundli readings earning a top spot on Google through 3 years of relentless dedication. Our elite team of Vedic astrologers, numerologists, KP masters, Vastu experts and palm readers blends ancient wisdom with modern understanding delivering predictions with over 95% accuracy. Trusted by clients across India and beyond we transform lives with personalised solutions for career, relationships, health and prosperity.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-30">
        {experts.map((expert, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-4 text-center transform hover:scale-105 transition duration-300">
            <h2 className="text-md font-semibold text-orange-600 mb-2">{expert.name}</h2>
            <p className="text-gray-700 text-xs">{expert.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}