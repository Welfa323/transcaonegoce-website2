"use client";
import React from 'react';
import { Leaf, Heart, Users, Shield, Award, Target, Factory, Sprout } from 'lucide-react';

const Sustainability = () => {
  const rseDefinitions = [
    {
      title: 'Responsabilité Sociale',
      description: 'Décrit les relations d\'une entreprise avec ses employés, ainsi que ses relations avec la communauté et l\'environnement.',
    },
    {
      title: 'Responsabilité Sociétale',
      description: 'Fait référence à la responsabilité d\'une entreprise envers ses parties prenantes (consommateurs, fournisseurs, distributeurs, partenaires, etc.).',
    },
    {
      title: 'Responsabilité Environnementale',
      description: 'Consiste à s\'assurer que l\'entreprise ne nuit pas à l\'environnement par ses activités.',
    },
  ];

  const commitments = [
    {
      icon: Leaf,
      title: 'Environnement',
      initiatives: [
        'Prévention de la pollution',
        'Utilisation durable des ressources',
        'Adaptation et lutte contre le changement climatique',
        'Protection et réhabilitation de l\'environnement naturel par le reboisement',
      ],
    },
    {
      icon: Users,
      title: 'Relations et Conditions de Travail',
      initiatives: [
        'Emploi et relation employé-employeur',
        'Conditions de travail et protection sociale',
        'Santé et Sécurité au travail',
        'Développement des ressources humaines',
      ],
    },
    {
      icon: Shield,
      title: 'Bonnes Pratiques des Affaires',
      initiatives: [
        'Lutte contre la corruption',
        'Engagement politique responsable',
        'Concurrence loyale',
        'Promotion de la responsabilité sociétale dans la sphère d\'influence',
        'Respect des droits de propriété',
      ],
    },
    {
      icon: Heart,
      title: 'Engagement Social',
      initiatives: [
        'Ancrage territorial',
        'Éducation et culture',
        'Création d\'emplois et développement des compétences pour les femmes en milieu rural',
        'Optimisation des revenus pour les producteurs',
        'Amélioration des conditions de travail des producteurs',
        'Santé (construction de centre de santé, don de matériel médical…)',
        'Investissement social (hydraulique et assainissement en milieu rural…)',
      ],
    },
  ];

  const combats = [
    {
      icon: Award,
      title: 'Proposer des Produits Sains Respectueux de la Santé de l\'Homme et aux Normes Internationales',
      points: [
        'Produire du CAFÉ-CACAO bio et naturels, premium, toujours plus sûrs, conformes, avec un haut niveau de traçabilité, anticipant les attentes des parties prenantes externes',
        'Appliquer des chartes exigeantes, aux garanties éthiques alimentaires',
        'Mettre en place des plans de surveillance qualité',
      ],
    },
    {
      icon: Users,
      title: 'Développer nos Contributions Citoyennes et Sociales',
      points: [
        'Organiser des compagnes de sensibilisation des consommateurs aux enjeux environnementaux',
        'Piloter une politique sociale harmonieuse',
        'Améliorer toujours plus la culture santé et sécurité, le bien-être et la qualité de vie au travail',
        'En matière sociétale, inscrire nos collaboratrices et nos collaborateurs dans une démarche solidaire',
        'Soutenir le tissu associatif local',
      ],
    },
    {
      icon: Sprout,
      title: 'Préserver les Ressources de la Planète',
      points: [
        'Structurer la filière CAFÉ-CACAO bio made in CÔTE D\'IVOIRE',
        'Réduire le tonnage de plastique d\'emballages d\'origine pétrochimique',
        'Encourager les attitudes de préservations de la faune ivoirienne',
      ],
    },
    {
      icon: Factory,
      title: 'Limiter notre Impact sur le Climat',
      points: [
        'Réduire le grammage et améliorer l\'ajustement des étuis carton',
        'Augmenter la part de nos références en emballage 100% recyclable',
        'Optimiser nos consommations énergétiques',
        'Maîtriser et diminuer nos déchets industriels',
        'Augmenter le nombre et la part de matières origine naturelle',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1586095516671-d085ff58cdd4?q=85)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32]/90 via-[#2E7D32]/70 to-transparent"></div>
        </div>
        
        <div className="relative max-w-[1280px] mx-auto px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D79A12]/20 backdrop-blur-sm rounded-full mb-6">
              <Leaf size={20} strokeWidth={1.5} className="text-[#D79A12]" />
              <span className="text-[#D79A12] font-semibold text-sm">RSE & DÉVELOPPEMENT DURABLE</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
              Action RSE
            </h1>
            <p className="text-xl text-white/90 mb-6" style={{ lineHeight: '170%' }}>
              La responsabilité sociale des entreprises est un terme qui désigne la prise en compte volontaire des préoccupations sociales, sociétales et environnementales par les entreprises et les organisations dans leurs activités.
            </p>
          </div>
        </div>
      </div>

      {/* RSE Definitions */}
      <div className="py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-white rounded-2xl p-12 shadow-lg mb-12">
            <p className="text-lg text-[#5D4037] mb-8" style={{ lineHeight: '170%' }}>
              Garantir un environnement sain est important pour nous. C'est pourquoi nous sommes fiers de notre engagement en faveur du développement durable, en repensant notre façon de faire les choses et en révisant nos politiques en conséquence. Notre objectif est d'être une société qui est non seulement consciente de la manière dont ses actions affectent l'environnement, mais aussi de la manière dont elles affectent la santé et la sécurité des individus.
            </p>
            <div className="space-y-6">
              {rseDefinitions.map((def, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-[#F3F4F6] rounded-xl">
                  <div className="w-2 h-2 bg-[#2E7D32] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2E7D32] mb-2">{def.title}</h3>
                    <p className="text-[#5D4037]" style={{ lineHeight: '170%' }}>{def.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Commitments Section */}
      <div className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#2E7D32] mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
              Nos Engagements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-[#FAFAF8] rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#2E7D32] hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2E7D32]/10 rounded-2xl mb-6">
                  <commitment.icon size={32} strokeWidth={1.5} className="text-[#2E7D32]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2E7D32] mb-6">{commitment.title}</h3>
                <div className="space-y-3">
                  {commitment.initiatives.map((initiative, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D79A12] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#5D4037]" style={{ lineHeight: '170%' }}>{initiative}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notre Combat Section */}
      <div className="py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#2E7D32] mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
              Notre Combat
            </h2>
          </div>

          <div className="space-y-8">
            {combats.map((combat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D79A12]/10 rounded-2xl flex-shrink-0">
                    <combat.icon size={32} strokeWidth={1.5} className="text-[#D79A12]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2E7D32] mb-4">{combat.title}</h3>
                    <div className="space-y-3">
                      {combat.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#2E7D32] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-[#5D4037]" style={{ lineHeight: '170%' }}>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certification Section */}
      <div className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-gradient-to-br from-[#2E7D32]/5 to-[#D79A12]/5 rounded-2xl p-12 flex items-center gap-12">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-2xl shadow-lg flex-shrink-0">
              <Award size={64} strokeWidth={1.5} className="text-[#2E7D32]" />
            </div>
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-[#D79A12] text-white text-sm font-semibold rounded-full mb-4">
                Certifié depuis 2021
              </div>
              <h3 className="text-3xl font-bold text-[#2E7D32] mb-3">RainForest Alliance</h3>
              <p className="text-lg text-[#5D4037]" style={{ lineHeight: '170%' }}>
                Certification internationale pour une agriculture durable et responsable
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#1e5922] py-16">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Rejoignez-nous dans notre démarche de durabilité
          </h3>
          <p className="text-lg text-white/90" style={{ lineHeight: '170%' }}>
            Ensemble, construisons un avenir durable pour l'agriculture ivoirienne
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
