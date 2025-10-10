'use client';

import Link from 'next/link';
import { ReservationDialog } from './ReservationDialog';

export default function Footer() {
  return (
    <footer className="w-full h-[200px] bg-[#1E1D21] flex-shrink-0 relative text-white">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-8">
          <div className="md:hidden pt-5">
            <ReservationDialog />
          </div>
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