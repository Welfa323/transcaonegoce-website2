"use client";
import React from 'react';
import { Building2, Users, Target, Heart, Award, MapPin } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '2019',
      title: 'Création de TRANSCAO NÉGOCE',
      description: 'Société anonyme unipersonnelle créée pour assurer un prix rémunérateur aux producteurs',
    },
    {
      year: '2020',
      title: 'Expansion Régionale',
      description: '9 centres commerciaux et 10 magasins de collecte primaire',
    },
    {
      year: '2021',
      title: 'Certification RainForest Alliance',
      description: 'Reconnaissance internationale de nos pratiques durables',
    },
    {
      year: '2024',
      title: '3 Usines de Conditionnement',
      description: 'Treichville, PK24 et San-Pedro opérationnels',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Améliorer les revenus des producteurs de café et de cacao en mettant l\'accent sur leurs conditions de vie et de travail.',
    },
    {
      icon: Heart,
      title: 'Notre Vision',
      description: 'Être un outil de développement durable pour les agriculteurs de Côte d\'Ivoire, entièrement à leur service.',
    },
    {
      icon: Award,
      title: 'Notre Engagement',
      description: 'Valoriser la qualité du café-cacao ivoirien et optimiser les opportunités d\'exportation.',
    },
  ];

  const facilities = [
    {
      name: 'Abidjan Treichville',
      type: 'Usine de Conditionnement',
      location: 'Zone Portuaire',
    },
    {
      name: 'Abidjan PK24',
      type: 'Usine de Conditionnement',
      location: 'Autoroute du Nord',
    },
    {
      name: 'San-Pedro',
      type: 'Usine de Conditionnement',
      location: 'Zone Industrielle',
    },
  ];

  const socialProjects = [
    'Construction d\'écoles en milieu rural',
    'Centres de santé communautaires',
    'Hydraulique villageoise',
    'Autonomisation économique des femmes',
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_cocoa-commerce-7/artifacts/9e6fjg1w_482960816_609902805224312_4344529248571558251_n.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32]/95 via-[#2E7D32]/85 to-[#2E7D32]/70"></div>
        </div>

        <div className="relative max-w-[1280px] mx-auto px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block backdrop-blur-sm rounded-full mb-6">
              <span className="text-[#e7a005] font-semibold text-md">NOTRE HISTOIRE</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
              TRANSCAO NÉGOCE
            </h1>
            <p className="text-xl text-white/95 mb-4" style={{ lineHeight: '170%' }}>
              Un acteur engagé pour l'amélioration des conditions de vie des producteurs ivoiriens depuis 2019
            </p>
            <p className="text-lg text-white/90" style={{ lineHeight: '170%' }}>
              <strong>Plus proche des planteurs</strong> • Excellence • Transparence • Innovation
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <p className="text-lg text-[#5D4037] mb-6" style={{ lineHeight: '170%' }}>
              <strong className="text-[#2E7D32]">TRANSCAO NEGOCE</strong>, société anonyme unipersonnelle avec à sa tête un gérant, a été créée en octobre 2019 pour assurer un prix rémunérateur aux producteurs, améliorer leurs conditions de vie et valoriser la qualité du café-cacao ivoirien.
            </p>
            <p className="text-lg text-[#5D4037] mb-6" style={{ lineHeight: '170%' }}>
              Nous sommes impliqués dans l'exportation internationale de café et de cacao. Nous achetons, traitons, emballons et vendons nos produits sur le marché international. TRANSCAO NEGOCE est dotée de la certification <strong className="text-[#2E7D32]">RainForest Alliance</strong>.
            </p>
            <p className="text-lg text-[#5D4037]" style={{ lineHeight: '170%' }}>
              Notre société dispose de <strong className="text-[#D79A12]">trois usines de conditionnement</strong> (Abidjan Treichville, Abidjan PK24 et San Pedro), de <strong className="text-[#D79A12]">neuf centres commerciaux</strong> et de <strong className="text-[#D79A12]">dix magasins de collecte primaire</strong> dans différentes zones de production de café-cacao.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#2E7D32] mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
              Mission, Vision & Engagement
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2E7D32]/10 rounded-2xl mb-6">
                  <value.icon size={40} strokeWidth={1.5} className="text-[#2E7D32]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2E7D32] mb-4">{value.title}</h3>
                <p className="text-[#5D4037]" style={{ lineHeight: '170%' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#2E7D32] mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
              Notre Histoire
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2E7D32]/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
                      <div className="text-3xl font-bold text-[#D79A12] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-[#2E7D32] mb-2">{milestone.title}</h3>
                      <p className="text-[#5D4037]" style={{ lineHeight: '170%' }}>{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-[#2E7D32] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#2E7D32] mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
              Nos Installations
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-[#FAFAF8] rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#2E7D32] transition-all duration-300">
                <MapPin size={32} strokeWidth={1.5} className="text-[#D79A12] mb-4" />
                <h3 className="text-xl font-bold text-[#2E7D32] mb-2">{facility.name}</h3>
                <p className="text-sm font-semibold text-[#D79A12] mb-2">{facility.type}</p>
                <p className="text-[#5D4037]">{facility.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Projects */}
      <div className="py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-gradient-to-br from-[#2E7D32]/5 to-[#D79A12]/5 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2E7D32] mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
                Projets de Développement Social
              </h2>
              <p className="text-lg text-[#5D4037]" style={{ lineHeight: '170%' }}>
                Notre engagement pour l'amélioration des conditions de vie en milieu rural
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {socialProjects.map((project, index) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-6">
                  <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart size={24} strokeWidth={1.5} className="text-[#2E7D32]" />
                  </div>
                  <span className="text-[#5D4037] font-medium">{project}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;