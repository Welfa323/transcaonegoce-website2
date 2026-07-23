"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'À Propos', path: '/about' },
    { label: 'Durabilité', path: '/sustainability' },
    { label: 'Filière', path: '/filiere' },
    { label: 'Ressources', path: '/resources' },
    { label: 'Galerie', path: '/gallery' },
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: FaFacebook, url: 'https://web.facebook.com/TranscaoNeg/', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://x.com/TranscaoN', label: 'Twitter' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/transcao-n%C3%A9goce-66224a252/', label: 'LinkedIn' },
    { icon: FaYoutube, url: 'https://www.youtube.com/channel/UCFOjed2KVvRxfhcnhqYXVvA', label: 'YouTube' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Top Bar with Social Links */}
        <div className="flex justify-end items-center py-3 border-b border-[#E5E7EB]">
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] hover:text-[#2E7D32] transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_cocoa-commerce-7/artifacts/995oywbh_image.png" 
              alt="TRANSCAO NÉGOCE" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2E7D32] text-white'
                      : 'text-[#374151] hover:bg-[#F3F4F6] hover:text-[#2E7D32]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#374151] hover:text-[#2E7D32] transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E7EB] bg-white">
          <nav className="max-w-[1440px] mx-auto px-8 py-4 flex flex-col gap-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2E7D32] text-white'
                      : 'text-[#374151] hover:bg-[#F3F4F6] hover:text-[#2E7D32]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
