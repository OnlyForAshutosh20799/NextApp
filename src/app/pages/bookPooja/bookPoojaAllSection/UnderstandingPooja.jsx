'use client';

import React, { useState } from 'react';
import { ChevronDown, Sparkles, Info, CheckCircle, Package, Star, HelpCircle, Clock, Home, Shield, Zap } from 'lucide-react';

export default function UnderstandingPooja() {
 const [openIndex, setOpenIndex] = useState(null);


  const faqs = [
    "What makes AstroVastuGurupooja service unique?",
    "Who conducts the pooja?",
    "Can I attend the pooja online?",
    "Will I receive prasad?",
    "What does the Prasad Box contain?",
    "Are there any additional charges for the pooja services?",
    "How do I book a pooja with AstroVastuGuru?",
    "How can I trust the authenticity of the pooja?",
    "What is the delivery time for the Prasad Box?",
    "Can I customize the pooja as per my requirements?"
  ];

  const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};


  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Understanding Kaal Sarp Dosh Nivaran Puja
            </h2>
          </div>
        
          <div className="mt-3 h-1 w-32 mx-auto bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left 2 Columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-600" />
                Kaal Sarp Dosh Nivaran Puja by AstroVastuGuru
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Importance of Kaal Sarp Dosh Nivaran Puja:<br />
                Kaal Sarp Dosh is a significant dosha in Vedic astrology that occurs when all the planets are positioned between the shadow planets Rahu & Ketu in a person's birth chart. This dosha is believed to bring immense challenges in life including financial instability, health issues, career obstacles, mental stress & personal conflicts. Kaal Sarp Dosh Nivaran Puja is a powerful remedy to nullify the adverse effects of this dosha, ensuring peace, prosperity & success. By performing this puja, individuals can reduce the karmic blockages & imbalances associated with Kaal Sarp Dosh.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-amber-600" />
                Benefits of Kaal Sarp Dosh Nivaran Puja:
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "Removes Karmic Blockages: Helps clear the negative energy created by the Kaal Sarp Dosh, allowing for smoother progress in life.",
                  "Brings Financial Stability: Reduces financial instability & opens new avenues for wealth & prosperity.",
                  "Improves Health: Alleviates health issues caused by this dosha & promotes physical and mental well-being.",
                  "Strengthens Relationships: Resolves & balances harmony in personal & family relationships, reducing conflicts & misunderstandings.",
                  "Career Growth: Removes obstacles & delays in professional life, leading to career advancement & success.",
                  "Spiritual Benefits: Promotes mental peace, spiritual growth & personal transformation."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Procedure */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-amber-600" />
                Procedure (What) of Kaal Sarp Dosh Nivaran Puja:
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  { icon: Home, text: "Booking the Puja: Customers can easily book the Kaal Sarp Dosh Nivaran Puja through AstroVastuGuru's online platform." },
                  { icon: Clock, text: "Muhurta Selection: AstroVastuGuru's astrologers choose the most auspicious date & time for the puja within 24 hours of booking." },
                  { icon: Shield, text: "Personalized Rituals: The puja is conducted exclusively for the customer by experienced Vedic priests to address their specific dosha." },
                  { icon: Package, text: "Online Participation: A unique video link is sent to the customer, enabling them to attend the puja live from anywhere in the world." },
                  { icon: Sparkles, text: "Puja Rituals:" },
                  { icon: null, text: "• Invocation of Rahu & Ketu: Chanting mantras to appease Rahu & Ketu, the shadow planets responsible for Kaal Sarp Dosh." },
                  { icon: null, text: "• Offerings: Specific offerings of black sesame seeds, coconut & other items are made to the sacred fire to neutralize the dosha." },
                  { icon: null, text: "• Havan (Fire Ritual): A dedicated havan with Kaal Sarp Dosh specific mantras is performed to reduce the negative impact of the dosha." },
                  { icon: null, text: "• Tarpan (Water Offering): A ritual offering to seek forgiveness from the ancestral spirits & Rahu Ketu." },
                  { icon: null, text: "• Prayer & Conclusion: The puja concludes with prayers for the removal of obstacles, the improvement of health & the customer's overall well-being." }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-start gap-2">
                      {Icon && <Icon className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />}
                      {!Icon && <span className="w-4 h-4 mt-0.5 flex-shrink-0"></span>}
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Pre & Post Puja */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-amber-600" />
                Pre & Post Pooja Benefits:
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "Online Pooja Link: Customer receive an Online Pooja Link where customer can join the Pooja for anywhere with ease.",
                  "Live Pooja Video Link: Customer receive Live Pooja Video Link with live pooja video recording along with energized items: Rudraksha Beads includes the Customer name installed during Pooja to genuine & ethical working.",
                  "Energized Items: Pooja Powerful Yantra so you can keep it in Pocket or Locker as a Pooja blessing & 5 Mukhi Rudhraksha energized along with Pooja.",
                  "Printed Report: Detailed Life Prediction report written by Astrologer with Remedies & Restriction for Growth.",
                  "Mantra Book: Detailed Mantra Printed Book for future guidance.",
                  "Prasad Box: Sacred Prasad is also shipped to the customer's address along with Mantra Book, Life Prediction, Energized Rudhraksha & Yantra within India arriving in 8 to 10 Days based on the location (Free Delivery)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advantages */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-amber-600" />
                Advantage of Pooja with AstroVastuGuru
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "Convenience: Participate in the puja online from anywhere, ensuring the flexibility & ease.",
                  "Expert Astrologer: Pooja is conducted by experienced and certified Vedic astrologers.",
                  "Transparency: AstroVastuGuruensures customer manage during Pooja to ensure the authenticity of Pooja.",
                  "Expert Guidance: Customer will get personalized prediction & guidance from Registered Astrologer.",
                  "Comprehensive Solutions: Included personalized remedies & restrictions to make Life better & get Pooja Blessings."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-orange-600">
                Perform Kaal Sarp Dosh Nivaran Puja with AstroVastuGuruto remove the malefic effects of this dosha, restore balance & pave the way for peace, prosperity & spiritual growth in your life.
              </p>
            </div>
          </div>

          {/* FAQ Accordion - Right Column */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-amber-100 to-orange-100 rounded-3xl p-6 shadow-xl sticky top-6">
              <h3 className="text-lg font-bold text-orange-800 mb-4 text-center">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqs.map((question, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-orange-200"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-4 py-3 text-left text-sm font-medium text-orange-900 flex items-center justify-between hover:bg-orange-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-amber-600" />
                        {index + 1}. {question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-amber-600 transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index ? 'max-h-40' : 'max-h-0'
                      }`}
                    >
                      <div className="px-4 pb-3 pt-1 text-xs text-gray-600">
                        {/* Placeholder - You can fill real answers */}
                        Answer for this question will be provided by AstroVastuGurusupport team.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}