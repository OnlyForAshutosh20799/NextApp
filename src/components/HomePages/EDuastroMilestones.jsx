import Head from 'next/head';

export default function EDuastroMilestones() {
  const milestones = [
    { value: '600K', label: 'Kundlis Delivered' },
    { value: '45K', label: 'Positive Reviews' },
    { value: '30 Sec', label: "World's Fastest Kundli" },
    { value: '20+ Years', label: 'Experience' },
    { value: '95%+', label: 'Prediction Accuracy' },
    { value: '1200+', label: 'Expert Astrologer' },
  ];

  return (
    <div className="bg-gradient-to-r from-[#FFCC33] to-[#FD8115] flex flex-col items-center justify-center p-6">
      <Head>
        <title>Duastro Milestones</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4 text-white text-center">Duastro <span className='text-black'>Milestones</span></h1>
      <p className="text-white mb-8 text-center max-w-2xl italic">
        Providing Power to millions with rapid and accurate astrological guidance
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {milestones.map((milestone, index) => (
          <div key={index} className="bg-white rounded-lg shadow-2xl p-3 text-center transform hover:scale-105 transition duration-300">
            <h2 className="md:text-3xl text-xl font-bold text-orange-600 mb-2">{milestone.value}</h2>
            <p className="text-gray-900 text-xs md:text-sm font-bold">{milestone.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}