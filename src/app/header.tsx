'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReservationDialog } from './ReservationDialog';

export default function Header() {
  const pathname = usePathname() || '';

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className={`fixed p-5 top-0 w-full z-[1000] bg-background text-foreground px-8 py-5`}>
      <nav className="flex justify-between items-center gap-10">
        <Link href="/">
          <Image
            className="dark:invert w-[124px] h-auto md:w-[184px]"
            src="/logo.svg"
            alt="Eleveight AI"
            width={184}
            height={44}
            priority
            unoptimized
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Link>
        
        <div className="hidden md:inline-block w-full flex justify-between items-center gap-10">
          <span className="flex gap-8">
            <Link
              href="/company"
              className={`text-sm min-w-[60px] relative transition-colors duration-300 hover:font-bold after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-foreground after:-bottom-[20px] after:left-0 after:transition-all after:duration-300 after:w-0 hover:after:w-full ${isActive('/company') ? 'font-bold after:w-full' : ''}`}
            >
              Company
            </Link>
            <Link
              href="/contacts"
              className={`text-sm min-w-[60px] relative transition-colors duration-300 hover:font-bold after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-foreground after:-bottom-[20px] after:left-0 after:transition-all after:duration-300 after:w-0 hover:after:w-full ${isActive('/contacts') ? 'font-bold after:w-full' : ''}`}
            >
              Contact
            </Link>
            <Link
              href="/news"
              className={`text-sm min-w-[40px] relative transition-colors duration-300 hover:font-bold after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-foreground after:-bottom-[20px] after:left-0 after:transition-all after:duration-300 after:w-0 hover:after:w-full ${isActive('/news') ? 'font-bold after:w-full' : ''}`}
            >
              News
            </Link>
          </span>
        </div>

        <ReservationDialog />
      </nav>
    </header>
  );
}