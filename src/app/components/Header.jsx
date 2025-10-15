"use client";

import Link from "next/link";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Kundli",
    subItems: [
      { label: "Free Kundli", href: "/kundli/free" },
      { label: "Premium Kundli Report", href: "/kundli/premium" },
      { label: "120 Year Dasha", href: "/kundli/120-year-dasha" },
      { label: "Gemstone Suggestion", href: "/kundli/gemstone" },
    ],
  },
  {
    label: "Horoscope",
    subItems: [
      { label: "Today Horoscope", href: "/horoscope/today" },
      { label: "Weekly Horoscope", href: "/horoscope/weekly" },
      { label: "Monthly Horoscope", href: "/horoscope/monthly" },
      { label: "Yearly Horoscope", href: "/horoscope/yearly" },
    ],
  },
  {
    label: "Astrologer",
    subItems: [
      { label: "Astrologer Profile", href: "/pages/astrology/astrologyProfile/profileList" },
      { label: "Chat With Astrologer", href: "/pages/astrology/astrologyProfile/profileList?type=Chat with" },
      { label: "Call With Astrologer", href: "/pages/astrology/astrologyProfile/profileList?type=Call with" },
      { label: "Register as Astrologer", href: "/pages/astrology/astrologyProfile/PartnershipRegistration" },
      { label: "Astrologer Login", href: "/pages/astrology/astrologyProfile/astrologerLogin" },
    ],
  },
  {
    label: "Book Pooja",
    subItems: [
      { label: "Navgraha", href: "/book-pooja/navgraha" },
      { label: "Love & Relationship Pooja", href: "/book-pooja/love" },
      { label: "Pooja for Vashikaran", href: "/book-pooja/vashikaran" },
      { label: "Pooja for Career", href: "/book-pooja/poojaForCareer" },
      { label: "Pooja for Finance", href: "/book-pooja/poojaForFinance" },
      { label: "Pooja for Education", href: "/book-pooja/poojaForEducation" },
      { label: "Pooja for Travel", href: "/book-pooja/poojaForTravel" },
      { label: "Pooja for Child Birth", href: "/book-pooja/poojaForChileBirth" },
      { label: "Pooja for Planetary", href: "/book-pooja/poojaForPlanetary" },
      { label: "Pooja for Marriage", href: "/book-pooja/poojaForMarriage" },
      { label: "Pooja for Health", href: "/book-pooja/poojaForHealth" },
      { label: "Nakshtra Pooja", href: "/book-pooja/nakshtraPooja" },
      { label: "Dosh", href: "/book-pooja/dosh" },
      { label: "Pooja for Overcome Enemies", href: "/book-pooja/poojaForOvercomeEnemies" },
      { label: "Path and Jaap", href: "/book-pooja/pathAndJaap" },
      { label: "Evil Eye", href: "/book-pooja/evilEys" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubMenu = (label) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  const handleSubmenu =()=>{
    setMobileOpen(false)
  }

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg fixed top-0 left-0 z-50 px-5">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            AstroVastuGuru
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <div className="text-gray-800 text-[13px] lg:text-[16px] font-semibold px-2 lg:px-5 py-1 flex items-center hover:text-[#FD7E14] transition-all cursor-pointer">
                    {item.label}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-800 text-[13px] lg:text-[16px] font-semibold hover:text-[#FD7E14] px-2 lg:px-5 py-1 flex items-center transition-all"
                  >
                    {item.label}
                  </Link>
                )}

                {/* DROPDOWN MENU */}
                {item.subItems && (
                  <div
                    className="absolute left-0 mt-2 w-52 bg-white/90 rounded-xl shadow-lg border border-gray-100 opacity-0 
                    translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 ease-out"
                  >
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="text-sm block px-4 py-1 text-gray-700 hover:bg-gradient-to-r hover:from-[#FD8115] hover:to-[#FFCC33] hover:text-white rounded-lg transition-all"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* FREE KUNDLI BUTTON */}
          <div className="hidden ml-5 text-sm px-3 py-2 rounded-full text-white font-semibold shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 md:flex items-center justify-center bg-gradient-to-r from-[#FD8115] to-[#FFCC33] hover:from-[#FFCC33] hover:to-[#FD8115]">
            <Link href="/kundli/free">Get Free Kundli</Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center justify-center gap-3">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-800 hover:text-[#FD7E14] focus:outline-none"
            >
              {mobileOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-md border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <div
                  className="flex justify-between items-center px-3 py-2 text-gray-800 font-semibold hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    item.subItems ? toggleSubMenu(item.label) : null
                  }
                >
                  <span>{item.label}</span>
                  {item.subItems && (
                    <ChevronDownIcon
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${
                        openMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* SUBMENU */}
                {item.subItems && openMenu === item.label && (
                  <div className="pl-5 py-1 space-y-1 bg-gray-50 rounded-md">
                    {item.subItems.map((sub) => (
                      <Link
                      onClick={handleSubmenu}
                        key={sub.label}
                        href={sub.href}
                        className="block px-3 py-2 text-gray-700 hover:text-[#FD7E14] hover:bg-gray-100 rounded-md transition-all font-medium"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
