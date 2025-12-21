'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

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
          <Link href="/" className='text-black text-3xl font-homevideo'>YALTLAB</Link>
        </div>

        <div className='flex-[0.4] bg-[#121212] text-[#D9D9D9]/90 px-8 py-3 space-x-3 rounded-[11px] font-light text-base flex items-center justify-evenly'>
          <Link href="/services">Services</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/designs">Designs</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
        </div>

        <div className='flex-[0.2] flex items-center justify-end'>
          <button className='bg-[#A4FFBC] text-black  px-6 py-1 rounded-[11px] text-lg shadow-2xl font-bebas flex items-center space-x-4'>
            <p>BOOK A CALL</p>

            <div className="w-[16px] h-[16px] rounded-sm bg-black flex items-center justify-center">
              <IoIosArrowRoundForward className="text-white -rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}


export default Header;