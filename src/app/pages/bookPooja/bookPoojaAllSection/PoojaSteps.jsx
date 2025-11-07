'use client';

import React from 'react';
import { Calendar, Clock, Users, Package, Mail, Send, CheckCircle, Sparkles } from 'lucide-react';

export default function PoojaSteps() {
  const steps = [
    {
      icon: Calendar,
      title: "BOOK POOJA",
      description: "Book the Kaal Sarp Dosh Nivaran Puja with your complete date of birth and detailed requirements.",
      color: "from-amber-500 to-orange-600",
      delay: "animate-fade-in"
    },
    {
      icon: Clock,
      title: "POOJA DATE & TIME",
      description: "You will receive Pooja Date and Time via call/Whatsapp/Email from an astrologer within 24 hours of placing your order.",
      color: "from-orange-600 to-red-600",
      delay: "animate-fade-in-delay-1"
    },
    {
      icon: Users,
      title: "JOIN POOJA ONLINE",
      description: "On the day of Kaal Sarp Dosh Nivaran Puja, you are invited to join us or the astrologer will provide you with a live pooja link where you can join them for the pooja.",
      color: "from-red-600 to-pink-600",
      delay: "animate-fade-in-delay-2"
    },
    {
      icon: CheckCircle,
      title: "KUNDLI & ANALYSE",
      description: "After Kaal Sarp Dosh Nivaran Puja, Astrologer will analyse your Kundli and write printed Life Prediction with remedies.",
      color: "from-pink-600 to-purple-600",
      delay: "animate-fade-in-delay-3"
    },
    {
      icon: Package,
      title: "PRASAD BOX",
      description: "After the completion of your Kaal Sarp Dosh Nivaran Puja, you will receive Special Prasad Box (Energised 5 Mukhi Rudhraksha & Pooja Yantra, Life Prediction printed report and Prasad) Free at your Door Step within 8-10 Days.",
      color: "from-purple-600 to-indigo-600",
      delay: "animate-fade-in-delay-4"
    }
  ];

  return (
    <section className="py-0 lg:py-15 bg-gradient-to-b from-white via-amber-50/50 to-orange-50/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            Pooja Steps
          </h2>
          <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`${step.delay} group relative`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Connecting Line (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent -z-10"></div>
                )}

                {/* Step Card */}
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"
                       style={{ backgroundImage: `linear-gradient(to bottom right, ${step.color.split(' ')[1]}, ${step.color.split(' ')[3]})` }}></div>

                  <div className="relative bg-white backdrop-blur-sm border border-gray-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                    {/* Icon Circle */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-3 shadow-lg mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      {step.title}
                      <Sparkles className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                      {step.description}
                    </p>

                    {/* Step Number Badge */}
                    <div className="mt-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 text-orange-600 font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; opacity: 0; }
        .animate-fade-in-delay-1 { animation: fadeIn 0.6s ease-out 0.15s forwards; opacity: 0; }
        .animate-fade-in-delay-2 { animation: fadeIn 0.6s ease-out 0.3s forwards; opacity: 0; }
        .animate-fade-in-delay-3 { animation: fadeIn 0.6s ease-out 0.45s forwards; opacity: 0; }
        .animate-fade-in-delay-4 { animation: fadeIn 0.6s ease-out 0.6s forwards; opacity: 0; }
      `}</style>
    </section>
  );
}