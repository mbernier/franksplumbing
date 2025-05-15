import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import Logo from '../shared/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
    `block py-2 px-4 transition-colors duration-200 ${
      isActive 
        ? 'text-brand-red font-semibold' 
        : 'text-brand-darkGrey hover:text-brand-red'
    }`;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-water-drops ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
          <Logo className="h-12 md:h-14" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
          <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
        </nav>

        {/* Phone CTA */}
        <a 
          href="tel:7206482782"
          className="hidden md:flex items-center bg-brand-blue text-white px-6 py-2 rounded-full font-bold text-lg shadow hover:bg-opacity-90 transition-all duration-200"
        >
          <Phone className="mr-2 h-5 w-5" />
          <span className="font-bold">(720) 648-2782</span>
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-brand-darkGrey hover:text-brand-red focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container-custom py-4 flex flex-col">
            <NavLink to="/" className={navLinkClasses} onClick={closeMenu} end>Home</NavLink>
            <NavLink to="/services" className={navLinkClasses} onClick={closeMenu}>Services</NavLink>
            <NavLink to="/about" className={navLinkClasses} onClick={closeMenu}>About Us</NavLink>
            <NavLink to="/contact" className={navLinkClasses} onClick={closeMenu}>Contact</NavLink>
            <a 
              href="tel:7206482782"
              className="flex items-center mt-4 bg-brand-blue text-white px-6 py-2 rounded-full font-bold text-lg shadow"
            >
              <Phone className="mr-2 h-5 w-5" />
              <span className="font-bold">Call Now: (720) 648-2782</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;