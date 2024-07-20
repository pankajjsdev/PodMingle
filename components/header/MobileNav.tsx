'use client'
import Link from 'next/link';
// components/HamburgerMenu.js
import { useState } from 'react';
import { ButtonPrimary, ButtonSecondary } from '../common/Button';

const HamburgerMenu = ({links}:{links:any}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-12 h-12 space-y-2"
      >
        <div
          className={`w-12 h-1 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <div
          className={`w-12 h-1 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
        />
        <div
          className={`w-12 h-1 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>
      {/* Menu content goes here */}
      {isOpen && (
        <div className="absolute top-12 right-0  bg-white shadow-lg p-4 rounded-lg">
          {/* Menu items */}
          <div className='flex flex-col items-center space-y-3 p-8'>
                    <nav className='space-y-3'>
                        <ul className=''>
                            {links.map((link:any) => (
                                <li key={link.path} className='p-4 border my-3'>
                                    <Link href={link.path} className='text-black-dark text-base font-normal hover:text-yellow'>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className='my-3 space-y-3'>
                        <ButtonSecondary title='Log in' />
                        <ButtonPrimary title='Subscribe' />
                    </div>
                </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
