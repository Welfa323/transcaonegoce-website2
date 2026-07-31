"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Factory, Users, Award, ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resources = () => {
  const factories = [
    {
      name: 'Complexe Industriel PK24',
      location: 'Anyama / Abidjan',
      capacity: 'Stockage: 160 000T | Transfo: 50 000T',
      description: "Inauguré en juin 2025, c'est le cœur opérationnel du groupe. Il comprend un entrepôt (jusqu'à 2 500 T/j en déchargement) et une usine de broyage (extensible à 110 000 T) avec un centre de formation.",
      activities: ['Stockage (160 000 T)', 'Transformation (50 000 T/an)', 'Centre de formation', 'Déchargement rapide'],
      image: 'https://images.unsplash.com/photo-1684695749267-233af13276d0?q=85',
    },
    {
      name: 'Usine de Treichville',
      location: 'Abidjan, Zone Portuaire',
      capacity: 'Stockage & Exportation',
      description: "Site historique en zone portuaire, dédié au stockage et à l'exportation. Il joue un rôle logistique crucial avec 15 à 20 camions par jour en synergie avec PK24.",
      activities: ['Stockage & Exportation', 'Synergie logistique avec PK24', 'Déchargement (15-20 camions/j)', 'Zone portuaire'],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=85',
    },
    {
      name: 'Complexe Transcao Seweke',
      location: 'San-Pedro',
      capacity: 'Stockage: 160 000T | Transfo: 50 000T',
      description: "Situé dans la 1ère zone portuaire exportatrice au monde, ce site est dimensionné pour la transformation et le stockage afin de soutenir l'objectif national de 100 000 T/an.",
      activities: ['Transformation (50 000 T/an)', 'Stockage prévu (160 000 T)', 'Objectif national (100 000 T/an)', 'Exportation directe'],
      image: 'https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg',
    },
  ];

  const cooperativesList = [
    { id: 1, name: "SCOOPASAB COOP CA", location: "DIVO" },
    { id: 2, name: "COOP-CA-UJPF", location: "FACOBLY" },
    { id: 3, name: "SOCOOPAKAF COOP-CA", location: "ABOISSO" },
    { id: 4, name: "COOP-CA COOPRAD", location: "DUEKOUE" },
    { id: 5, name: "SOCOLA COOP CA", location: "ABOISSO" },
    { id: 6, name: "SCOOPS-ANA-DUE", location: "DUEKOUE" },
    { id: 7, name: "SCOOPS COOPATHS", location: "DALOA" },
    { id: 8, name: "NCB COOP CA", location: "BLOLEQUIN" },
    { id: 9, name: "ECOOPAD-COOP-CA", location: "BANGOLO" },
    { id: 10, name: "SCOOPS-LA-PAIX", location: "KOUIBLY" },
    { id: 11, name: "SCAW COOP-CA", location: "MAN" },
    { id: 12, name: "COOP-CA UPGF", location: "GUEZON" },
    { id: 13, name: "SOCODAN COOP CA", location: "DANANE" },
    { id: 14, name: "SOCAN-COOP-CA", location: "DANANE" },
    { id: 15, name: "SOCOPA BINKADI", location: "DANANE" },
    { id: 16, name: "SCOOPS BADEGNAN", location: "BLOLEQUIN" },
    { id: 17, name: "SCOOPS BADEMAYA", location: "DANANE" },
    { id: 18, name: "SCOOPS-CI", location: "GAGNOA" },
    { id: 19, name: "COOP-CA ENDINMIN", location: "MAN" },
    { id: 20, name: "COOP-CA COOTIEN OULA", location: "GUEZON" },
    { id: 21, name: "COOP CA ENTENTE", location: "TOULEPLEU" },
    { id: 22, name: "SCOOPS-SCAT", location: "KOUIBLY" },
    { id: 23, name: "SCOOPS-SCAK", location: "KOUIBLY" },
    { id: 24, name: "SCOOPS-AMG", location: "GUIGLO" },
    { id: 25, name: "Z.P.A", location: "GAGNOA" },
    { id: 26, name: "SCOOPS CAPROCA", location: "GUIGLO" },
    { id: 27, name: "BARA CACAO", location: "DOUEKOUE" },
    { id: 28, name: "SCCG", location: "MAN" },
  ];

  const certifications = [
    {
      name: 'Rainforest Alliance',
      description: 'Certification pour une agriculture durable et responsable',
      year: '2018',
    },
    // {
    //   name: 'UTZ Certified',
    //   description: 'Programme de durabilité pour le cacao et le café',
    //   year: '2019',
    // },
    // {
    //   name: 'ISO 9001',
    //   description: 'Management de la qualité',
    //   year: '2020',
    // },
    // {
    //   name: 'Fair Trade',
    //   description: 'Commerce équitable certifié',
    //   year: '2021',
    // },
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
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="h-64 flex-shrink-0 relative overflow-hidden">
                  <Image
                    src={factory.image}
                    alt={factory.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">{factory.name}</h3>
                    <p className="text-white/80 text-sm">{factory.location}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-col mb-4">
                    <span className="text-xs font-semibold text-[#6B7280] mb-1 uppercase">Capacité / Rôle</span>
                    <span className="text-sm font-bold text-[#D79A12]">{factory.capacity}</span>
                  </div>
                  {factory.description && (
                    <p className="text-sm text-[#6B7280] mb-6">{factory.description}</p>
                  )}
                  <div className="space-y-2 mt-auto">
                    {factory.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={16} strokeWidth={1.5} className="text-[#2E7D32] flex-shrink-0" />
                        <span className="text-sm text-[#5D4037] font-medium">{activity}</span>
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

          <div className="bg-gradient-to-br from-[#2E7D32]/5 to-[#D79A12]/5 rounded-3xl p-8 md:p-12 border border-[#2E7D32]/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="text-6xl font-bold text-[#2E7D32] mb-4">28</div>
              <h3 className="text-2xl font-bold text-[#5D4037] mb-2">Coopératives Partenaires</h3>
              <p className="text-[#6B7280] text-lg max-w-xl md:mx-0 mx-auto">
                Un réseau solide de 28 coopératives réparties sur l'ensemble du territoire ivoirien, garantissant un approvisionnement direct, éthique et de qualité.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#D79A12] text-white font-semibold rounded-xl hover:bg-[#b8820f] transition-all duration-200 shadow-md hover:shadow-lg w-full md:w-auto">
                    Voir la liste des coopératives
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[85vh] p-0 overflow-hidden">
                  <DialogHeader className="px-6 pt-6 pb-2">
                    <DialogTitle className="text-2xl font-bold text-[#2E7D32]">
                      Nos 28 Coopératives Partenaires
                    </DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-full max-h-[calc(85vh-100px)] px-6 pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      {cooperativesList.map((coop) => (
                        <div key={coop.id} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-[#D79A12]/30 hover:shadow-md transition-all">
                          <div className="flex-shrink-0 w-10 h-10 bg-[#2E7D32]/10 rounded-full flex items-center justify-center text-[#2E7D32] font-bold">
                            {coop.id}
                          </div>
                          <div>
                            <div className="font-bold text-[#5D4037]">{coop.name}</div>
                            <div className="text-sm text-[#D79A12] flex items-center gap-1 mt-1">
                              <MapPin size={14} />
                              {coop.location}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#2E7D32] text-white font-semibold rounded-xl hover:bg-[#265D28] transition-all duration-200 shadow-md hover:shadow-lg w-full md:w-auto"
              >
                Rejoindre Notre Réseau
                <ArrowRight size={20} strokeWidth={1.5} />
              </Link>
            </div>
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