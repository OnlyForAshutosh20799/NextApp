import React from 'react';

export default function KFaq  () {
  const faqs = [
    {
      id: 1,
      question: "What is a Kundli and why should I get one?",
      answer: "A Kundli is your personal cosmic blueprint created based on the exact time and place of your birth. It maps the positions of planets and stars revealing understanding about your personality, career, love life and future. Duastro Kundli reports are crafted with 20,000+ Vedic formulas and a 10,000,000 word database confirming 95%+ accuracy. Getting a Kundli helps you understand your life path and make informed decisions with confidence.",
      icon: "❓",
    },
    {
      id: 2,
      question: "How accurate are Duastro free and premium horoscopes?",
      answer: "Our horoscopes are over 95% accurate whether free or premium. We use your birth chart and 20,000+ Vedic formulas to create personalised predictions. Free horoscopes offer daily, weekly or monthly horoscopes while premium versions dive deeper into specific areas like love or career. Our 10,000,000 word database crafted by expert astrologers confirms prediction is precise and calculated personally to you and helping you plan life with cosmic clarity.",
      icon: "🌟",
    },
    {
      id: 3,
      question: "How does the chat with astrologer feature work?",
      answer: "Duastro chat with astrologer feature help you ask anything and anytime with 24/7 access to our expert chatting feature. We charge per minute and your unused minutes are saved so you never lose a second. Every answer is based on your Kundli calculated using our 10,000,000 word database and 20,000+ Vedic formulas. This confirms personalised and 95%+ accurate responses to guide you on love, career or any question with ease.",
      icon: "💬",
    },
    {
      id: 4,
      question: "What makes Duastro predictions so accurate?",
      answer: "Our predictions boast over 95% accuracy thanks to our massive 10,000,000 word which create every Kundli with 200,000 words and 500,000 character crafted by expert Vedic astrologers. We use 20,000+ Vedic formulas to analyse your Kundli, Nakshatras and Mahadasha. Whether it’s a free horoscope or a premium report every prediction is personalised to your unique birth chart confirming reliable guidance for your career, love, health or any big decision you face.",
      icon: "🔮",
    },
  ];

  return (
    <div className=" bg-[#FFF5E6] p-6 flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold text-center mb-8 text-yellow-400">Frequently Asked Questions</h1>
      {faqs.map((faq) => (
        <div key={faq.id} className="bg-white  mb-4 rounded-lg shadow-md max-w-5xl">
          <h2 className="text-md md:text-lg font-semibold flex items-center bg-[#FD7E14] rounded-t-lg py-2 px-2">
            <span className="mr-1 text-xl md:text-2xl">{faq.icon}</span>
            {faq.question}
          </h2>
          <p className="py-2 px-2 text-gray-700 text-sm md:text-base">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

