import Head from 'next/head';

export default function GNewsBlog() {
  const newsPlatforms = [
    { name: 'Sangri Today', img: 'https://duastro.com/admin/banner/blog/Sangri.png' },
    { name: 'Republic TV', img: 'https://duastro.com/admin/banner/blog/republictoday.png' },
    { name: 'English Loktej', img: 'https://via.placeholder.com/150?text=English+Loktej' },
    { name: 'Lokmat', img: 'https://via.placeholder.com/150?text=Lokmat' },
    { name: 'Google News Initiative', img: 'https://via.placeholder.com/150?text=Google+News' },
   
];

const blogPosts = [
    { title: 'Zodiac Signs That Are Good At Arguing', desc: 'Zodiac Signs', img: 'https://duastro.com/admin/blogimageswebp/july/Zodiac-Signs-That-Are-Good-At-Arguing.webp' },
    { title: 'Top Zodiac Signs Known As Frenemies', desc: 'Zodiac Signs', img: 'https://duastro.com/admin/blogimageswebp/july/Top-Zodiac-Signs-Known-As-Frenemies.webp' },
    { title: 'Zodiac Women Who Are Controlling', desc: 'Zodiac Signs', img: 'https://duastro.com/admin/blogimageswebp/july/Zodiac-Women-Known-To-Be-Controlling.webp' },
    { title: 'Top 5 Most Manipulative Zodiac Signs', desc: 'Zodiac Signs', img: 'https://duastro.com/admin/blogimageswebp/july/Top-5-Most-Manipulative-Zodiac-Signs.webp' },
  ];

  return (
    <div className=" flex flex-col">
      <Head>
        <title>Duastro in the News</title>
      </Head>
     <div className="bg-yellow-400 py-6 text-center">
    <h1 className="text-4xl font-bold text-white mb-2">Duastro in the News</h1>
    <p className="text-white text-sm">Featured on Leading Platforms for Our Astrological Excellence</p>
    <div className="flex justify-center gap-6 mt-6 overflow-x-auto px-4 scrollbar-hide">
        {newsPlatforms.map((platform, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <img src={platform.img} alt={platform.name} className="w-32 h-32 object-contain" />
            </div>
        ))}
    </div>
</div>
      <div className="bg-yellow-50 py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6 text-black">Latest from Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:mx-25">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover rounded-t-lg mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}