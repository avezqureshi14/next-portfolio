import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import HamburgerIcon from '../assets/icons/hamburger';
import CrossIcon from '../assets/icons/cross';

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeNavbarColor = () =>
    window.scrollY >= 80 ? setColorChange(true) : setColorChange(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);

  return (
    <nav
      className={`text-darkBlue flex justify-between p-4 sticky top-0 w-full navbar transition-all ease-linear duration-300 ${
        colorChange ? 'bg-white shadow-lg' : 'bg-[#EFF6FF] shadow-none'
      }  `}
    >
      <div
        className={`
      ${
        isMenuOpen
          ? 'bg-white sm:bg-transparent p-3 sm:p-0 drop-shadow-md sm:drop-shadow-none'
          : 'bg-transparent'
      } w-full rounded-t-lg relative flex justify-between transition-all ease-linear `}
      >
        <h1 className='name text-xl sm:text-2xl'>Burhan Haroon</h1>
        <nav
          className={`${
            isMenuOpen
              ? 'bg-white sm:bg-transparent flex gap-2 sm:gap-5 flex-col sm:flex-row top-[3rem] sm:top-0 absolute sm:relative m-auto sm:m-0 left-0 right-0 rounded-b-lg p-3 sm:p-0 text-base sm:text-lg'
              : 'hidden sm:flex gap-5 text-lg'
          } transition-all ease-linear`}
        >
          <Link href='/'>
            <div className='hover:bg-blue-50 p-2 sm:p-0 rounded-md'>Home</div>
          </Link>
          <a
            href='https://dev.to/burhanharoon'
            target='_blank'
            rel='noreferrer'
            className='hover:bg-blue-50 p-2 sm:p-0 rounded-md'
          >
            Blogs
          </a>
          <a
            href='https://www.linkedin.com/in/burhandev'
            target='_blank'
            rel='noreferrer'
            className='hover:bg-blue-50 p-2 sm:p-0 rounded-md'
          >
            Contact Me
          </a>
        </nav>
        <button
          className='block sm:hidden h-8 w-8 hover:bg-blue-50 p-1 rounded-md'
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <CrossIcon /> : <HamburgerIcon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
