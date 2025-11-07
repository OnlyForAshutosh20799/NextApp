'use client';

import React from 'react';
import { Sparkles, Heart, Shield, Star, Zap, Users } from 'lucide-react';

export default function PoojaBenefits() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Kaal Sarp Dosh",
      description: "Kaal Sarp Dosh Nivaran Puja Is A Powerful Ritual That Helps In Reducing The Negative Effects Of Kaal Sarp Dosh In One'S Horoscope. The Online Pooja Service From Duastro Provides A Convenient And Effective Way To Perform This Puja From The Comfort Of Your Home, Helping To Bring Peace And Harmony In Your Life.",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: Heart,
      title: "Nivaran Puja",
      description: "The Kaal Sarp Dosh Nivaran Puja Is A Powerful Ritual That Helps In Removing The Negative Effects Of The Kaal Sarp Dosh In One'S Horoscope. The Online Pooja Service From Duastro Makes It Easy For Individuals To Participate In This Puja From The Comfort Of Their Own Homes, Ensuring A Smooth And Effective Nivaran Puja Experience.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Astrological Remedies",
      description: "Kaal Sarp Dosh Nivaran Puja Is A Powerful Astrological Remedy To Alleviate The Negative Effects Of Kaal Sarp Dosh In One'S Birth Chart. The Online Pooja Service From Duastro Helps In Performing This Puja With Expert Guidance And Rituals, Providing Relief From Obstacles And Enhancing Overall Well-Being.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Star,
      title: "Negative Effects",
      description: "Kaal Sarp Dosh Nivaran Puja Is A Powerful Ritual That Helps In Reducing The Negative Effects Of Kaal Sarp Dosh In One'S Horoscope. This Online Pooja Service From Duastro Provides A Convenient Way To Perform The Puja And Seek Blessings To Overcome Obstacles And Achieve Success In Life.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Solutions",
      description: "Kaal Sarp Dosh Nivaran Puja Is A Powerful Ritual In Astrology That Helps In Reducing The Malefic Effects Of Kaal Sarp Dosh In One'S Horoscope. The Online Pooja Service From Duastro Provides A Convenient And Effective Solution For Individuals Seeking Relief From This Dosh, Offering Guidance And Remedies To Overcome Obstacles And Achieve Success.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Astrologer Recommendations",
      description: "Kaal Sarp Dosh Nivaran Puja Is A Powerful Ritual That Helps In Alleviating The Negative Effects Of Kaal Sarp Dosh In One'S Horoscope. The Online Pooja Service From Duastro Provides Expert Astrologer Recommendations And Guidance On Performing This Puja Effectively, Ensuring A Smooth And Successful Outcome For The Individual.",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            Kaal Sarp Dosh Nivaran Puja Benefits
          </h2>
          <div className="mt-3 h-1 w-32 mx-auto bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Background */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${benefit.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700`}></div>

                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-white/30 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-3 shadow-lg mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    {benefit.description}
                  </p>

                  {/* Decorative Sparkle */}
                  <Sparkles className="w-5 h-5 text-amber-400 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}