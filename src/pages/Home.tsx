import { useState } from 'react';
import { Play, Tv, Zap, Shield, Check, ChevronDown, MonitorPlay, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10"></div>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
              Le Meilleur Fournisseur <span className="text-primary">IPTV</span> au Maroc
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Profitez de plus de 15 000 chaînes, 50 000 VOD et séries en qualité 4K/FHD. Une stabilité garantie sans coupure, compatible avec tous vos appareils.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#tarifs" className="bg-primary hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                <Play className="h-5 w-5 fill-current" /> Voir nos offres
              </a>
              <a href="#caracteristiques" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300">
                En savoir plus
              </a>
            </div>
            
            <div className="mt-16 pt-8 border-t border-slate-800 flex flex-wrap justify-center gap-8 md:gap-16 text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="text-green-500 h-5 w-5" /> <span>Activation Instantanée</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500 h-5 w-5" /> <span>Support 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500 h-5 w-5" /> <span>Garantie de remboursement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristiques" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi choisir Koora IPTV ?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Notre infrastructure de pointe vous garantit une expérience de visionnage exceptionnelle.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition duration-300">
              <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technologie Anti-Freeze</h3>
              <p className="text-slate-400">Des serveurs puissants et une technologie anti-coupure pour un streaming fluide sans interruption.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition duration-300">
              <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <MonitorPlay className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Qualité 4K & FHD</h3>
              <p className="text-slate-400">Profitez de vos programmes préférés avec une qualité d'image exceptionnelle en 4K, FHD et HD.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition duration-300">
              <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Chaînes Mondiales</h3>
              <p className="text-slate-400">Accédez à plus de 15 000 chaînes de France, Belgique, Suisse, Canada et du monde entier.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition duration-300">
              <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Appareils</h3>
              <p className="text-slate-400">Compatible avec Smart TV, Android Box, Apple TV, MAG, PC, Smartphone et Tablette.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition duration-300">
              <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Tv className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">VOD & Séries</h3>
              <p className="text-slate-400">Une bibliothèque massive de plus de 50 000 films et séries mise à jour quotidiennement.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition duration-300">
              <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Paiement Sécurisé</h3>
              <p className="text-slate-400">Transactions 100% sécurisées avec les meilleurs protocoles de chiffrement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Abonnements IPTV</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Choisissez l'offre qui vous correspond. Sans engagement.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 1 Month */}
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">1 Mois</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold">30 Dhs</span>
              </div>
              <p className="text-slate-400 mb-6 pb-6 border-b border-slate-700">Idéal pour tester notre service IPTV premium.</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3"><Check className="text-green-500 h-5 w-5" /> <span>+15 000 Chaînes TV</span></li>
                <li className="flex items-center gap-3"><Check className="text-green-500 h-5 w-5" /> <span>+50 000 VOD & Séries</span></li>
                <li className="flex items-center gap-3"><Check className="text-green-500 h-5 w-5" /> <span>Qualité 4K/FHD/HD</span></li>
                <li className="flex items-center gap-3"><Check className="text-green-500 h-5 w-5" /> <span>Technologie Anti-Freeze</span></li>
                <li className="flex items-center gap-3"><Check className="text-green-500 h-5 w-5" /> <span>Support 24/7</span></li>
              </ul>
              
              <a href="https://wa.me/212673709744" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 rounded-xl font-bold bg-slate-700 hover:bg-slate-600 transition">Commander</a>
            </div>

            {/* 12 Months (Popular) */}
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-8 border-2 border-primary relative transform md:-translate-y-4 flex flex-col shadow-2xl shadow-primary/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                LE PLUS POPULAIRE
              </div>
              <h3 className="text-2xl font-bold mb-2">12 Mois</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-extrabold">250 Dhs</span>
                <span className="text-slate-400 line-through">699 Dhs</span>
              </div>
              <p className="text-slate-400 mb-6 pb-6 border-b border-slate-700">Le meilleur rapport qualité/prix. Économisez 50% !</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3"><Check className="text-primary h-5 w-5" /> <span>+15 000 Chaînes TV</span></li>
                <li className="flex items-center gap-3"><Check className="text-primary h-5 w-5" /> <span>+50 000 VOD & Séries</span></li>
                <li className="flex items-center gap-3"><Check className="text-primary h-5 w-5" /> <span>Qualité 4K/FHD/HD</span></li>
                <li className="flex items-center gap-3"><Check className="text-primary h-5 w-5" /> <span>Technologie Anti-Freeze</span></li>
                <li className="flex items-center gap-3"><Check className="text-primary h-5 w-5" /> <span>Mises à jour gratuites</span></li>
                <li className="flex items-center gap-3"><Check className="text-primary h-5 w-5" /> <span>Support VIP Prioritaire</span></li>
              </ul>
              
              <a href="https://wa.me/212673709744" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 rounded-xl font-bold bg-primary hover:bg-rose-700 text-white transition shadow-lg shadow-primary/30">Commander</a>
            </div>

            {/* 6 Months */}
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">6 Mois</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold">150 Dhs</span>
              </div>
              <p className="text-slate-400 mb-6 pb-6 border-b border-slate-700">Un excellent compromis pour profiter sur la durée.</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3"><Check className="text-green-500 h-5 w-5" /> <span>+15 000 Chaînes TV</span></li>
                <li className="flex items-center gap-3"><Check className="text-green-500 h-5 w-5" /> <span>+50 000 VOD & Séries</span></li>
                <li className="flex items-center gap-3"><Check className="text-green-500 h-5 w-5" /> <span>Qualité 4K/FHD/HD</span></li>
                <li className="flex items-center gap-3"><Check className="text-green-500 h-5 w-5" /> <span>Technologie Anti-Freeze</span></li>
                <li className="flex items-center gap-3"><Check className="text-green-500 h-5 w-5" /> <span>Support 24/7</span></li>
              </ul>
              
              <a href="https://wa.me/212673709744" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 rounded-xl font-bold bg-slate-700 hover:bg-slate-600 transition">Commander</a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Blog</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Découvrez nos derniers articles, astuces et actualités sur l'IPTV.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary/50 transition duration-300">
              <div className="h-48 bg-slate-700 flex items-center justify-center">
                <Tv className="h-12 w-12 text-slate-500" />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-bold mb-2">Guide</div>
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition cursor-pointer">
                  <Link to="/installation-guide">Comment installer l'IPTV sur Smart TV ?</Link>
                </h3>
                <p className="text-slate-400 mb-4 line-clamp-2">Découvrez notre guide complet étape par étape pour configurer votre abonnement sur n'importe quelle Smart TV Samsung ou LG.</p>
                <Link to="/installation-guide" className="text-white font-medium hover:text-primary transition flex items-center gap-2">Lire la suite</Link>
              </div>
            </div>
            {/* Blog Post 2 */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary/50 transition duration-300">
              <div className="h-48 bg-slate-700 flex items-center justify-center">
                <Zap className="h-12 w-12 text-slate-500" />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-bold mb-2">Astuces</div>
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition cursor-pointer">Éviter les coupures pendant les matchs</h3>
                <p className="text-slate-400 mb-4 line-clamp-2">Voici les meilleures pratiques et configurations pour garantir une fluidité parfaite lors des grands événements sportifs.</p>
                <a href="#" className="text-white font-medium hover:text-primary transition flex items-center gap-2">Lire la suite</a>
              </div>
            </div>
            {/* Blog Post 3 */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary/50 transition duration-300">
              <div className="h-48 bg-slate-700 flex items-center justify-center">
                <Shield className="h-12 w-12 text-slate-500" />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-bold mb-2">Actualités</div>
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition cursor-pointer">Les nouveautés VOD du mois</h3>
                <p className="text-slate-400 mb-4 line-clamp-2">Parcourez la liste des derniers films et séries ajoutés à notre catalogue ce mois-ci. Plus de 500 nouveaux contenus !</p>
                <a href="#" className="text-white font-medium hover:text-primary transition flex items-center gap-2">Lire la suite</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions Fréquentes</h2>
            <p className="text-slate-400">Tout ce que vous devez savoir sur notre service.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Quels appareils sont compatibles avec votre service ?",
                a: "Notre service IPTV est compatible avec presque tous les appareils : Smart TV (Samsung, LG, Android), Box Android, Apple TV, MAG, Smartphones/Tablettes (iOS & Android), et ordinateurs (PC/Mac)."
              },
              {
                q: "Y a-t-il un délai d'activation ?",
                a: "Non, l'activation est instantanée. Dès que votre paiement est validé, vous recevrez vos identifiants et les instructions de configuration par email dans les minutes qui suivent."
              },
              {
                q: "Quelle est la vitesse de connexion internet requise ?",
                a: "Pour une expérience optimale et fluide (surtout pour le contenu FHD et 4K), nous recommandons une connexion internet d'au moins 15-20 Mbps."
              },
              {
                q: "Puis-je utiliser mon abonnement sur plusieurs appareils ?",
                a: "Oui, vous pouvez configurer votre abonnement sur plusieurs appareils, mais l'utilisation simultanée dépend du forfait choisi. Nos abonnements standards permettent un écran à la fois. Contactez-nous pour des connexions multiples."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-400">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
