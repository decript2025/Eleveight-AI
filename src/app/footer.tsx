'use client';

import Link from 'next/link';
import { ReservationDialog } from './ReservationDialog';

export default function Footer() {
  return (
    <footer className="w-full h-[200px] bg-[#1E1D21] flex-shrink-0 relative text-white">
      <div className="absolute top-5 right-5">
        <ReservationDialog />
      </div>
      
      <div className="w-full h-full flex flex-col justify-center items-center pt-10 sm:pt-0">
        <div className="flex flex-col items-center gap-10">
          <Link 
            href="/faq" 
            className="text-xl font-bold hover:opacity-80 transition-opacity duration-200"
          >
            FAQ
          </Link>
          <p className="text-sm text-white">
            Eleveight AI. 2025 All rights reserved ©
          </p>
        </div>
      </div>
    </footer>
  );
}