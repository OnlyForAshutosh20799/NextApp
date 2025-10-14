"use client";

import Link from "next/link";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Kundli",
    href: "/kundli",
    subItems: [
      { label: "Free Kundli", href: "/kundli/free" },
      { label: "Premium Kundli Report", href: "/kundli/premium" },
      { label: "120 Year Dasha", href: "/kundli/120-year-dasha" },
      { label: "Gemstone Suggestion", href: "/kundli/gemstone" },
    ],
  },
  {
    label: "Horoscope",
    href: "/horoscope",
    subItems: [
      { label: "Today Horoscope", href: "/horoscope/today" },
      { label: "Weekly Horoscope", href: "/horoscope/weekly" },
      { label: "Monthly Horoscope", href: "/horoscope/monthly" },
      { label: "Yearly Horoscope", href: "/horoscope/yearly" },
    ],
  },
  {
    label: "Astrologer",
    href: "/astrologer",
    subItems: [
      { label: "Chat With Astrologer", href: "/astrologer/chat" },
      { label: "Call With Astrologer", href: "/astrologer/call" },
      { label: "Register as Astrologer", href: "/astrologer/register" },
    ],
  },
  {
    label: "Book Pooja",
    href: "/book-pooja",
    subItems: [
      { label: "Navgraha Pooja", href: "/book-pooja/navgraha" },
      { label: "Love & Relationship Pooja", href: "/book-pooja/love" },
      { label: "Health & Wealth Pooja", href: "/book-pooja/health" },
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

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg fixed top-0 left-0 z-50 px-5">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
             AstroVastuGuru
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex  items-center">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-800 text-[13px] lg:text-[16px] font-semibold hover:text-[#FD7E14] px-2 py-1 flex items-center  transition-all"
                >
                  {item.label}
                </Link>

                {/* DROPDOWN MENU */}
                {item.subItems && (
                  <div
                    className="absolute left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 
                    translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 ease-out"
                  >
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-[#FD8115] hover:to-[#FFCC33] hover:text-white rounded-lg transition-all"
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
          <div className="hidden ml-5 text-sm px-3 py-2 rounded-full text-white font-semibold  shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 md:flex items-center justify-center bg-gradient-to-r from-[#FD8115] to-[#FFCC33] hover:from-[#FFCC33] hover:to-[#FD8115]">
            <Link href="/kundli/free" className="text-nowrap">
              Get Free Kundli
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center justify-center gap-3">  
             {/* FREE KUNDLI BUTTON */}
          <div className="text-nowrap ml-5 text-xs sm:text-sm px-3 py-1 rounded-4xl sm:rounded-full text-white font-semibold  shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 flex items-center justify-center bg-gradient-to-r from-[#FD8115] to-[#FFCC33] hover:from-[#FFCC33] hover:to-[#FD8115]">
            <Link href="/kundli/free" className="">
              Get Free Kundli
            </Link>
          </div>      
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
                  <Link href={item.href}>{item.label}</Link>
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

            {/* EXTRA BUTTON */}
            <Link
              href="/career"
              className="block bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white text-center font-bold px-4 py-2 rounded-full shadow-md hover:shadow-lg mt-3"
            >
              🚀 We’re Hiring
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
