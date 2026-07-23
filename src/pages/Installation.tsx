import React, { useState } from 'react';
import { Monitor, Smartphone, Laptop, Tv, Download } from 'lucide-react';

export default function Installation() {
  const [activeTab, setActiveTab] = useState('smart-tv');

  const tabs = [
    { id: 'smart-tv', name: 'Smart TV', icon: <Tv className="w-5 h-5" /> },
    { id: 'android', name: 'Android / Firestick', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'windows', name: 'Windows / Mac', icon: <Laptop className="w-5 h-5" /> },
    { id: 'mag', name: 'MAG Box', icon: <Monitor className="w-5 h-5" /> },
  ];

  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Comment installer l'IPTV</h1>
          <p className="text-slate-400 text-lg">Suivez nos guides détaillés étape par étape pour configurer votre abonnement sur n'importe quel appareil.</p>
        </div>

        <div className="bg-slate-800/50 rounded-3xl border border-slate-700 overflow-hidden">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-slate-700 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition ${
                  activeTab === tab.id 
                    ? 'text-primary border-b-2 border-primary bg-slate-800' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {activeTab === 'smart-tv' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Installation sur Smart TV (Samsung & LG)</h3>
                  <p className="text-slate-400 mb-6">L'installation sur Smart TV est très simple. Nous recommandons l'application <strong>IBO Player</strong> ou <strong>IPTV Smarters Pro</strong>.</p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Télécharger l'application</h4>
                        <p className="text-slate-400">Allez sur la boutique d'applications de votre téléviseur (Smart Hub pour Samsung ou LG Content Store) et recherchez "IBO Player" ou "IPTV Smarters". Installez l'application.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Ouvrir l'application</h4>
                        <p className="text-slate-400">Une fois installée, ouvrez l'application. Vous verrez s'afficher votre <strong>Device ID</strong> (ou MAC Address) et <strong>Device Key</strong> sur l'écran.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">3</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Envoyez-nous vos informations</h4>
                        <p className="text-slate-400">Envoyez ces informations (Device ID / MAC Address) à notre support sur WhatsApp. Nous nous chargerons d'injecter votre abonnement directement sur votre téléviseur à distance !</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <Download className="w-5 h-5" /> Applications alternatives :
                  </h4>
                  <p className="text-slate-400">DuplexPlay, Flix IPTV, SET IPTV, NET IPTV.</p>
                </div>
              </div>
            )}

            {activeTab === 'android' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Installation sur Android Box / Firestick</h3>
                  <p className="text-slate-400 mb-6">Pour les appareils Android et Amazon Fire TV Stick, <strong>IPTV Smarters Pro</strong> est la meilleure solution.</p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Installer l'application Downloader (Pour Firestick)</h4>
                        <p className="text-slate-400">Allez dans la barre de recherche, tapez "Downloader" et installez-le. N'oubliez pas d'autoriser l'installation d'applications de sources inconnues dans les paramètres de votre appareil.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Télécharger IPTV Smarters Pro</h4>
                        <p className="text-slate-400">Ouvrez Downloader et entrez l'URL de téléchargement direct de l'application (demandez le lien à notre support WhatsApp), ou cherchez-la directement sur le Google Play Store si vous êtes sur Android Box.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">3</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Connexion avec l'API Xtream Codes</h4>
                        <p className="text-slate-400">Ouvrez l'application, choisissez "Se connecter avec l'API Xtream Codes" et entrez vos identifiants :</p>
                        <ul className="list-disc list-inside mt-2 ml-4 text-slate-300">
                          <li>Nom : Koora IPTV</li>
                          <li>Utilisateur : (fourni lors de l'achat)</li>
                          <li>Mot de passe : (fourni lors de l'achat)</li>
                          <li>URL du serveur : (fourni lors de l'achat)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'windows' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Installation sur PC (Windows & Mac)</h3>
                  <p className="text-slate-400 mb-6">Regardez vos chaînes directement sur votre ordinateur grâce à des logiciels dédiés.</p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Option A : IPTV Smarters Pro pour PC</h4>
                        <p className="text-slate-400 mb-2">Téléchargez la version bureau d'IPTV Smarters Pro depuis leur site officiel. Installez le logiciel et connectez-vous avec vos identifiants Xtream API (Nom d'utilisateur, Mot de passe et URL du serveur).</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Option B : VLC Media Player</h4>
                        <p className="text-slate-400">Si vous préférez VLC, demandez-nous votre lien <strong>m3u</strong>.</p>
                        <ul className="list-disc list-inside mt-2 ml-4 text-slate-300">
                          <li>Ouvrez VLC.</li>
                          <li>Allez dans <em>Média &gt; Ouvrir un flux réseau</em>.</li>
                          <li>Collez le lien m3u que nous vous avons envoyé.</li>
                          <li>Cliquez sur "Lire". La liste des chaînes apparaîtra dans la vue Playlist (Ctrl+L).</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mag' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Installation sur MAG Box (250, 254, 322...)</h3>
                  <p className="text-slate-400 mb-6">Les boîtiers MAG sont conçus spécifiquement pour l'IPTV et offrent une excellente qualité d'image.</p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Trouver l'adresse MAC</h4>
                        <p className="text-slate-400">L'adresse MAC (qui commence souvent par 00:1A:79...) est située sous votre boîtier MAG ou dans <em>Settings &gt; Device Info</em>. Envoyez-la-nous sur WhatsApp pour activer votre abonnement.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Configurer le portail</h4>
                        <ul className="list-disc list-inside text-slate-300 space-y-1">
                          <li>Allez dans <strong>Settings</strong> &gt; <strong>System Settings</strong>.</li>
                          <li>Sélectionnez <strong>Servers</strong>, puis <strong>Portals</strong>.</li>
                          <li>Dans <em>Portal 1 Name</em>, entrez : Koora IPTV</li>
                          <li>Dans <em>Portal 1 URL</em>, entrez l'URL que nous vous fournirons après l'activation.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">3</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Redémarrer</h4>
                        <p className="text-slate-400">Appuyez sur OK pour sauvegarder, puis redémarrez votre portail. Le chargement de l'interface IPTV commencera.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6">Vous avez besoin d'aide supplémentaire ? Notre équipe est là pour vous accompagner pas à pas.</p>
          <a href="https://wa.me/212373709744" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg shadow-primary/30">
            Contacter le Support
          </a>
        </div>
      </div>
    </div>
  );
}
