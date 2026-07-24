import { useState } from 'react';
import { Tv, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHome = location.pathname === '/';
  const activeHash = isHome ? location.hash || '#accueil' : '';

  const desktopLinkClass = (isActive: boolean) =>
    isActive
      ? 'text-primary font-medium hover:text-rose-400 transition'
      : 'text-slate-300 hover:text-white transition';

  const mobileLinkClass = (isActive: boolean) =>
    isActive
      ? 'block px-3 py-2 text-base font-medium text-primary bg-slate-700 rounded-md'
      : 'block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md';

  const isActivePath = (path: string) => location.pathname === path;
  const isActiveSection = (hash: string) => isHome && activeHash === hash;

  return (
    <header className="fixed w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <Tv className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Koora IPTV
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/#accueil" className={desktopLinkClass(isActiveSection('#accueil'))}>Accueil</Link>
            <Link to="/about-us" className={desktopLinkClass(isActivePath('/about-us'))}>À Propos</Link>
            {isHome ? (
              <>
                <Link to="/#caracteristiques" className={desktopLinkClass(isActiveSection('#caracteristiques'))}>Caractéristiques</Link>
                <Link to="/#tarifs" className={desktopLinkClass(isActiveSection('#tarifs'))}>Tarifs</Link>
                <Link to="/#faq" className={desktopLinkClass(isActiveSection('#faq'))}>FAQ</Link>
                <Link to="/#blog" className={desktopLinkClass(isActiveSection('#blog'))}>Blog</Link>
              </>
            ) : (
              <>
                <Link to="/#caracteristiques" className={desktopLinkClass(false)}>Caractéristiques</Link>
                <Link to="/#tarifs" className={desktopLinkClass(false)}>Tarifs</Link>
              </>
            )}
            <Link to="/installation-guide" className={desktopLinkClass(isActivePath('/installation-guide'))}>Installation</Link>
            <Link to="/contact" className={desktopLinkClass(isActivePath('/contact'))}>Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/212373709744" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-rose-700 text-white px-6 py-2.5 rounded-full font-medium transition duration-300 shadow-lg shadow-primary/25">
              Commander
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/#accueil" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass(isActiveSection('#accueil'))}>Accueil</Link>
            <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass(isActivePath('/about-us'))}>À Propos</Link>
            {isHome && (
              <>
                <Link to="/#caracteristiques" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass(isActiveSection('#caracteristiques'))}>Caractéristiques</Link>
                <Link to="/#tarifs" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass(isActiveSection('#tarifs'))}>Tarifs</Link>
                <Link to="/#faq" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass(isActiveSection('#faq'))}>FAQ</Link>
                <Link to="/#blog" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass(isActiveSection('#blog'))}>Blog</Link>
              </>
            )}
            {!isHome && (
              <>
                <Link to="/#caracteristiques" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass(false)}>Caractéristiques</Link>
                <Link to="/#tarifs" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass(false)}>Tarifs</Link>
              </>
            )}
            <Link to="/installation-guide" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass(isActivePath('/installation-guide'))}>Guide d'Installation</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass(isActivePath('/contact'))}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
