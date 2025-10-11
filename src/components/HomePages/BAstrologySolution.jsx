import Head from 'next/head';

export default function BAstrologySolution() {
  return (
    <div className=" bg-[#FFF5E6] flex flex-col items-center justify-center text-center p-6 py-20">
      <Head>
        <title>Astrology Solution</title>
      </Head>
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-gray-800">Find Your Astrology Solution</h1>
      <p className="text-md md:text-lg mb-6 text-gray-600">Choose your area of interest and how quickly you need your Report.</p>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select className="border-2 border-yellow-400 rounded-md px-10 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400">
          <option>Select Your Interest</option>
          <option>Love</option>
          <option>Career</option>
          <option>Health</option>
        </select>
        <select className="border-2 border-yellow-400 rounded-md px-10 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400">
          <option>Select Service</option>
          <option>Standard</option>
          <option>Express</option>
        </select>
        <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-3xl hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Check Here
        </button>
      </div>
      <p className="text-md max-w-4xl text-black">
       Duastro team of experienced astrologers brings decades of expertise to provide you with precise and meansingful predictions.
        Every Life Kundli and consultation is crafted with the highest accuracy and confirming you receive reliable personalised report to your needs.
      </p>
    </div>
  );
}