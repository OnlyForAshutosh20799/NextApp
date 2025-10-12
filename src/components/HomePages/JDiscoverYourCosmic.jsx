"use client";

import { FaStar } from "react-icons/fa";

export default function JDiscoverYourCosmic() {
  const topics = [
    {
      title: "🌞 What is Astrology?",
      content: `Astrology is the divine science guiding your life journey. It’s the bridge between the celestial and human realms that decodes the significance of planets, stars, and constellations in shaping your destiny. Through detailed astrological analysis, Duastro offers you personalized insights into your life’s direction, strengths, and challenges. Whether it’s your health, relationships, or career, astrology helps you align with your true purpose. Connect to Discover Your Predictions in 30 sec. using our online astrology tools.`,
    },
    {
      title: "📘 Understanding Your Kundli",
      content: `Your Kundli or birth chart acts as the mirror to your destiny. It maps the exact positions of planets and stars revealing your unique celestial blueprint. Your Kundli helps you understand what makes you who you are, what challenges you face, and how to overcome them. Duastro provides accurate online Kundli generation to help you decode your past, present, and future within seconds.`,
    },
    {
      title: "💫 The Power of Horoscopes",
      content: `Horoscopes are your daily, weekly, monthly, or yearly guides based on your zodiac sign. Usually created as per your date of birth, they reveal planetary movements affecting your life. Duastro’s free horoscope predictions help you prepare for what’s ahead and make the right choices to attract positivity and success in your life.`,
    },
    {
      title: "🌙 Nakshatras: Your Perfect Guides",
      content: `Vedic astrology recognizes 27 Nakshatras or lunar constellations that deeply impact your Kundli. Each Nakshatra brings a unique energy shaping your personality and life path. Learn which Nakshatra rules your mind and influences your thoughts, emotions, and decisions. Duastro provides detailed Nakshatra-based analysis to help you align with cosmic harmony for a fulfilling life and personal harmony.`,
    },
    {
      title: "♾️ Mahadasha: Your Life Chapters",
      content: `Mahadasha is the long-term planetary period that governs phases of your life through planetary positions. Each Mahadasha is backed by a planet that helps or challenges you in different aspects of life. Duastro provides Mahadasha reports to guide you on favorable and unfavorable times so that you can plan wisely for success and happiness.`,
    },
    {
      title: "🪐 Antardasha: Fine Tuning Your Destiny",
      content: `Antardasha or sub-periods refine your destiny within the larger Mahadasha cycle. These sub-periods are ruled by secondary planets and lead you to fine-tune your energy and focus. Duastro’s advanced astrology predictions bring clarity about which planetary periods demand growth, patience, or action for maximum benefit.`,
    },
    {
      title: "☀️ Planetary Influences in Astrology",
      content: `Every planet has a story to tell, shaping your emotions, thoughts, and destiny. The Sun symbolizes your soul, Moon your emotions, and Mars your strength. Duastro’s free Kundli software interprets how planets influence everything from your relationships to finances. By understanding planetary strength (Graha Shakti) and placement (Bhava), you can transform your challenges into success.`,
    },
    {
      title: "🏠 The 12 Houses of Your Kundli",
      content: `Your Kundli is divided into 12 houses, each representing different parts of your life like wealth, family, career, or love. The planets in these houses shape your experiences. For example, the 10th house influences your profession, the 7th your relationships, and the 4th your inner peace. Duastro’s online Kundli prediction gives you in-depth insights into each house for better understanding of your destiny.`,
    },
    {
      title: "📘 Vedic Formulas: The Science Behind Predictions",
      content: `Duastro’s astrologers use powerful Vedic formulas derived from ancient wisdom. These calculations reveal the movements of planets at the time of your birth, analyze aspects, conjunctions, and transits, and predict how planetary energies influence your life. This scientific method backed by 5000+ years of tradition ensures reliability, accuracy, and practical insights to empower your decision-making.`,
    },
    {
      title: "👩‍💻 Chat with Our Expert Astrologers",
      content: `Got a question about your career, marriage, or health? Chat live with Duastro astrologers! Serving you online 24/7, our experts analyze your birth chart and provide instant remedies. Each astrologer on Duastro’s platform is verified with deep expertise. From love compatibility to job success, our astrologers bring spiritual clarity and logical answers for your every concern.`,
    },
    {
      title: "✅ 95%+ Accuracy You Can Trust",
      content: `Our astrology predictions are backed by verified Vedic formulas and expert precision. With data of 60 million+ Kundlis analyzed, Duastro ensures 95%+ accuracy across horoscope predictions, Dasha timelines, and planetary transitions. You can count on Duastro’s predictions for personal and reliable solutions. Whether it is a career issue or relationship doubt, our platform delivers clarity and confidence.`,
    },
    {
      title: "⚡ Fastest Astrology Platform",
      content: `Get your free Kundli, Horoscope, or Matchmaking report instantly in just seconds! Our cutting-edge technology processes your details and presents accurate results in lightning speed. Duastro’s astrology software saves time while ensuring authentic calculations. Access your free astrology reports from anywhere, anytime, on mobile or desktop with our responsive platform.`,
    },
    {
      title: "💍 Marriage and Love Predictions",
      content: `Finding the perfect partner or improving an existing relationship is made easy. We analyze your Kundli for relationship suitability, Ashthakoot and Gun Milan compatibility, and Dasha alignment. Duastro provides instant marriage and relationship horoscope reports for specific goals like love success, emotional stability, and long-term harmony.`,
    },
    {
      title: "💼 Career and Financial Guidance",
      content: `Wondering when you’ll achieve your dream career or financial growth? Duastro’s career horoscope shows the key planetary periods for job success, business expansion, or financial prosperity. Based on your birth details, it highlights favorable timings for investments, promotions, and professional breakthroughs.`,
    },
    {
      title: "🌟 Why Choose Duastro?",
      content: `Duastro brings the universe to your screen — your cosmic companion, with 95%+ accurate predictions. Duastro has helped over 6 lakh satisfied users find clarity and confidence in life. We combine technology with authentic astrology, offering instant online reports, expert consultations, and AI-powered Kundli analysis. Explore your future with Duastro today and step closer to your destiny.`,
    },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-b from-[#FFCC33] to-[#FD8115] flex justify-center py-8 px-4 flex-col items-center">
        <h1 className="text-center text-2xl md:text-3xl font-extrabold text-yellow-400 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] tracking-wide py-4">
  Discover Your Cosmic Destiny with Duastro
</h1>

      <div className="max-w-6xl bg-[#7F6519] text-white rounded-lg shadow-lg p-6 md:p-8 backdrop-blur-sm">
        
        <div className="space-y-5">
          {topics.map((topic, i) => (
            <div
              key={i}
              className="  rounded-lg"
            >
              <h2 className="font-bold text-white md:text-xl">{topic.title}</h2>
              <p className="text-sm md:text-md leading-relaxed text-gray-200">
                {topic.content}
              </p>
            </div>
          ))}
        </div>

        <div className="text-left mt-8">
          <button className="bg-[#fd7e14] hover:bg-[#e76e00] transition px-5 py-2 rounded-md  text-white shadow-lg text-sm">
            Explore Your Free Astrology Tools Now
          </button>
        </div>
      </div>
    </div>
  );
}
