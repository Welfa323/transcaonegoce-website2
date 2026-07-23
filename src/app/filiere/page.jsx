"use client";
import React from 'react';
import { Coffee, Leaf, TrendingUp, Users, ArrowRight, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

const Filiere = () => {
  const sectors = [
    {
      title: 'Le Café',
      description: 'Avant de vous permettre de déguster une bonne tasse de café, chaque grain aura dû mûrir lentement, être récolté et préparé soigneusement, avant d\'entreprendre un long voyage à travers les océans. Le café est une boisson énergisante psychotrope stimulante, obtenue à partir des graines torréfiées.',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=85',
      icon: Coffee,
      stats: [
        { label: 'Production Annuelle', value: '25,000 tonnes' },
        { label: 'Producteurs', value: '3,500+' },
        { label: 'Qualité', value: 'Grade 1 & 2' },
      ],
    },
    {
      title: 'Le Cacao',
      description: 'Les premières traces du cacao remontent à 5300 avant notre ère. Il existe depuis très longtemps et est consommé sous une forme ou une autre depuis des milliers d\'années. Le cacao n\'est pas seulement consommé comme boisson, les fèves de cacao servent également de monnaie d\'\u00e9change.',
      image: 'https://images.unsplash.com/photo-1493925410384-84f842e616fb?q=85',
      icon: Leaf,
      stats: [
        { label: 'Production Annuelle', value: '150,000 tonnes' },
        { label: 'Producteurs', value: '12,000+' },
        { label: 'Qualité', value: 'Supérieure' },
      ],
    },
  ];

  const ecosystem = [
    {
      title: 'Conseil du Café-Cacao',
      role: 'Régulation et développement de la filière',
      description: 'Institution de régulation créée pour encadrer et promouvoir la filière café-cacao en Côte d\'Ivoire.',
    },
    {
      title: 'CNRA',
      role: 'Recherche et innovation',
      description: 'Centre National de Recherche Agronomique pour l\'amélioration des cultures et des techniques.',
    },
    {
      title: 'Coopératives',
      role: 'Organisation des producteurs',
      description: 'Structures collectives regroupant les planteurs pour une meilleure commercialisation.',
    },
    {
      title: 'Exportateurs',
      role: 'Commercialisation internationale',
      description: 'Acteurs comme TRANSCAO NÉGOCE assurant l\'exportation vers les marchés mondiaux.',
    },
  ];

  const challenges = [
    {
      title: 'Durabilité Environnementale',
      description: 'Promouvoir des pratiques agricoles respectueuses de l\'environnement et de la biodiversité.',
      icon: Leaf,
    },
    {
      title: 'Amélioration de la Qualité',
      description: 'Investir dans la formation et les équipements pour produire des fèves de qualité supérieure.',
      icon: TrendingUp,
    },
    {
      title: 'Bien-être des Producteurs',
      description: 'Garantir des revenus équitables et améliorer les conditions de vie des planteurs.',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1573710661345-610f790e1218?q=85)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        
        <div className="relative max-w-[1280px] mx-auto px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
              La Filière Café-Cacao
            </h1>
            <p className="text-xl text-white/90" style={{ lineHeight: '170%' }}>
              Un secteur stratégique pour l'économie ivoirienne, au cœur de notre expertise depuis plus de 20 ans
            </p>
          </div>
        </div>
      </div>

      {/* Sectors Detail */}
      <div className="py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="space-y-24">
            {sectors.map((sector, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2E7D32]/10 rounded-2xl mb-6">
                    <sector.icon size={32} strokeWidth={1.5} className="text-[#2E7D32]" />
                  </div>
                  <h2 className="text-4xl font-bold text-[#2E7D32] mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
                    {sector.title}
                  </h2>
                  <p className="text-lg text-[#5D4037] mb-8" style={{ lineHeight: '170%' }}>
                    {sector.description}
                  </p>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {sector.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-[#D79A12] mb-2">{stat.value}</div>
                        <div className="text-xs text-[#6B7280]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
                    <div 
                      className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${sector.image})` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ecosystem Section */}
      <div className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#2E7D32] mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
              L'Écosystème de la Filière
            </h2>
            <p className="text-lg text-[#5D4037] max-w-2xl mx-auto" style={{ lineHeight: '170%' }}>
              Libéralisée en 2001, la filière café-cacao a vu la création d'institutions variées d'encadrement des producteurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ecosystem.map((entity, index) => (
              <div
                key={index}
                className="bg-[#FAFAF8] rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#2E7D32] hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#2E7D32] mb-2">{entity.title}</h3>
                <div className="text-sm font-semibold text-[#D79A12] mb-4">{entity.role}</div>
                <p className="text-[#5D4037]" style={{ lineHeight: '170%' }}>{entity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#2E7D32] mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
              Nos Engagements
            </h2>
            <p className="text-lg text-[#5D4037] max-w-2xl mx-auto" style={{ lineHeight: '170%' }}>
              Pour une filière durable, équitable et performante
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2E7D32]/10 rounded-2xl mb-6">
                  <challenge.icon size={40} strokeWidth={1.5} className="text-[#2E7D32]" />
                </div>
                <h3 className="text-xl font-bold text-[#2E7D32] mb-4">{challenge.title}</h3>
                <p className="text-[#5D4037]" style={{ lineHeight: '170%' }}>{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#1e5922] py-24">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
            Contribuez à l'Avenir de la Filière
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ lineHeight: '170%' }}>
            Découvrez comment TRANSCAO NÉGOCE peut accompagner votre projet
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D79A12] text-white font-semibold rounded-lg hover:bg-[#c18910] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contactez-Nous
              <ArrowRight size={20} strokeWidth={1.5} />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/30"
            >
              Nos Ressources
              <LinkIcon size={20} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filiere;