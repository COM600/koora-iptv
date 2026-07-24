import { Tv, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Koora IPTV</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Nous sommes le fournisseur leader de services IPTV au Maroc et en Europe, dédiés à offrir la meilleure expérience de divertissement numérique à nos clients depuis plus de 5 ans.
          </p>
        </div>
      </div>

      {/* Stats/Features */}
      <div className="bg-slate-800/50 py-16 border-y border-slate-700 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">5+</div>
              <div className="text-slate-400 font-medium">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">15k+</div>
              <div className="text-slate-400 font-medium">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">99.9%</div>
              <div className="text-slate-400 font-medium">Uptime garanti</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">24/7</div>
              <div className="text-slate-400 font-medium">Support technique</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Chez Koora IPTV, notre mission est simple : révolutionner la façon dont vous consommez la télévision. Fini les abonnements câblés hors de prix et limités.
              </p>
              <p>
                Nous croyons que chacun devrait avoir accès à un divertissement de qualité mondiale, sans restriction géographique, et à un prix juste. Nous investissons continuellement dans nos serveurs et notre technologie anti-freeze pour vous garantir une expérience fluide, même lors des grands événements sportifs très demandés.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Couverture Mondiale</h3>
              <p className="text-sm text-slate-400">Chaînes de tous les pays, avec un focus sur le Maroc et l'Europe.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 translate-y-8">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Technologie Avancée</h3>
              <p className="text-sm text-slate-400">Serveurs ultra-rapides pour un zapping instantané.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 shadow-2xl">
          <Tv className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Prêt à rejoindre la révolution IPTV ?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Testez notre service dès aujourd'hui et découvrez pourquoi des milliers d'utilisateurs nous font confiance pour leur divertissement quotidien.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/#tarifs" className="bg-primary hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg shadow-primary/30">
              Voir nos abonnements
            </Link>
            <Link to="/contact" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
