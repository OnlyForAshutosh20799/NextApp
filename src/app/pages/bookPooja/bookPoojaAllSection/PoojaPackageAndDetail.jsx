'use client';

import React from 'react';
import { Calendar, Flower, Heart, Package, Printer, Send, Shield, Sparkles, Star, ChevronRight } from 'lucide-react';

export default function PoojaPackageAndDetail() {
  const inclusions = [
    { icon: Calendar, text: "Pooja Space Booking" },
    { icon: Flower, text: "Fresh Fruits and Flowers" },
    { icon: Heart, text: "Priest Dakshina, General Donations and Prasad" },
    { icon: Package, text: "Priest Fees along with Breakfast or Lunch" },
    { icon: Sparkles, text: "Complete Pooja Samagri" },
    { icon: Printer, text: "Printed Customer Life Prediction Report" },
    { icon: Shield, text: "Energized Rudraksha and Yantra" },
    { icon: Send, text: "Free Shipping for the Prasad Box" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="">
          
          {/* Left Column - Image Placeholder */}
          

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <div className="bg-gradient-to-br from-[#FD7E14] via-[#FFCC33] to-[#FF9F1C] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <span className="bg-white text-orange-600 font-bold px-4 py-1 rounded-full text-sm">
                    PERSONALISED POOJA
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Kaal Sarp Dosh Nivaran Puja
                </h1>
                
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                    <Send className="w-3 h-3 mr-1" />
                    FREE SHIPPING
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The <span className="font-semibold text-orange-600">Kaal Sarp Dosh Nivaran Puja</span> offered by AstroVastuGuruCompany is a powerful ritual that helps in alleviating the negative effects of Kaal Sarp Dosh in one's horoscope. This puja is performed by experienced priests who chant mantras & perform rituals to appease the serpent god & seek his blessings.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    The benefits of this puja include <span className="font-semibold text-amber-600">protection from malefic effects, improved health, wealth & overall well-being</span>. It also helps in overcoming obstacles & achieving success in various aspects of life.
                  </p>
                </div>

                <hr className="my-8 border-gray-200" />

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Package className="w-7 h-7 text-orange-600" />
                    Pooja Package Includes the Following at No Extra Cost:
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    {inclusions.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-start gap-3 group">
                          <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl p-2 group-hover:from-orange-200 group-hover:to-amber-200 transition-all duration-300 flex-shrink-0">
                            <Icon className="w-5 h-5 text-orange-600" />
                          </div>
                          <span className="text-gray-700 font-medium pt-1">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button className="group relative overflow-hidden bg-gradient-to-br from-[#FD7E14] via-[#FFCC33] to-[#FF9F1C] hover:from-orange-700 hover:to-amber-700 text-white font-bold text-lg px-8 py-3 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <span>Book Now</span>
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  </button>
                  
                  <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold text-lg px-8 py-3 rounded-2xl transition-all duration-300">
                    Learn More
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Rudraksha, Energised Yantra, Prasad, Printed Life Prediction, Mantra Book
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}