"use client";
import React from 'react';
import Link from 'next/link';
import { Factory, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

const Resources = () => {
  const factories = [
    {
      name: 'Site de Treichville',
      location: 'Abidjan, Zone Portuaire',
      capacity: '50,000 tonnes/an',
      activities: ['Réception', 'Stockage', 'Contrôle Qualité', 'Exportation'],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=85',
    },
    {
      name: 'Complexe PK24',
      location: 'Autoroute du Nord',
      capacity: '100,000 tonnes/an',
      activities: ['Transformation', 'Conditionnement', 'Stockage', 'Laboratoire'],
      image: 'https://images.unsplash.com/photo-1684695749267-233af13276d0?q=85',
    },
    {
      name: 'Site de San-Pedro',
      location: 'Zone Industrielle',
      capacity: '75,000 tonnes/an',
      activities: ['Collecte', 'Traitement', 'Stockage', 'Exportation'],
      image: 'https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg',
    },
  ];

  const cooperatives = [
    {
      region: 'Ouest',
      count: 35,
      producers: '5,200+',
      production: 'Cacao, Café',
    },
    {
      region: 'Sud',
      count: 28,
      producers: '4,100+',
      production: 'Cacao',
    },
    {
      region: 'Centre',
      count: 22,
      producers: '3,800+',
      production: 'Café, Anacarde',
    },
    {
      region: 'Nord',
      count: 15,
      producers: '2,500+',
      production: 'Anacarde',
    },
  ];

  const certifications = [
    {
      name: 'Rainforest Alliance',
      description: 'Certification pour une agriculture durable et responsable',
      year: '2018',
    },
    {
      name: 'UTZ Certified',
      description: 'Programme de durabilité pour le cacao et le café',
      year: '2019',
    },
    {
      name: 'ISO 9001',
      description: 'Management de la qualité',
      year: '2020',
    },
    {
      name: 'Fair Trade',
      description: 'Commerce équitable certifié',
      year: '2021',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2E7D32] to-[#1e5922] py-24">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
            Nos Ressources
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ lineHeight: '170%' }}>
            Un réseau d'infrastructures et de partenariats au service de l'excellence
          </p>
        </div>
      </div>

      {/* Factories Section */}
      <div className="py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2E7D32]/10 rounded-2xl">
              <Factory size={32} strokeWidth={1.5} className="text-[#2E7D32]" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#2E7D32]" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
                Nos Usines
              </h2>
              <p className="text-[#5D4037]" style={{ lineHeight: '170%' }}>Infrastructures modernes et performantes</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {factories.map((factory, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div 
                  className="h-64 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${factory.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{factory.name}</h3>
                    <p className="text-white/80 text-sm">{factory.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-[#6B7280]">CAPACITÉ</span>
                    <span className="text-lg font-bold text-[#D79A12]">{factory.capacity}</span>
                  </div>
                  <div className="space-y-2">
                    {factory.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={16} strokeWidth={1.5} className="text-[#2E7D32]" />
                        <span className="text-sm text-[#5D4037]">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cooperatives Section */}
      <div className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2E7D32]/10 rounded-2xl">
              <Users size={32} strokeWidth={1.5} className="text-[#2E7D32]" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#2E7D32]" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
                Nos Coopératives
              </h2>
              <p className="text-[#5D4037]" style={{ lineHeight: '170%' }}>Un réseau de partenaires sur tout le territoire</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cooperatives.map((coop, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#2E7D32]/5 to-[#D79A12]/5 rounded-2xl p-8 border border-[#2E7D32]/10 hover:border-[#2E7D32]/30 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#2E7D32] mb-2">{coop.count}</div>
                  <div className="text-sm font-semibold text-[#D79A12] mb-4">RÉGION {coop.region.toUpperCase()}</div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-[#5D4037]">{coop.producers}</div>
                    <div className="text-xs text-[#6B7280]">PRODUCTEURS</div>
                    <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                      <div className="text-sm text-[#5D4037]">{coop.production}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2E7D32] text-white font-semibold rounded-lg hover:bg-[#265D28] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Rejoindre Notre Réseau
              <ArrowRight size={20} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2E7D32]/10 rounded-2xl">
              <Award size={32} strokeWidth={1.5} className="text-[#2E7D32]" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#2E7D32]" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
                Nos Certifications
              </h2>
              <p className="text-[#5D4037]" style={{ lineHeight: '170%' }}>Engagés pour la qualité et la durabilité</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D79A12]/10 rounded-2xl flex-shrink-0">
                  <Award size={32} strokeWidth={1.5} className="text-[#D79A12]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#2E7D32]">{cert.name}</h3>
                    <span className="text-sm font-semibold text-[#D79A12] bg-[#D79A12]/10 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-[#5D4037]" style={{ lineHeight: '170%' }}>{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#1e5922] py-16">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Découvrez comment nos ressources peuvent servir vos projets
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D79A12] text-white font-semibold rounded-lg hover:bg-[#c18910] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Contactez-Nous
            <ArrowRight size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;