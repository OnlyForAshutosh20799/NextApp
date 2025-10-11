"use client";

import Link from "next/link";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";

const navItems = [
    { label: "Home", href: "/Home" },
    {
        label: "Kundli",
        href: "/kundli",
        subItems: [
            { label: "Free Kundli", href: "/kundli/free" },
            { label: "120 Year Dasha", href: "/kundli/120-year-dasha" },
        ],
    },
    {
        label: "Horoscope",
        href: "/horoscope",
        subItems: [
            { label: "Today", href: "/horoscope/today" },
            { label: "Monthly", href: "/horoscope/monthly" },
        ],
    },
    {
        label: "Astrologer",
        href: "/astrologer",
        subItems: [
            { label: "Chat With Astrologer", href: "/astrologer/chat" },
            { label: "Call With Astrologer", href: "/astrologer/call" },
            { label: "Register", href: "/astrologer/register" },
        ],
    },
    {
        label: "Book Pooja",
        href: "/book-pooja",
        subItems: [
            { label: "Navgraha", href: "/book-pooja/navgraha" },
            { label: "Pooja for Love", href: "/book-pooja/love" },
        ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Career", href: "/career" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null); // to track which submenu is open

    const toggleSubMenu = (label) => {
        setOpenMenu(openMenu === label ? null : label);
    };

    return (
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                       <div className="text-4xl">DUASTR</div>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex space-x-6 items-center">
                        {navItems.map((item) => (
                            <div key={item.label} className="relative group">
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-[#FF5722] px-2 py-1 flex items-center gap-1 font-bold"
                                >
                                    {item.label}
                                </Link>

                                {item.subItems && (
                                    <div className="py-2 absolute left-0 mt-0 w-48 bg-white border border-gray-200 shadow-lg rounded-xl
                                                     opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                                                                invisible group-hover:visible transition-all duration-300 ease-out">
                                        {item.subItems.map((sub) => (
                                            <Link
                                                key={sub.label}
                                                href={sub.href}
                                                className="font-bold  border-b-1 border-gray-200 block px-4 py-2 text-gray-700 hover:bg-[#FD7E14] hover:text-orange-600 "
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}

                            </div>
                        ))}
                         <div className=" bg-gradient-to-r from-[#FD8115] to-[#FFCC33] px-4 py-1  rounded-full flex items-center justify-center cursor-pointer">
                       <div className="">Free Kundli</div>
                    </div>
                    </nav>

                    {/* Mobile hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
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

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <div key={item.label}>
                                <div
                                    className="flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    onClick={() =>
                                        item.subItems ? toggleSubMenu(item.label) : null
                                    }
                                >
                                    <Link href={item.href}>{item.label}</Link>
                                    {item.subItems && (
                                        <ChevronDownIcon
                                            className={`w-4 h-4 text-gray-500 transform transition-transform ${openMenu === item.label ? "rotate-180" : ""
                                                }`}
                                        />
                                    )}
                                </div>

                                {/* Mobile Submenu */}
                                {item.subItems && openMenu === item.label && (
                                    <div className=" py-2 border-1 shadow-md rounded-xl border-gray-200">
                                        {item.subItems.map((sub) => (
                                            <Link
                                                key={sub.label}
                                                href={sub.href}
                                                className="block font-bold  border-b-1 border-gray-200 block px-4 py-2 text-gray-700 hover:bg-[#FD7E14] hover:text-orange-600"
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <Link
                            href="/career"
                            className="block px-3 py-2 text-blue-600 font-semibold hover:bg-gray-100"
                        >
                            We’re Hiring
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
