import React from 'react';
import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Une question sur nos abonnements ? Besoin d'aide pour l'installation ? Notre équipe de support est là pour vous aider.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Informations</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl text-primary">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">WhatsApp (Recommandé)</h4>
                    <a href="https://wa.me/212373709744" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition">
                      +212 37 37 09 744
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <a href="mailto:contact@kooraiptv.com" className="text-slate-400 hover:text-primary transition">
                      contact@kooraiptv.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Heures d'ouverture</h4>
                    <p className="text-slate-400">Support 24/7</p>
                    <p className="text-slate-500 text-sm">Temps de réponse moyen : &lt; 15 mins</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-rose-900/20 p-8 rounded-3xl border border-primary/30 text-center">
              <h3 className="text-xl font-bold mb-3">Besoin d'une activation rapide ?</h3>
              <p className="text-slate-400 mb-6">Contactez-nous directement sur WhatsApp pour une activation en moins de 5 minutes.</p>
              <a href="https://wa.me/212373709744" target="_blank" rel="noopener noreferrer" className="inline-block w-full bg-primary hover:bg-rose-700 text-white py-3 rounded-xl font-bold transition shadow-lg shadow-primary/25">
                Discuter sur WhatsApp
              </a>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nom complet</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Adresse Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Sujet</label>
                  <select 
                    id="subject" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition appearance-none"
                  >
                    <option>Question avant achat</option>
                    <option>Support technique / Installation</option>
                    <option>Problème de paiement</option>
                    <option>Renouvellement d'abonnement</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
                </div>

                <button type="submit" className="w-full md:w-auto px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold transition">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
