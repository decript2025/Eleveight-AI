import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full h-[200px] bg-[#1E1D21] flex-shrink-0 flex flex-col justify-center items-center text-white">
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
    </footer>
  );
}