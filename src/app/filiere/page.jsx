"use client";
import React from 'react';
import Image from 'next/image';
import { Coffee, Leaf, TrendingUp, Users, ArrowRight, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Filiere = () => {
  const sectors = [
    {
      title: 'Le Café',
      description: 'Avant de vous permettre de déguster une bonne tasse de café, chaque grain aura dû mûrir lentement, être récolté et préparé soigneusement, avant d\'entreprendre un long voyage à travers les océans. Le café est une boisson énergisante psychotrope stimulante, obtenue à partir des graines torréfiées.',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=85',
      icon: Coffee,
      longDescription: (
        <div className="space-y-4 text-[#5D4037] text-sm md:text-base leading-relaxed mt-4">
          <p>
            Avant de vous permettre de déguster une bonne tasse de café, chaque grain aura dû mûrir lentement, être récolté et préparé soigneusement, avant d’entreprendre un long voyage à travers les océans.
          </p>
          <p>
            Le café est une boisson énergisante psychotrope stimulante, obtenue à partir des graines torréfiées de diverses variétés de caféier, de l'arbuste caféier. Il fait partie des trois principales boissons contenant de la caféine les plus consommées dans le monde, avec le thé et le maté.
          </p>
          <p>
            La culture du café est très développée dans de nombreux pays à climat tropical d'Amérique, d'Afrique et d'Asie, dans des plantations qui sont cultivées pour les marchés d'exportation du commerce international. Il représente souvent une contribution majeure pour l'économie des pays producteurs (économie du café) dont fait partie notre pays la Côte d’Ivoire.
          </p>
          <p>
            Le caféier, arbuste fruitier persistant et d’un vert intense, est principalement cultivé autour de l’équateur, entre les deux tropiques. Sa floraison et sa fructification requièrent des conditions particulières. Principalement cultivé entre 200 et 2000 mètres d’altitude selon la variété, dans des régions où la température ne varie que très peu, les plants d’arabica et de robusta demandent patience et maîtrise avant de régaler les consommateurs de tous leurs arômes. C’est au prix d’un véritable savoir-faire et d’une parfaite maîtrise du processus de culture et de préparation, que les grains peuvent révéler tout leur potentiel.
          </p>

          <h4 className="font-bold text-[#2E7D32] text-lg mt-8 mb-2">QUELLE EST LA MEILLEURE MÉTHODE DE RÉCOLTE DU CAFÉ ?</h4>
          <p>Selon la taille de l’exploitation et la nature du terrain, le déroulement de la cueillette ne sera pas le même. Il existe différentes méthodes de récolte, plus ou moins respectueuses du caféier lui-même et permettant d’atteindre différents niveaux de qualité.</p>

          <h5 className="font-bold text-[#D79A12] mt-4 mb-2">LA RÉCOLTE MÉCANIQUE</h5>
          <p>Faite grâce à l’intervention de machines faisant vibrer tout l’arbre, cette méthode de travail est certainement la moins respectueuse pour la plante, et donne une qualité de récolte hétérogène. Toutes les cerises sont récoltées à la fois dans un filet placé sous le caféier tandis que ce dernier est secoué. Or, une des particularités de ces fruits, c’est d’atteindre leur maturité en décalage.</p>
          <p>La méthode mécanique donne donc une récolte dont les fruits ne sont pas tous idéalement mûrs, endommageant l’arbre et demandant de faire un gros tri pour ne retenir que les cerises qui valent la peine de subir le traitement à même de les rendre consommables.</p>
          <p>Cette technique est essentiellement utilisée sur de grandes exploitations où l’on peut déplacer les machines et où l’on souhaite gagner en rentabilité (temps de la main d’œuvre réduit au maximum).</p>

          <h5 className="font-bold text-[#D79A12] mt-4 mb-2">LE STRIPPING</h5>
          <p>Pratiquée à l’aide d’un peigne ou à mains nues, cette technique permet de récupérer tous les fruits d’une branche à la fois. Elle n’est pratiquée que lorsqu’on considère que suffisamment de cerises d’un caféier son mûres.</p>
          <p>Là encore, tous les fruits ne sont pas mûrs lorsqu’on les récolte. Beaucoup de feuilles et de fragments d’écorce se trouvent mélangés à la récolte. Il faut donc procéder à la séparation des résidus, des fruits immatures ou pourris, de ceux qui seront ensuite transformés.</p>
          <p>L’arbre pâtit de cette technique et la récolte n’est pas optimale. On la pratique sur des plantations au terrain accidenté, et où on entend concentrer au maximum la période de travail en diminuant le coût de la main d’œuvre.</p>

          <h5 className="font-bold text-[#D79A12] mt-4 mb-2">LA CUEILLETTE MANUELLE OU PICKING</h5>
          <p>Il s’agit de la méthode de récolte la plus noble. Elle consiste à ne cueillir que les cerises suffisamment mûres en plusieurs passages. Concrètement, on laisse le temps à la nature et aux plantes de donner le meilleur d’elles-mêmes. De plus, chaque caféier est respecté.</p>
          <p>L’inconvénient de cette façon de faire, c’est le prix de la main d’œuvre : un cueilleur devra se concentrer pour ne récolter que ce qui peut l’être et devra effectuer plusieurs passages sur une même plante. De fait, le prix du café récolté de la sorte est plus élevé. En revanche, sa qualité est incontestablement supérieure, justifiant facilement le surcoût.</p>

          <h4 className="font-bold text-[#2E7D32] text-lg mt-8 mb-2">LA TRANSFORMATION DE LA CERISE EN CAFÉ VERT</h4>
          <p>Selon les pays et la taille des exploitations, différentes techniques sont employées pour extraire les graines. Selon le processus utilisé, la qualité finale du produit s’en ressentira.</p>

          <h5 className="font-bold text-[#D79A12] mt-4 mb-2">FULLY WASH, LA TECHNIQUE DU LAVAGE À L’EAU</h5>
          <p>Chaque cerise va être dépulpée pour en extraire les grains qu’elle contient (2 dans chaque fruit). Á cette étape, les graines seront encore enveloppées dans leur mucilage. Cette enveloppe gluante et sucrée va être éliminée après un bain de fermentation qui durera entre 12 et 36 heures. Durant cette étape, le goût de chaque grain se développera et s’étoffera. C’est la raison pour laquelle cette méthode de travail est surtout utilisée sur les cafés considérés comme étant les plus fins.</p>
          <p>Passé ce bain durant lequel l’ensemble sera brassé régulièrement, on retire l’ensemble pour un lavage intense avant une mise en séchage.</p>

          <h5 className="font-bold text-[#D79A12] mt-4 mb-2">LA TECHNIQUE SÈCHE, la méthode « paysanne ivoirienne »</h5>
          <p>On va mettre la récolte à sécher au soleil et laisser la pulpe du fruit se rabougrir. Sur de grandes dalles en béton, entièrement exposées au soleil, les cerises vont sécher progressivement pendant environ 3 semaines. Durant cette période, on s’assurera de remuer régulièrement l’ensemble pour un résultat homogène et pour éviter toute fermentation. On décortiquera ensuite l’enveloppe séchée, puis on mettra les grains libérés à sécher.</p>
          <p>Cette technique a pour résultat d’adoucir le café, de le rendre un peu plus sucré. Il s’agit d’une méthode bon marché et respectueuse de chaque fruit. Dans certaines exploitations, une machine permet d’assurer cette étape en chauffant les fruits et en accélérant le processus ce que nous déconseillons d’ailleurs. L’effet produit est souvent décevant dans la mesure où les propriétés aromatiques des grains sont altérées.</p>

          <h5 className="font-bold text-[#D79A12] mt-4 mb-2">LE MIELLAGE, ÉGALEMENT APPELÉ « HONEY PROCESS »</h5>
          <p>Cette façon de faire, relativement récente, mêle les avantages des deux méthodes précédentes. Après avoir été dépulpée, la récolte est mise à sécher au soleil avec son mucilage. Le mucilage finit par se coller définitivement au grain et lui donne une douceur particulière.</p>
          <p>Encore peu usitée, cette technique demande une parfaite maîtrise de tout le procédé sous peine d’altérer la qualité du résultat. C’est une des raisons qui fait qu’elle reste encore marginale.</p>

          <h4 className="font-bold text-[#2E7D32] text-lg mt-8 mb-2">LE TRI DES GRAINS</h4>
          <p>Cette partie du travail est particulièrement importante. C’est à cette étape que l’on va séparer les grains méritant d’être transformés des grains altérés ou pourris qui seront évacués.</p>
          <p>C’est également à cette étape que seront éliminés les éventuels parasites présents (le scolyte par exemple, qui se loge et se nourrit dans la pulpe pouvant endommager les graines), ainsi que les intrus (petites pierres, résidus organiques, coquilles de gastéropodes, etc…), qui par la suite pourraient endommager sécheurs et broyeurs. De plus, selon la méthode de récolte employée, des grains immatures peuvent être présents. On les éliminera afin de ne pas amoindrir la qualité du produit final. Les grains seront également calibrés. Pour ce faire, ils seront passés au crible. Il s’agit d’un gabarit défini par les instances nationales et internationales régissant le commerce du café, permettant d’obtenir un résultat homogène sur l’ensemble de la production mondiale.</p>
          <p>Les producteurs ont donc tout intérêt à soigner cette étape, autant que celle de la culture à proprement parler. Le tri demande l’emploi d’une main d’œuvre nombreuse si l’on entend répondre aux critères de qualité internationaux. Coûteuse pour les producteurs, cette étape leur permet néanmoins d’obtenir un meilleur prix pour leur travail.</p>
        </div>
      ),
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
      longDescription: (
        <div className="space-y-4 text-[#5D4037] text-sm md:text-base leading-relaxed mt-4">
          <p>
            Vous savez probablement qu'il est fabriqué à partir des fèves du cacaoyer (ou cacaotier), un petit arbre qui pousse dans les régions tropicales d'Afrique, d'Amérique du Sud et des Caraïbes. Les fruits du cacaoyer contiennent de la fève de cacao. Elle est particulièrement importante pour les chocolatiers, puisqu'ils l'utilisent pour produire des produits chocolatés comme la pâte de chocolat, le beurre de cacao et la poudre de cacao.
          </p>

          <h4 className="font-bold text-[#2E7D32] text-lg mt-8 mb-2">L’histoire du cacao</h4>
          <p>
            Les premières traces du cacao remontent à 5300 avant notre ère. Il existe depuis très longtemps et est consommé sous une forme ou une autre depuis des milliers d'années. Le cacao n'était pas seulement consommé comme boisson, les fèves de cacao servaient également de monnaie d’échange et de tribut et étaient aussi utilisées lors de cérémonies religieuses et rituels divers.
          </p>

          <h4 className="font-bold text-[#2E7D32] text-lg mt-8 mb-2">Comment obtient-on le cacao ?</h4>
          <p>
            On récolte le cacao 1 à 2 fois par an, à la fin de chaque saison des pluies. Le fruit du cacaoyer s'appelle la cabosse. Les cabosses sont récoltées lorsqu’elles sont parfaitement mûres, puis ouvertes à l’aide d’une machette ou d’un gourdin: c’est l’écabossage, qui permet d’en extraire les fèves de cacao.
          </p>
          <p>
            Tout d’abord, les fèves fermentent durant sept jours, le plus souvent dans des caisses de bois, avec l’aide de feuilles de bananiers positionnées comme isolant sur la partie supérieure des caisses. Cette isolation naturelle permet de préserver la chaleur indispensable la fermentation.
          </p>
          <p>
            L’étape de la fermentation est cruciale puisqu’elle va permettre aux graines de développer leurs précurseurs d’arômes. C’est aussi durant la fermentation que les fèves perdent leur mucilage, sorte d’enveloppe blanche pulpeuse et visqueuse.
          </p>
          <p>
            Par la suite, les graines sont séchées durant environ une semaines. Le séchage finalise la fermentation, tue le germe, et permet d’atteindre un taux d’humidité qui stabilisera les fèves. Certaines techniques de séchage permettent de favoriser certains arômes.
          </p>
          <p>
            Le séchage est le plus souvent réalisé naturellement au soleil. Cette étape joue un rôle décisif dans l’expression du goût chocolat.
          </p>
          <p>
            Une fois séchées, les fèves seront triées et ensachées prêtent à être envoyées à la chocolaterie. Certaines voyagent par bateau durant plusieurs semaines pour atteindre leur destination finale, la chocolaterie.
          </p>
          <p>
            Une étape essentielle pour l’élaboration du goût : les fèves sont grillées, lot par lot afin de développer leurs arômes. La température et le temps de torréfaction varient selon l’origine des fèves. Les fèves torréfiées sont séparées de leur coque puis concassées. le cacao concassé appelé grué est utilisé pour procéder à l'assemblage.
          </p>
          <p>
            Le cacao étant une matière première agricole, son goût peut varier à chaque récolte en fonction du climat et du soin qui lui est apporté. C'est pourquoi nos experts du goût classent chaque lot de cacao parmi les 12 profils aromatiques typiques de cacao Valrhona.
          </p>
          <p>
            L'étape d'assemblage permet d’assembler des grués de plusieurs origines, selon des recettes précises afin d’obtenir une typicité aromatique singulière et constante. Ainsi, pour garantir cette constance du goût, les origines des cacaos qui composent ces chocolats d'assemblage peuvent varier alors que les profils aromatiques sélectionnés pour le mélange ne changent jamais. Ce qui compte c'est le goût !
          </p>
          <p>
            Pour les Pures Origines, ce sont des grués de même origine qui sont assemblés pour conserver la typicité du terroir.
          </p>
          <p>
            Les fèves sont ensuite broyées très finement pour former une pâte appelée masse, liqueur ou pâte de cacao. La pâte est ensuite dirigée vers la conche, grand mélangeur chauffé qui permet de finaliser le développement des arômes. On ajoute à cette étape le sucre, ingrédient indispensable à la fabrication de chocolat, ainsi que d’autres ingrédients comme le lait, pour le chocolat au lait.
          </p>

          <h4 className="font-bold text-[#2E7D32] text-lg mt-8 mb-2">Les formes du cacao</h4>
          <p>
            La fève est la matière première qui sert à obtenir les différentes formes de cacao.
          </p>

          <h5 className="font-bold text-[#D79A12] mt-4 mb-2">Grué de cacao</h5>
          <p>
            Dans les grandes étapes de la préparation du chocolat, il y a le concassage des fèves. Lors de ce processus, la coque des fèves est alors mise de côté, et un système de tamis ventilé permet de séparer les germes, les coques et les cotylédons, des éclats fins de la graine. Ces éclats forment le grué de cacao. Il peut être réduit en pâte de cacao, ou utilisé tel quel.
          </p>

          <h5 className="font-bold text-[#D79A12] mt-4 mb-2">Pâte de cacao</h5>
          <p>
            La pâte de cacao, aussi appelée masse ou liqueur de cacao, est une substance obtenue à partir du conchage du grué de cacao après broyage à chaud. La masse de cacao est une pâte onctueuse composée à 100% de cacao. Elle sert aux professionnels chocolatiers à renforcer le goût cacaoté du chocolat. C’est principalement cette pâte qui est utilisée dans la fabrication de produits à base de chocolat, tels que les bonbons au chocolat, les tablettes de chocolat noirs et chocolat au lait, les crèmes glacées, etc.
          </p>

          <h5 className="font-bold text-[#D79A12] mt-4 mb-2">Poudre de cacao</h5>
          <p>
            La poudre de cacao est issue du pressage de la pâte de cacao. En soumettant la pâte de cacao à forte pression, on sépare la poudre de la matière grasse, le beurre de cacao. Cette poudre sert surtout en pâtisserie, pour du décor en saupoudrage ou dans des cakes.
          </p>

          <h5 className="font-bold text-[#D79A12] mt-4 mb-2">Beurre de cacao</h5>
          <p>
            Le beurre de cacao est la matière grasse de la fève. Une fève contient environ 50 % de matière grasse. Lors de la pression hydraulique de la pâte, on arrive à séparer la poudre du beurre de cacao. Cette matière grasse est très utilisée dans la confection de confiseries au chocolat, comme les tablettes, les pâtes à tartiner, ainsi que dans les différents types de chocolats. Le beurre de cacao confère au chocolat toute sa brillance et sa fluidité. Pour cette raison, les chocolats de couverture en sont enrichis.
          </p>

          <h4 className="font-bold text-[#2E7D32] text-lg mt-8 mb-2">Les variétés de cacao</h4>
          <p>
            On distingue classiquement trois familles principales de cacao : les Criollo, les Forastero et les Trinitario. Toutefois, cette classification sommaire est désormais obsolète puisque l’avancé de la recherche montre qu’il existe en réalité 10 variétés génétiques du cacaoyer, toutes originaires d’Amérique amazonienne : Amelonado, Cacao guiana, Contamana, Criollo, Curaray, Iquitos, Marañon, Nacional, Nanay et Purús.
          </p>
          <p>
            Cette classification plus précise est essentielle à une sélection plus raisonnée des variétés (en fonction, par exemple, de leur capacité à résister aux maladies) et une meilleure gestion des plantations. Ces variétés se distinguent à la fois par leur origine géographique et par des critères morphologiques et génomiques.
          </p>
          <p>
            Au-delà d’une classification scientifique rigoureuse, il faut considérer chaque cacao comme potentiellement qualitatif. L’important étant de maximiser ses qualités aromatiques par des méthodes de production et de post récolte adaptées ainsi qu’un savoir-faire précis en chocolaterie.
          </p>
        </div>
      ),
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
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573710661345-610f790e1218?q=85"
            alt="Hero"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-[1280px] mx-auto px-8 h-full flex items-center">
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
                  
                  {sector.longDescription && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-[#D79A12] text-white font-semibold rounded-lg hover:bg-[#b8820f] transition-colors shadow-sm hover:shadow-md">
                          En savoir plus
                          <ArrowRight size={18} />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[85vh] p-0 overflow-hidden">
                        <DialogHeader className="px-6 pt-6 pb-2">
                          <DialogTitle className="text-2xl font-bold text-[#2E7D32]">
                            Tout savoir sur {sector.title}
                          </DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="h-full max-h-[calc(85vh-100px)] px-6 pb-6">
                          {sector.longDescription}
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 lg:justify-start">
                    {sector.stats.map((stat, idx) => (
                      <div key={idx} className="text-center sm:text-left bg-white sm:bg-transparent rounded-lg p-4 sm:p-0 shadow-sm sm:shadow-none border border-gray-100 sm:border-transparent">
                        <div className="text-2xl font-bold text-[#D79A12] mb-1">{stat.value}</div>
                        <div className="text-xs text-[#6B7280]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] relative">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-500"
                    />
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
            <p className="text-lg text-[#5D4037] max-w-2xl mx-auto mb-8" style={{ lineHeight: '170%' }}>
              Libéralisée en 2001, la filière café-cacao a vu la création d'institutions variées d'encadrement des producteurs
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#2E7D32] text-white font-semibold rounded-lg hover:bg-[#235c25] transition-colors shadow-sm hover:shadow-md">
                  En savoir plus sur l'écosystème
                  <ArrowRight size={18} />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[85vh] p-0 overflow-hidden text-left">
                <DialogHeader className="px-6 pt-6 pb-2">
                  <DialogTitle className="text-2xl font-bold text-[#2E7D32]">
                    L’environnement institutionnel de la filière Café-Cacao
                  </DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-full max-h-[calc(85vh-100px)] px-6 pb-6">
                  <div className="space-y-4 text-[#5D4037] text-sm md:text-base leading-relaxed mt-4">
                    <p>
                      Libéralisée en 2001, la filière café-cacao a vu la création d’institutions variées d’encadrement des producteurs en remplacement de la Caisse de Stabilisation, jugée à l’époque insuffisamment transparente par les bailleurs de fonds. Dans l’optique de rehausser le blason de la filière, les autorités ivoiriennes mettent en place un conseil de régulation pour expérimenter le fonctionnement de la collaboration public-privé à travers la création du CCC « Conseil du Café Cacao ».
                    </p>
                    <p>
                      Le Conseil du Café-Cacao, est créé par l’ordonnance N°2011-481 du 28 décembre 2011 fixant les règles relatives à la commercialisation du café et du cacao. Organe de Régulation, de Stabilisation et Développement de la filière Café-Cacao, la tutelle du Conseil est assurée par le Ministère de l’Agriculture au plan technique et par le Ministère de l’Economie et Finances au plan financier. Il est administré sur une base paritaire entre l’Etat et l’interprofession au sein d’un Conseil d’Administration.
                    </p>

                    <h4 className="font-bold text-[#2E7D32] text-lg mt-8 mb-4">LES GRANDES DATES DES REFORMES REGLEMENTAIRES ET INSTITUTIONNELLES DE LA FILIERE CAFE CACAO EN CI</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-gray-100">
                        <thead>
                          <tr className="bg-[#2E7D32]/5 border-b border-[#2E7D32]/20">
                            <th className="py-3 px-4 font-semibold text-[#2E7D32] min-w-[50px]">N°</th>
                            <th className="py-3 px-4 font-semibold text-[#2E7D32] min-w-[250px]">Texte Réglementaire</th>
                            <th className="py-3 px-4 font-semibold text-[#2E7D32] min-w-[300px]">Objet</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          <tr><td className="py-3 px-4 text-xs font-medium">01</td><td className="py-3 px-4 text-xs">Décret-loi n°54-1021 du 14-10-1954 modifié par le décret-loi 1138 du 13-11-1956</td><td className="py-3 px-4 text-xs">Création des textes de stabilisation des prix dans les Territoires d’Outre-mer</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">02</td><td className="py-3 px-4 text-xs">Décret-loi n°55-185 du 02-02-1955 modifié par l’ordonnance 901 du 24-09-1958</td><td className="py-3 px-4 text-xs">Création d’un fonds national de régulation des cours des produits d’Outre-mer</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">03</td><td className="py-3 px-4 text-xs">Décret n°55-1284 du 30-09-1955</td><td className="py-3 px-4 text-xs">Création d’une caisse de stabilisation des prix du café en Côte d’Ivoire</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">04</td><td className="py-3 px-4 text-xs">Décret-loi n°55-1285 du 30-09-1955</td><td className="py-3 px-4 text-xs">Création d’une caisse de stabilisation des prix du cacao en Côte d’Ivoire</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">05</td><td className="py-3 px-4 text-xs">Décret n°62-37 du 08-2-1962</td><td className="py-3 px-4 text-xs">Réorganisation et fusion de la caisse de stabilisation des prix du café et de la caisse des prix du cacao en une « Caisse de stabilisation des prix du café et du cacao »</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">06</td><td className="py-3 px-4 text-xs">Décret n°64-315 du 17-08-1964 modifié par le décret n°65-150 du 12-05-1965</td><td className="py-3 px-4 text-xs">Création d’une société d’État dénommée « Caisse de Stabilisation et de Soutien des Prix des Productions Agricoles : CSSPPA ou CAISTAB »</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">07</td><td className="py-3 px-4 text-xs">Décret n°99-40 du 20-01-1999</td><td className="py-3 px-4 text-xs">Dissolution de la CSSPPA</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">08</td><td className="py-3 px-4 text-xs">Décret n°99-41 du 20-01-1999</td><td className="py-3 px-4 text-xs">Autorisation de la participation financière de l’État au capital de la société à participation financière publique dénommée Nouvelle CAISTAB</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">09</td><td className="py-3 px-4 text-xs">Ordonnance n°2000-242 du 20-03-2000</td><td className="py-3 px-4 text-xs">Dissolution de la Nouvelle CAISTAB</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">10</td><td className="py-3 px-4 text-xs">Décret n°2000-751 du 10-10-2000</td><td className="py-3 px-4 text-xs">Création de la société dénommée ARCC</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">11</td><td className="py-3 px-4 text-xs">Décret n°2001-512 du 28-08-2001</td><td className="py-3 px-4 text-xs">Création et organisation du FDPCC</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">12</td><td className="py-3 px-4 text-xs">Décret n°2001-667 du 24-10-2001</td><td className="py-3 px-4 text-xs">Modification du décret 2001-465 du 25-07-2001 fixant les missions et le cadre d’intervention de la BCC</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">13</td><td className="py-3 px-4 text-xs">Décret n°2001-668 du 24-10-2001</td><td className="py-3 px-4 text-xs">Fixation des missions et du cadre d’intervention du FRC</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">14</td><td className="py-3 px-4 text-xs">Décret n°2008-260 du 19-09-2008</td><td className="py-3 px-4 text-xs">Composition, attribution et fonctionnement du CGFCC</td></tr>
                          <tr><td className="py-3 px-4 text-xs font-medium">15</td><td className="py-3 px-4 text-xs">Décret n°2012-26 du 20-01-2012</td><td className="py-3 px-4 text-xs">Composition, attribution et fonctionnement du CCC</td></tr>
                        </tbody>
                      </table>
                    </div>

                    <h4 className="font-bold text-[#2E7D32] text-lg mt-8 mb-2">L’importance de la filière café–cacao en Côte d’ivoire</h4>
                    <p>L'importance de la filière s’apprécie à travers les données suivantes :</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>La Côte d’ivoire est le premier producteur mondial de cacao (plus de 40% de l’offre mondiale) depuis plus d’une décennie ; et occupe le troisième rang au niveau des pays africains producteurs de café.</li>
                      <li>La production de cacao est estimée à environ 2.100.000 tonnes et celle de café en forte baisse (- 44%) à environ 59.000 tonnes au cours de la campagne 2016-2017.</li>
                      <li>La filière café-cacao emploie plus de 1.000.000 personnes et nourrit directement ou indirectement plus de 4.000.000 de ménages.</li>
                      <li>Le cacao demeure le premier produit d’exportation du pays, représente environ 50% des recettes d’exportations, et participe à hauteur de 20% du PIB.</li>
                    </ul>

                    <h4 className="font-bold text-[#2E7D32] text-lg mt-8 mb-2">Les missions et l'organisation (Ordonnance n°2011-481)</h4>
                    <p>La filière est organisée à travers l’ordonnance n°2011-481 du 28 décembre 2011 qui fixe les règles relatives à la commercialisation du café et du cacao, ainsi que les mécanismes de régulation des activités au sein de la filière.</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>La sécurisation du revenu des producteurs par la mise en place d’un prix minimum garanti.</li>
                      <li>Le développement d’une économie cacaoyère et caféière durable à travers la réorganisation de la production, l’amélioration de la productivité et la lutte contre les pires formes de travail des enfants.</li>
                      <li>La politique de transformation, de consommation et de valorisation made in Côte d’Ivoire.</li>
                      <li>Le renforcement de la bonne gouvernance et de la transparence dans la gestion des ressources.</li>
                    </ul>

                    <h4 className="font-bold text-[#2E7D32] text-lg mt-8 mb-2">Carte du producteur et Interprofession</h4>
                    <p>Dans la mise en place d’une interprofession forte et assise sur des organisations de producteurs crédibles, le Conseil du Café-Cacao a procédé à la remise officielle des cartes à vocation multifonctions aux producteurs de café-cacao, en vue de répondre aux exigences contemporaines du marché mondial. Dotée d’un code QR renfermant toutes les informations sur le producteur et son verger et d’une puce bancaire pour permettre des transactions financières sur la commercialisation des produits, elle contient bien d’autres informations.</p>
                    <p>La carte du producteur permet désormais d’assurer la traçabilité de la production, la sécurisation des transactions commerciales sur le cacao et le café en évitant le transport du cash d’un point à un autre point d’achat et le paiement effectif aux producteurs du prix bord champ garanti fixé par l’État qui est de :</p>
                    <ul className="list-disc pl-5 space-y-2 font-semibold text-[#D79A12]">
                      <li>900 FCFA (prix minimum garanti producteur) pour le Café</li>
                      <li>1000 FCFA (prix minimum garanti producteur) pour le Cacao</li>
                    </ul>
                    <p className="text-sm italic">Pour la campagne 2023-2024.</p>
                    
                    <p className="font-medium mt-4">La Côte d’Ivoire est en marche pour le développement de sa filière Café-Cacao et entend continuer sur la voie de l’excellence…</p>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
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