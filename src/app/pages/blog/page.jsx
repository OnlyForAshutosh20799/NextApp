'use client';
import React, { useState } from 'react';
import { Search, Star, Moon, Sun, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';


const blogPosts = [
  // (same blog posts as before — keep all 13 items)
  {
    id: 1,
    title: 'The Power of Your Zodiac Sign',
    category: 'Zodiac',
    image: 'https://images.unsplash.com/photo-1612832021014-6e3d1f9c1b17?auto=format&fit=crop&w=800&q=60',
    date: 'October 25, 2025',
    description: 'Discover how your zodiac influences your personality, relationships, and destiny.',
  },
  {
    id: 2,
    title: 'Mercury Retrograde Explained',
    category: 'Planets',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=60',
    date: 'October 20, 2025',
    description: 'Understand what Mercury Retrograde really means and how to navigate it peacefully.',
  },
  {
    id: 3,
    title: 'Daily Horoscope Predictions',
    category: 'Horoscope',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60',
    date: 'October 18, 2025',
    description: 'Get your daily horoscope updates based on planetary alignments.',
  },
  {
    id: 4,
    title: 'Secrets of Numerology',
    category: 'Numerology',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60',
    date: 'October 10, 2025',
    description: 'Learn how numbers can reveal hidden aspects of your destiny.',
  },
  {
    id: 5,
    title: 'How Tarot Cards Reflect Your Energy',
    category: 'Tarot',
    image: 'https://images.unsplash.com/photo-1629131726698-fdc9949b4f2b?auto=format&fit=crop&w=800&q=60',
    date: 'October 05, 2025',
    description: 'Explore how tarot cards can provide spiritual guidance and insight.',
  },
  {
    id: 6,
    title: 'Planetary Movements This Month',
    category: 'Planets',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=60',
    date: 'September 29, 2025',
    description: 'Know how planetary shifts can impact your zodiac and energy levels.',
  },
  {
    id: 7,
    title: 'Understanding Moon Signs',
    category: 'Moon Signs',
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=60',
    date: 'September 15, 2025',
    description: 'Learn how your moon sign affects emotions and relationships.',
  },
  {
    id: 8,
    title: 'Love Compatibility by Zodiac',
    category: 'Compatibility',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=60',
    date: 'September 10, 2025',
    description: 'Check which zodiac signs are your perfect love matches.',
  },
  {
    id: 9,
    title: 'Gemstones for Good Luck',
    category: 'Gemstones',
    image: 'https://images.unsplash.com/photo-1599834562578-d3a4bc94d6b4?auto=format&fit=crop&w=800&q=60',
    date: 'August 30, 2025',
    description: 'Discover which gemstones bring prosperity and protection.',
  },
  {
    id: 10,
    title: 'Vastu Shastra for Positive Energy',
    category: 'Vastu Shastra',
    image: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=800&q=60',
    date: 'August 22, 2025',
    description: 'Follow ancient Vastu tips to bring balance to your home and office.',
  },
  {
    id: 11,
    title: 'Career Horoscope for 2025',
    category: 'Career Astrology',
    image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3023?auto=format&fit=crop&w=800&q=60',
    date: 'August 12, 2025',
    description: 'Find out what your stars predict for your career this year.',
  },
  {
    id: 12,
    title: 'Health Horoscope Tips',
    category: 'Health Horoscope',
    image: 'https://images.unsplash.com/photo-1612197527762-44278e07a552?auto=format&fit=crop&w=800&q=60',
    date: 'August 1, 2025',
    description: 'Learn how to maintain good health based on your zodiac sign.',
  },
  {
    id: 13,
    title: 'Kundli Analysis Basics',
    category: 'Kundli Analysis',
    image: 'https://images.unsplash.com/photo-1607604276583-902a6d8aa45e?auto=format&fit=crop&w=800&q=60',
    date: 'July 20, 2025',
    description: 'Understand your birth chart and planetary alignments.',
  },
];

const categories = [
  'All', 'Zodiac', 'Planets', 'Horoscope', 'Tarot', 'Numerology',
  'Compatibility', 'Moon Signs', 'Vastu Shastra', 'Gemstones', 'Daily Tips',
  'Career Astrology', 'Love Life', 'Health Horoscope', 'Kundli Analysis'
];

export default function BlogPage() {
    const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);

  const postsPerPage = 12;

  const filteredPosts = blogPosts.filter(
    (post) =>
      (activeCategory === 'All' || post.category === activeCategory) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen pt-20  bg-gradient-to-br from-[#FFF8E1] via-[#FFF3E0] to-[#FFECB3] text-gray-800 py-10 px-5 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#5A3E00] drop-shadow-lg">✨ Astrology Insights ✨</h1>
        <p className="text-gray-600 mt-2">Explore spiritual guidance and cosmic wisdom</p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full border border-[#FFCC33] rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#FD8115]"
        />
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div
          className={`md:w-1/5 bg-[#FFF9E5] border border-[#FFCC33] rounded-2xl p-4 shadow-sm 
          ${showSidebar ? 'block' : 'hidden md:block'} md:sticky md:top-24 md:h-fit`}
        >
          <h2 className="text-xl font-semibold text-[#FD8115] mb-3 flex justify-between items-center">
            Categories
            <button
              className="md:hidden text-gray-600"
              onClick={() => setShowSidebar(false)}
            >
              ✖
            </button>
          </h2>
          <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                  if (showSidebar) setShowSidebar(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg mb-2 font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white'
                    : 'text-[#FD8115] hover:bg-[#FFF0CC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog List */}
        <div className="flex-1">
          <button
            className="md:hidden mb-4 flex items-center gap-2 bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white px-4 py-2 rounded-full"
            onClick={() => setShowSidebar(true)}
          >
            <Menu size={18} /> Categories
          </button>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
            {paginatedPosts.length ? (
              paginatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-2xl overflow-hidden bg-white shadow-lg border border-yellow-100 hover:shadow-xl transition-all"
                >
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span className="font-medium text-[#FD8115]">{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm">{post.description}</p>
                    <button
                   onClick={() => router.push(`/pages/blog/${blogPosts.id}`)}
                    className="mt-4 inline-block bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white py-2 px-4 rounded-full text-sm hover:opacity-90">
                      Read More
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">No articles found.</p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 gap-3 flex-wrap">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className={`px-4 py-2 rounded-full font-semibold ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white'
                }`}
              >
                ← Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-full font-semibold ${
                    currentPage === i + 1
                      ? 'bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white'
                      : 'bg-white border border-[#FFCC33] text-[#FD8115]'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className={`px-4 py-2 rounded-full font-semibold ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white'
                }`}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer Icons */}
      <div className="mt-16 flex justify-center gap-2 text-[#FD8115]">
        <Star /> <Moon /> <Sun />
      </div>
    </div>
  );
}
