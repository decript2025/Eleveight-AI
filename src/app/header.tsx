'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { ReservationDialog } from './ReservationDialog';


export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only apply scroll-based hiding on home page
      if (pathname === '/') {
        const toggleHeight = window.innerWidth < 600? 80 : 240;
        if (currentScrollY > toggleHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Always show header on all other pages
        setIsVisible(true);
      }
      
      // Scroll spy logic
      const sections = ['contact'];
      const sectionElements = sections.map(id => ({
        id,
        element: document.getElementById(id)
      })).filter(s => s.element);

      // Check if we're at the bottom of the page (for contact)
      const isAtBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 100;
      
      let current = '';
      
      if (isAtBottom) {
        current = 'contact';
      } else {
        // Find which section is most visible in viewport
        for (const section of sectionElements) {
          const rect = section.element!.getBoundingClientRect();
          // Use top of viewport as reference point (better for scroll up/down)
          if (rect.top <= 200 && rect.bottom >= 100) {
            current = section.id;
          }
        }
      }
      
      setActiveSection(current);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, pathname]);

  // Set initial visibility based on pathname
  useEffect(() => {
    if (pathname === '/') {
      // On home page, start hidden (will show on scroll)
      setIsVisible(false);
    } else {
      // On all other pages, always show header
      setIsVisible(true);
    }
  }, [pathname]);

  return (
    <header
      className={`fixed p-5 top-0 w-full z-[1000] bg-background text-foreground px-8 py-5 transition-all duration-300 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center gap-10">
        <Link href="/">
          <Image
            className="dark:invert w-[124px] h-auto md:w-[184px]"
            src="/logo.svg"
            alt="Eleveight AI"
            width={184}
            height={44}
            priority
          />
        </Link>
        
        <div className="hidden md:inline-block w-full flex justify-between items-center gap-10">
          <span className="flex gap-8">
            <Link
              href="/company"
              className="text-sm min-w-[60px] relative transition-colors duration-300 hover:font-bold after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-foreground after:-bottom-[20px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Company
            </Link>
            <Link
              href="/news"
              className="text-sm min-w-[40px] relative transition-colors duration-300 hover:font-bold after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-foreground after:-bottom-[20px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              News
            </Link>
            <Link
              href="/contacts"
              className="text-sm min-w-[60px] relative transition-colors duration-300 hover:font-bold after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-foreground after:-bottom-[20px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </span>
        </div>

        <ReservationDialog />
      </nav>
    </header>
  );
};