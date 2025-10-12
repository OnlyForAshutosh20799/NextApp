"use client";

import { useEffect, useRef } from "react";

const data = {
    header: {
        reviews: "2000+ reviews",
        rating: "Rated 4.6 on Google - Check on Google",
        delivery: "Delivered over 600,000 positive kundli reports to happy users",
    },
    testimonials: [
        {
            text: "Mujhe apne love life ke bare mein clarity chahiye thi. Duastro ke astrologer ne mujhe patience aur solutions dono diye...",
            author: "- Yadav",
        },
        {
            text: "Chatting experience with Duastro astrologer was smooth. Unhone sab kuch calmly explain kiya. Kundli report well-organized...",
            author: "- Muhammad Yaseen",
        },
        {
            text: "Duastro ke astrologers highly experienced lage. Jo bhi bol, usme sachchayi. Astrology report clean, easy to read thi...",
            author: "- Vakani Kumar",
        },
        {
            text: "Excellent service and accurate predictions. My life has changed after consulting with Duastro astrologers.",
            author: "- Priya Sharma",
        },
        {
            text: "The kundli matching service helped me find the perfect life partner. Thank you Duastro!",
            author: "- Raj Patel",
        },
    ],
    sections: {
        onlineKundli: [
            "Career Horoscope", "Love Horoscope", "Health Forecast", "Education Horoscope",
            "Finance Horoscope", "Family Horoscope", "Legal Matters", "Foreign Travel",
            "Married Life", "Relationship", "Business Horoscope", "Disease Horoscope",
            "Childbirth Horoscope", "Planets Horoscope", "Houses Horoscope", "Gemstone Horoscope",
            "Doja Horoscope", "Lo Shu Grid", "Combo Offers",
        ],
        freeService: {
            services: ["Free Horoscope", "Free Astrology Prediction", "Free Horoscope Matching", "Free Janam Kundli", "Free Kemdras Jatakam", "Free Telugu Jathakam", "Yearly Horoscope"],
            "24Hour": ["2025 Career Horoscope", "2025-2026 Career Horoscope", "2025 Finance Horoscope", "2025 Health Horoscope", "2025 Education Horoscope", "2025 Family Horoscope", "Yearly Horoscope", "2025 Yearly Horoscope"],
            marriageMatching: ["Kundli Matching", "Kundli Milan", "Detailed Kundli Matching", "Ashlakoot Matching"],
        },
        astrologyPrediction: {
            horoscopes: ["Gemstone Horoscope", "Lo Shu Horoscope", "Lal Kitab Astrological Horoscope", "Sade Sati Horoscope", "Manglik Dosha Horoscope", "Pitra Dosha Horoscope", "In Depth Horoscope", "Birth Horoscope", "100 Years Calculator Horoscope"],
            loveCalculator: ["Flame Calculator", "Birth Compatibility", "Angel Calculator", "Marriage Calculator", "Death Calculator", "Raj Yog Calculator", "Zodiac Compatibility", "Love Partner Report", "Love Match Calculator", "Secret Crush Calculator", "Mobile Number Compatibility", "Account Number Calculator"],
        },
        corporateInfo: {
            info: ["About", "Disclaimer", "Privacy Policy", "Terms & Conditions", "Refund & Cancellation", "Contact Us", "Customer Support", "Duastro Stemap"],
            importantLinks: ["Blog", "Video Horoscope", "Online Puja", "Astrologer Chat", "Astrologer Profile", "Call Astrology", "Contact Us"],
            contact: {
                phone: "+91 98911 13300",
                whatsapp: "WhatsApp: +91 98911 13300",
                email: "info@duastro.com",
                social: ["/facebook-icon.png", "/twitter-icon.png", "/instagram-icon.png"],
            },
            ratings: ["⭐ Rated 4.8/5 by 45,000 users", "✅ Delivered over 600,000 positive kundli reports to happy users"],
        },
    },
    footer: "All Rights Reserved © 2025 Payback Mantra (duastro.com)",
};

export default function Footer() {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let animationId;
        let scrollAmount = 0;
        const scrollSpeed = 0.7; // Adjust speed here (pixels per frame)
        const gap = 20; // Gap between testimonials

        const scroll = () => {
            if (scrollContainer) {
                scrollAmount += scrollSpeed;

                const maxScroll = scrollContainer.scrollWidth / 2;

                // Reset scroll position when scrolled completely
                if (scrollAmount >= maxScroll) {
                    scrollAmount = 0;
                    scrollContainer.scrollLeft = 0;
                }

                scrollContainer.scrollLeft = scrollAmount;
            }
            animationId = requestAnimationFrame(scroll);
        };

        // Start scrolling
        animationId = requestAnimationFrame(scroll);

        // Cleanup function
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className=" bg-[#454545] text-white p-6">
            <header className="flex items-center justify-between flex-wrap gap-4 p-4 rounded">
                <div className="text-left flex items-center gap-4 justify-center">
                    <div className="flex flex-col items-left justify-center">
                        <div>
                            <span className="text-4xl text-blue-700">G</span>
                            <span className="text-4xl text-red-700">o</span>
                            <span className="text-4xl text-yellow-700">o</span>
                            <span className="text-4xl text-blue-700">g</span>
                            <span className="text-4xl text-green-700">l</span>
                            <span className="text-4xl text-red-700">e</span>
                        </div>
                        <div className="text-[10px] text-gray-300 font-bold">Reviews ⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="mt-2">
                        <div className="text-yellow-400 text-[18px] font-bold">2000+ reviews</div>
                        <div className="flex flex-row justify-center gap-1  text-[15px]"> <span className="text-yellow-400">Rated 4.6 on Google -</span><span className="text-white">Check on Google</span> </div>
                    </div>
                </div>
                <div className="text-right text-yellow-400">
                    <div>✅ Delivered over 600,000 positive kundli reports to happy users</div>
                    <div>⭐ Rated 4.8/5 by 45,000 users</div>
                </div>
            </header>

            {/* Auto-scrolling testimonials */}
            <section className="p-4 rounded mt-6">
                <div className="relative overflow-hidden">
                    <div
                        ref={scrollContainerRef}
                        className="flex space-x-5 overflow-x-hidden py-2"
                        style={{
                            scrollBehavior: 'auto', // Changed to auto for smoother animation control
                            width: '100%'
                        }}
                    >
                        {/* Duplicate testimonials for seamless looping */}
                        {[...data.testimonials, ...data.testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-80 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg p-4 shadow-md shadow-black m-2"
                            >
                                <p className="text-sm">{testimonial.text}</p>
                                <p className="text-right text-sm mt-2 font-semibold">{testimonial.author}</p>
                            </div>
                        ))}
                    </div>

                    {/* Gradient overlays for smooth edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#454545] to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#454545] to-transparent pointer-events-none"></div>
                </div>
            </section>

            <main className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 ">

                <section className=" p-4 rounded">
                    <h2 className="text-xl font-bold mb-2">Online Kundli</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        {data.sections.onlineKundli.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h2 className="text-xl font-bold mt-4 mb-2">Combo Offer</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        {data.sections.astrologyPrediction.loveCalculator.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className=" p-4 rounded">
                    <h2 className="text-xl font-bold mb-2">Free Service</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        {data.sections.freeService.services.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h2 className="text-xl font-bold mt-4 mb-2">Service in 24 Hour</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        {data.sections.freeService["24Hour"].map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h2 className="text-xl font-bold mt-4 mb-2">Marriage Matching</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        {data.sections.freeService.marriageMatching.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className=" p-4 rounded">
                    <h2 className="text-xl font-bold mb-2">Astrology Prediction</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        {data.sections.astrologyPrediction.horoscopes.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h2 className="text-xl font-bold mb-2">Combo Offer</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        {data.sections.astrologyPrediction.horoscopes.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    
                </section>

                <section className=" p-4 rounded col-span-4 md:col-span-1">
                    <h2 className="text-xl font-bold mb-2">Corporate Info</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        {data.sections.corporateInfo.info.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h2 className="text-xl font-bold mt-4 mb-2">Important Link</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        {data.sections.corporateInfo.importantLinks.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <p>{data.sections.corporateInfo.contact.phone}</p>
                        <p>{data.sections.corporateInfo.contact.whatsapp}</p>
                        <p>{data.sections.corporateInfo.contact.email}</p>
                        {/* <div className="flex space-x-2 mt-2">
                            {data.sections.corporateInfo.contact.social.map((src, index) => (
                                <a key={index} href="#"><img src={src} alt={`Social ${index}`} className="h-6" /></a>
                            ))}
                        </div> */}
                    </div>
                    
                </section>
            </main>
            <div className=" bg-[#4F5153] flex items-center justify-center mt-5 p-2 rounded">
                        <div className=" text-white-400">
                            {data.sections.corporateInfo.ratings.map((rating, index) => (
                                <p key={index}>{rating}</p>
                            ))}
                        </div>
                    </div>
            <footer className="mt-6 py-3 text-center bg-[#2A2A2A] ">
                <p>{data.footer}</p>
            </footer>
        </div>
    );
}