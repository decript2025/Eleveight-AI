'use client';

import Image from 'next/image';
import { useEffect, useState } from "react";
import { ReservationDialog } from './ReservationDialog';
// import { ReservationDialog } from "@/components/ReservationDialog";


export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      //toggle header
      const toggleHeight = window.innerWidth < 600? 80 : 240;
      if (currentScrollY > toggleHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Scroll spy logic
      const sections = ['about', 'features', 'contact'];
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
  }, [lastScrollY]);

  return (
    <header
      className={`fixed p-5 top-0 w-full z-[1000] bg-background text-foreground px-8 py-5 transition-all duration-300 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center gap-20">
        <div className='w-[184px] h-[44px]'>
          <Image
            className="dark:invert"
            src="/logo.svg"
            alt="Eleveight AI"
            width={184}
            height={44}
            priority
          />
        </div>
        
        <div className="hidden w-full flex justify-between items-center gap-10">
          <span className="flex gap-8">
            <a
              href="#about"
              className={`text-sm min-w-[60px] relative transition-colors duration-300 hover:font-bold after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-foreground after:-bottom-[20px] after:left-0 after:transition-all after:duration-300 hover:after:w-full ${
                activeSection === 'about' ? 'font-bold after:w-full' : 'after:w-0'
              }`}
            >
              About
            </a>
            <a
              href="#features"
              className={`text-sm min-w-[60px] relative transition-colors duration-300 hover:font-bold after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-foreground after:-bottom-[20px] after:left-0 after:transition-all after:duration-300 hover:after:w-full ${
                activeSection === 'features' ? 'font-bold after:w-full' : 'after:w-0'
              }`}
            >
              Features
            </a>
            <a
              href="#contact"
              className={`text-sm min-w-[60px] relative transition-colors duration-300 hover:font-bold after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-foreground after:-bottom-[20px] after:left-0 after:transition-all after:duration-300 hover:after:w-full ${
                activeSection === 'contact' ? 'font-bold after:w-full' : 'after:w-0'
              }`}
            >
              Contact
            </a>
          </span>
        </div>

        <ReservationDialog />
      </nav>
    </header>
  );
};