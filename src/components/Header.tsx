'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Designs', href: '/designs' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="bg-white shadow-lg w-full h-fit py-2 px-8 fixed top-0 z-50">

      <div className='flex items-center justify-between flex-1'>
        <div className='flex-[0.2]'>
          <Link href="/" className='text-black font-bold text-2xl'>YALTLAB</Link>
        </div>

        <div className='flex-[0.4] bg-[#121212] text-[#D9D9D9]/90 px-8 py-3 space-x-3 rounded-[11px] font-light text-base flex items-center justify-evenly'>
          <Link href="/services">Services</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/designs">Designs</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
        </div>

        <div className='flex-[0.2] flex items-center justify-end'>
          <button className='bg-[#A4FFBC] text-black font-extrabold px-6 py-3 rounded-[11px] text-sm shadow-2xl'>BOOK A CALL</button>
        </div>
      </div>
    </nav>
  );
}


export default Header;