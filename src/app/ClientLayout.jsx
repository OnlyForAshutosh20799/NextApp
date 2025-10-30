"use client";

import { usePathname } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const hideGlobalLayout = pathname.includes("/profilePages");

  return (
    <>
      {!hideGlobalLayout && <Header />}
      {children}
      {!hideGlobalLayout && <Footer />}
    </>
  );
}
