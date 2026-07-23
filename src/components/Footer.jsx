import React from 'react';
import { MapPin, Mail, Phone, Printer } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, url: 'https://web.facebook.com/TranscaoNeg/', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://x.com/TranscaoN', label: 'Twitter' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/transcao-n%C3%A9goce-66224a252/', label: 'LinkedIn' },
    { icon: FaYoutube, url: 'https://www.youtube.com/channel/UCFOjed2KVvRxfhcnhqYXVvA', label: 'YouTube' },
  ];

  const legalLinks = [
    { label: 'Politique de confidentialité', path: '/privacy' },
    { label: 'Politique de cookies', path: '/cookies' },
    { label: 'Termes et conditions', path: '/terms' },
    { label: 'Mentions légales', path: '/legal' },
  ];

  return (
    <footer className="bg-[#5D4037] text-white">
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_cocoa-commerce-7/artifacts/995oywbh_image.png" 
              alt="TRANSCAO NÉGOCE" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-white/80 mb-6" style={{ lineHeight: '170%' }}>
              Leader dans le négoce de cacao, café et anacarde en Côte d'Ivoire. Excellence, transparence et innovation depuis des décennies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2E7D32] flex items-center justify-center transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#D79A12]">Nous Contacter</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} strokeWidth={1.5} className="text-[#D79A12] mt-1 flex-shrink-0" />
                <div className="text-white/80 text-sm" style={{ lineHeight: '170%' }}>
                  Treichville - zone Portuaire,<br />
                  Rue des Thoniers<br />
                  01 BP 1247 Abidjan 01<br />
                  Côte d'Ivoire
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} strokeWidth={1.5} className="text-[#D79A12] flex-shrink-0" />
                <div className="text-sm">
                  <a href="mailto:info@transcaonegoce.ci" className="text-white/80 hover:text-[#D79A12] transition-colors duration-200">
                    info@transcaonegoce.ci
                  </a>
                  <br />
                  <a href="mailto:transcaonegoce@gmail.com" className="text-white/80 hover:text-[#D79A12] transition-colors duration-200">
                    transcaonegoce@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} strokeWidth={1.5} className="text-[#D79A12] flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  (+225) 27 21 21 68 28<br />
                  (+225) 27 21 21 68 25
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Printer size={20} strokeWidth={1.5} className="text-[#D79A12] flex-shrink-0" />
                <span className="text-white/80 text-sm">(+225) 27 21 25 94 54</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#D79A12]">Liens Utiles</h4>
            <div className="space-y-3">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="block text-white/80 hover:text-[#D79A12] transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-8 py-6 text-center text-white/60 text-sm">
          <p>© 2024 TRANSCAO NÉGOCE. Tous droits réservés. Reproduction interdite sans accord écrit.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
