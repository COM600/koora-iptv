import { Tv } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const activeHash = isHome ? location.hash || '#accueil' : '';

  const footerLinkClass = (isActive: boolean) =>
    isActive
      ? 'text-primary hover:text-rose-400 transition'
      : 'hover:text-white transition';

  const isActivePath = (path: string) => location.pathname === path;
  const isActiveSection = (hash: string) => isHome && activeHash === hash;

  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Tv className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold">Koora IPTV</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Le leader de l'IPTV au Maroc. Qualité, stabilité et satisfaction garantie. Rejoignez des milliers de clients satisfaits.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/#accueil" className={footerLinkClass(isActiveSection('#accueil'))}>Accueil</Link></li>
              <li><Link to="/about-us" className={footerLinkClass(isActivePath('/about-us'))}>À Propos</Link></li>
              <li><Link to="/installation-guide" className={footerLinkClass(isActivePath('/installation-guide'))}>Guide d'Installation</Link></li>
              <li><Link to="/#tarifs" className={footerLinkClass(isActiveSection('#tarifs'))}>Tarifs</Link></li>
              <li><Link to="/contact" className={footerLinkClass(isActivePath('/contact'))}>Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Légal</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/terms-conditions" className="hover:text-white transition">Conditions Générales</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition">Politique de Confidentialité</Link></li>
              <li><Link to="/refund-returns" className="hover:text-white transition">Remboursement</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Koora IPTV. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0">
            Paiements 100% Sécurisés
          </div>
        </div>
      </div>
    </footer>
  );
}
