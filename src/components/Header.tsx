import { useState } from 'react';
import { Tv, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHome = location.pathname === '/';

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
            <Link to={isHome ? "#accueil" : "/"} className="text-slate-300 hover:text-white transition">Accueil</Link>
            <Link to="/about-us" className="text-slate-300 hover:text-white transition">À Propos</Link>
            {isHome ? (
              <>
                <a href="#caracteristiques" className="text-slate-300 hover:text-white transition">Caractéristiques</a>
                <a href="#tarifs" className="text-slate-300 hover:text-white transition">Tarifs</a>
                <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
                <a href="#blog" className="text-slate-300 hover:text-white transition">Blog</a>
              </>
            ) : (
              <>
                <Link to="/#caracteristiques" className="text-slate-300 hover:text-white transition">Caractéristiques</Link>
                <Link to="/#tarifs" className="text-slate-300 hover:text-white transition">Tarifs</Link>
              </>
            )}
            <Link to="/installation-guide" className="text-primary font-medium hover:text-rose-400 transition">Installation</Link>
            <Link to="/contact" className="text-slate-300 hover:text-white transition">Contact</Link>
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
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-white hover:bg-slate-700 rounded-md">Accueil</Link>
            <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">À Propos</Link>
            {isHome && (
              <>
                <a href="#caracteristiques" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">Caractéristiques</a>
                <a href="#tarifs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">Tarifs</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">FAQ</a>
                <a href="#blog" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">Blog</a>
              </>
            )}
            <Link to="/installation-guide" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-primary hover:bg-slate-700 rounded-md">Guide d'Installation</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
