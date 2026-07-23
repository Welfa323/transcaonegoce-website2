"use client";
import React from 'react';
import { Calendar, ExternalLink, FileText } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Prix Minimum Garanti Bord Champs - Campagne Intermédiaire 2026',
      date: '2026',
      category: 'Prix Garantis',
      description: 'Le ministre de l\'Agriculture annonce le prix minimum garanti bord champ de 1200 F CFA/kg de cacao',
      image: 'https://images.unsplash.com/photo-1493925410384-84f842e616fb?q=85',
      link: 'http://conseilcafecacao.ci/',
    },
    {
      id: 2,
      title: 'Prix bord champs cacao campagne intermédiaire 2026',
      date: '2026',
      category: 'Prix Garantis',
      description: 'Nouvelle grille des prix pour la campagne intermédiaire 2026',
      image: 'https://images.unsplash.com/photo-1573710661345-610f790e1218?q=85',
      link: 'http://www.conseilcafecacao.ci/',
    },
    {
      id: 3,
      title: 'Prix Minimum Garanti Bord Champs Cacao 2025',
      date: '2025',
      category: 'Prix Garantis',
      description: 'Campagne Intermédiaire 2025 - Annonce officielle des prix',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=85',
      link: 'http://www.conseilcafecacao.ci/',
    },
    {
      id: 4,
      title: 'Prix Minimum Garanti Bord champ 2024-2025 Cacao',
      date: '2024-2025',
      category: 'Prix Garantis',
      description: 'Prix garantis pour la campagne principale 2024-2025',
      image: 'https://images.pexels.com/photos/14436364/pexels-photo-14436364.jpeg',
      link: 'http://www.conseilcafecacao.ci/',
    },
    {
      id: 5,
      title: 'Prix Minimum Garanti Bord champ 2024-2025 Café',
      date: '2024-2025',
      category: 'Prix Garantis',
      description: 'Annonce des prix garantis pour le café - campagne 2024-2025',
      image: 'https://images.unsplash.com/photo-1586095516671-d085ff58cdd4?q=85',
      link: 'http://www.conseilcafecacao.ci/',
    },
    {
      id: 6,
      title: 'TRANSCAO NÉGOCE au Cacao Festival International 5 Daloa 2024',
      date: 'Juillet 2024',
      category: 'Événements',
      description: 'Discours de l\'Administrateur Directeur Général lors de la cérémonie d\'ouverture',
      image: 'https://images.pexels.com/photos/14681543/pexels-photo-14681543.jpeg',
      link: 'https://www.facebook.com/TranscaoNeg',
    },
    {
      id: 7,
      title: 'AGRÉMENT - CAMPAGNE 2024/2025',
      date: '2024',
      category: 'Certification',
      description: 'Liste des opérateurs agréés au titre de la campagne 2024/2025',
      image: 'https://images.pexels.com/photos/7178310/pexels-photo-7178310.jpeg',
      link: 'http://www.conseilcafecacao.ci/index.php?option=com_k2&view=item&id=1457:agrements-au-titre-de-la-campagne-2024-2025&Itemid=18',
    },
    {
      id: 8,
      title: 'Récompense des meilleurs planteurs de la région',
      date: 'Juillet 2024',
      category: 'Événements',
      description: 'L\'Administrateur Directeur Général de Transcao Négoce récompense les meilleurs planteurs',
      image: 'https://images.pexels.com/photos/37062650/pexels-photo-37062650.jpeg',
      link: 'https://www.facebook.com/TranscaoNeg',
    },
  ];

  const categories = ['Tous', 'Prix Garantis', 'Événements', 'Certification'];
  const [selectedCategory, setSelectedCategory] = React.useState('Tous');

  const filteredNews = selectedCategory === 'Tous' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2E7D32] to-[#1e5922] py-24">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
            Actualités
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ lineHeight: '170%' }}>
            Restez informés des dernières nouvelles de la filière café-cacao et de nos activités
          </p>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="bg-white shadow-sm sticky top-[72px] z-30">
        <div className="max-w-[1280px] mx-auto px-8 py-6">
          <div className="flex gap-4 overflow-x-auto">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#2E7D32] text-white'
                    : 'bg-[#F3F4F6] text-[#5D4037] hover:bg-[#E5E7EB]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${news.image})` }}
                ></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-[#D79A12] text-white text-xs font-semibold rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-3">
                  <Calendar size={16} strokeWidth={1.5} />
                  <span>{news.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#2E7D32] mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-[#5D4037] mb-4 line-clamp-3" style={{ lineHeight: '170%' }}>
                  {news.description}
                </p>
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-[#265D28] font-semibold transition-colors duration-200"
                >
                  Lire la suite
                  <ExternalLink size={16} strokeWidth={1.5} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <FileText size={64} strokeWidth={1.5} className="text-[#E5E7EB] mx-auto mb-4" />
            <p className="text-[#6B7280] text-lg">Aucune actualité pour cette catégorie</p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-gradient-to-r from-[#2E7D32] to-[#1e5922] rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Restez Informés
            </h2>
            <p className="text-lg text-white/90 mb-8" style={{ lineHeight: '170%' }}>
              Suivez-nous sur nos réseaux sociaux pour ne rien manquer de nos actualités
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.facebook.com/TranscaoNeg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-[#2E7D32] font-semibold rounded-lg hover:bg-[#F3F4F6] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Suivez-nous sur Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
