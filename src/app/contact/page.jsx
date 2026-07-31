"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const locations = [
    {
      name: 'Abidjan Treichville',
      address: 'Treichville - zone Portuaire, Rue des Thoniers',
      city: 'Abidjan, Côte d\'Ivoire',
      postal: '01 BP 1247 Abidjan 01',
      gps: '5.304855, -4.018827',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=85',
    },
    {
      name: 'Abidjan PK 24',
      address: 'Autoroute du Nord',
      city: 'PK24, Côte d\'Ivoire',
      gps: '5.244910, -4.858630',
      image: 'https://images.unsplash.com/photo-1684695749267-233af13276d0?q=85',
    },
    {
      name: 'San-Pedro',
      address: 'Zone Industrielle',
      city: 'San-Pedro, Côte d\'Ivoire',
      gps: 'À venir',
      image: 'https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message envoyé !',
      description: 'Nous vous répondrons dans les plus brefs délais.',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2E7D32] to-[#1e5922] py-24">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
            Contactez-Nous
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ lineHeight: '170%' }}>
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-[1280px] mx-auto px-8 -mt-12">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2E7D32]/10 rounded-2xl mb-6">
              <Phone size={32} strokeWidth={1.5} className="text-[#2E7D32]" />
            </div>
            <h3 className="text-xl font-bold text-[#2E7D32] mb-4">Téléphone</h3>
            <p className="text-[#5D4037] mb-2">(+225) 27 21 71 16 65</p>
            <p className="text-[#5D4037]">(+225) 27 21 71 16 69</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2E7D32]/10 rounded-2xl mb-6">
              <Mail size={32} strokeWidth={1.5} className="text-[#2E7D32]" />
            </div>
            <h3 className="text-xl font-bold text-[#2E7D32] mb-4">Email</h3>
            <p className="text-[#5D4037] mb-2">info@transcaonegoce.ci</p>
            <p className="text-[#5D4037]">transcaonegoce@gmail.com</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2E7D32]/10 rounded-2xl mb-6">
              <Clock size={32} strokeWidth={1.5} className="text-[#2E7D32]" />
            </div>
            <h3 className="text-xl font-bold text-[#2E7D32] mb-4">Horaires</h3>
            <p className="text-[#5D4037] mb-2">Lundi - Vendredi</p>
            <p className="text-[#5D4037] font-semibold">7h30 - 17h00</p>
          </div>
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-[#2E7D32] mb-6" style={{ letterSpacing: '-0.02em' }}>
              Envoyez-nous un Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#5D4037] mb-2">Nom complet</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32] transition-all duration-200"
                  placeholder="Votre nom"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#5D4037] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32] transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#5D4037] mb-2">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32] transition-all duration-200"
                    placeholder="+225..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5D4037] mb-2">Sujet</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32] transition-all duration-200"
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5D4037] mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32] transition-all duration-200 resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2E7D32] text-white font-semibold rounded-lg hover:bg-[#265D28] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Envoyer le Message
                <Send size={20} strokeWidth={1.5} />
              </button>
            </form>

            {/* Social Media */}
            <div className="mt-8 pt-8 border-t border-[#E5E7EB]">
              <h3 className="text-lg font-bold text-[#2E7D32] mb-4">Suivez-nous</h3>
              <div className="flex gap-4">
                <a href="https://web.facebook.com/TranscaoNeg/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#2E7D32]/10 hover:bg-[#2E7D32] flex items-center justify-center transition-all duration-200 group">
                  <FaFacebook size={20} className="text-[#2E7D32] group-hover:text-white transition-all duration-200" />
                </a>
                <a href="https://x.com/TranscaoN" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#2E7D32]/10 hover:bg-[#2E7D32] flex items-center justify-center transition-all duration-200 group">
                  <FaTwitter size={20} className="text-[#2E7D32] group-hover:text-white transition-all duration-200" />
                </a>
                <a href="https://www.linkedin.com/in/transcao-n%C3%A9goce-66224a252/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#2E7D32]/10 hover:bg-[#2E7D32] flex items-center justify-center transition-all duration-200 group">
                  <FaLinkedin size={20} className="text-[#2E7D32] group-hover:text-white transition-all duration-200" />
                </a>
                <a href="https://www.youtube.com/channel/UCFOjed2KVvRxfhcnhqYXVvA" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#2E7D32]/10 hover:bg-[#2E7D32] flex items-center justify-center transition-all duration-200 group">
                  <FaYoutube size={20} className="text-[#2E7D32] group-hover:text-white transition-all duration-200" />
                </a>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h2 className="text-3xl font-bold text-[#2E7D32] mb-6" style={{ letterSpacing: '-0.02em' }}>
              Nos Sites
            </h2>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                     <h3 className="text-xl font-bold text-[#2E7D32] mb-3">{location.name}</h3>
                    <div className="space-y-2 text-sm text-[#5D4037]">
                      <div className="flex items-start gap-2">
                        <MapPin size={16} strokeWidth={1.5} className="text-[#D79A12] mt-1 flex-shrink-0" />
                        <div>
                          <p>{location.address}</p>
                          <p>{location.city}</p>
                          {location.postal && <p className="font-semibold">{location.postal}</p>}
                          <p className="text-xs text-[#6B7280] mt-1">GPS: {location.gps}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;