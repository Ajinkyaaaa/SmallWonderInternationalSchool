import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative w-16 h-16">
                  <Image
                    src="/images/logo.png"
                    alt="SmallWonder International School"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
                <span className="text-xl font-bold text-white hidden md:block">
                  SmallWonder International School
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="border-transparent text-white hover:border-yellow-300 hover:text-yellow-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="border-transparent text-white hover:border-yellow-300 hover:text-yellow-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About Us
              </Link>
              <Link href="/activities" className="border-transparent text-white hover:border-yellow-300 hover:text-yellow-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Activities
              </Link>
              <Link href="/gallery" className="border-transparent text-white hover:border-yellow-300 hover:text-yellow-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Gallery
              </Link>
              <Link href="/admission" className="border-transparent text-white hover:border-yellow-300 hover:text-yellow-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Admission
              </Link>
              <Link href="/enquiry" className="border-transparent text-white hover:border-yellow-300 hover:text-yellow-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Enquiry
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gradient-to-b from-purple-600 to-pink-600">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="bg-purple-700 border-yellow-300 text-yellow-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="border-transparent text-white hover:bg-purple-700 hover:border-yellow-300 hover:text-yellow-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              About Us
            </Link>
            <Link href="/activities" className="border-transparent text-white hover:bg-purple-700 hover:border-yellow-300 hover:text-yellow-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Activities
            </Link>
            <Link href="/gallery" className="border-transparent text-white hover:bg-purple-700 hover:border-yellow-300 hover:text-yellow-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Gallery
            </Link>
            <Link href="/admission" className="border-transparent text-white hover:bg-purple-700 hover:border-yellow-300 hover:text-yellow-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Admission
            </Link>
            <Link href="/enquiry" className="border-transparent text-white hover:bg-purple-700 hover:border-yellow-300 hover:text-yellow-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Enquiry
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 