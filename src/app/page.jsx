"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Award, Globe, Shield, TrendingUp, Users, Factory, Leaf } from 'lucide-react';

const Home = () => {
  const stats = [
    { value: '20+', label: 'Années d\'Expérience', icon: Award },
    { value: '15+', label: 'Partenaires Internationaux', icon: Globe },
    { value: '100+', label: 'Coopératives', icon: Users },
    { value: '3', label: 'Sites de Production', icon: Factory },
  ];

  const partners = [
    { name: 'Conseil du Café-Cacao', logo: '/partners/ccc.png' },
    { name: 'CNRA', logo: '/partners/cnra.png' },
    { name: 'Touton', logo: '/partners/touton.png' },
    { name: 'Sucres et Denrées', logo: '/partners/sucres.png' },
    { name: 'Cargill', logo: '/partners/cargill.png' },
    { name: 'Barry Callebaut', logo: '/partners/barry.png' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Excellence',
      description: 'Engagement constant pour la qualité supérieure dans chaque étape du processus.',
    },
    {
      icon: Leaf,
      title: 'Durabilité',
      description: 'Pratiques agricoles responsables et respectueuses de l\'environnement.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Technologies modernes au service de l\'agriculture ivoirienne.',
    },
    {
      icon: Users,
      title: 'Plus Proche des Planteurs',
      description: 'Partenariat direct et équitable avec nos producteurs locaux.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1493925410384-84f842e616fb?crop=entropy&cs=srgb&fm=jpg&q=85)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative max-w-[1280px] mx-auto px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-block py-2 backdrop-blur-sm rounded-full">
              <span className="text-[#D79A12] font-semibold text-sm">LEADER DU NÉGOCE EN CÔTE D'IVOIRE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
              Au Service de<br />
              <span className="text-[#D79A12]">l'Agriculture Ivoirienne</span>
            </h1>
            <p className="text-xl text-white/90 mb-8" style={{ lineHeight: '170%' }}>
              Société d'exportation de café-cacao, nous connectons les producteurs locaux aux marchés internationaux avec excellence et transparence.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2E7D32] text-white font-semibold rounded-lg hover:bg-[#265D28] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Nous Contacter
                <ArrowRight size={20} strokeWidth={1.5} />
              </Link>
              <Link
                href="/filiere"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/30"
              >
                Découvrir la Filière
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-[1280px] mx-auto px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2E7D32]/10 rounded-2xl mb-4">
                  <stat.icon size={32} strokeWidth={1.5} className="text-[#2E7D32]" />
                </div>
                <div className="text-4xl font-bold text-[#2E7D32] mb-2">{stat.value}</div>
                <div className="text-sm text-[#5D4037]" style={{ lineHeight: '170%' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#2E7D32] mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
              Nos Valeurs
            </h2>
            <p className="text-lg text-[#5D4037] max-w-2xl mx-auto" style={{ lineHeight: '170%' }}>
              Des principes fondamentaux qui guident chacune de nos actions et décisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2E7D32]/10 rounded-2xl mb-6 group-hover:bg-[#2E7D32] transition-all duration-300">
                  <value.icon size={32} strokeWidth={1.5} className="text-[#2E7D32] group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#2E7D32] mb-3">{value.title}</h3>
                <p className="text-[#5D4037]" style={{ lineHeight: '170%' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#2E7D32] mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
              Nos Partenaires
            </h2>
            <p className="text-lg text-[#5D4037]" style={{ lineHeight: '170%' }}>
              Nous collaborons avec les leaders mondiaux de l'industrie
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Conseil du Café-Cacao', logo: '/partners/conseil-cafe-cacao.jpg' },
              { name: 'CNRA', logo: '/partners/cnra.png' },
              { name: 'Touton', logo: '/partners/touton.jpg' },
              { name: 'Sucres et Denrées', logo: '/partners/sucres-denrees.png' },
              { name: 'Cargill', logo: '/partners/cargill.jpg' },
              { name: 'Barry Callebaut', logo: '/partners/barry-callebaut.png' },
              { name: 'AGL Group', logo: '/partners/agl-group.png' },
              { name: 'Olam', logo: '/partners/olam.jpg' },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#2E7D32] hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-auto max-h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#1e5922] py-24">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
            Rejoignez-nous dans notre Mission
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ lineHeight: '170%' }}>
            Ensemble, bâtissons un avenir durable pour l'agriculture ivoirienne
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D79A12] text-white font-semibold rounded-lg hover:bg-[#c18910] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Devenir Partenaire
              <ArrowRight size={20} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;