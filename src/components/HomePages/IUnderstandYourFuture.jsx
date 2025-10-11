import Head from 'next/head';

export default function IUnderstandYourFuture() {
    const combo = {
        title: 'Career Success Combo',
        subtitle: 'Your Roadmap to Professional Triumph',
        description: 'The Career Success Combo offers 6 comprehensive PDF reports covering Career, Finance, Government Job, Business, Education and Life Forecast. Crafted with 26 years of astrological expertise our Vedic astrologers provide accurate understanding to navigate job opportunities, financial growth and educational milestones confirming your path to success is cosmically aligned.',
        buttonText: 'Get Your Career Combo Now',
        images: [
            'https://duastro.com/assetsonline/bookcover/1.webp',
            'https://duastro.com/assetsonline/bookcover/1.webp',
            'https://duastro.com/assetsonline/bookcover/1.webp',
            'https://duastro.com/assetsonline/bookcover/1.webp',
            'https://duastro.com/assetsonline/bookcover/1.webp',
            'https://duastro.com/assetsonline/bookcover/1.webp',

        ],
    };

    return (
        <div className=" bg-[#FFF5E6] flex flex-col items-center p-6">
            <Head>
                <title>Understand Your Future with Our Combo Offers</title>
            </Head>
            <h1 className="text-4xl font-bold mb-8 text-orange-600">Understand Your Future with Our Combo Offers</h1>
            <div className=" p-6 max-w-4xl text-center">
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                    <div></div>
                    {combo.images.map((img, index) => (
                        <img key={index} src={img} alt={`${combo.title} Image ${index + 1}`} className="w-32 h-32 object-cover rounded" />
                    ))}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{combo.title}</h2>
                        <p className="text-lg text-gray-600 mb-2">{combo.subtitle}</p>
                        <p className="text-gray-600 mb-4">{combo.description}</p>
                        <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300">
                            {combo.buttonText}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}