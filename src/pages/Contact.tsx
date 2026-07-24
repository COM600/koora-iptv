import { Mail, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Une question sur nos abonnements ? Besoin d'aide pour l'installation ? Notre equipe de support est la pour vous aider.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-6">Informations</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-xl text-primary">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">WhatsApp (Recommande)</h4>
                  <a
                    href="https://wa.me/212673709744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition"
                  >
                    +212 67 37 09 744
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-xl text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <a
                    href="mailto:contact@kooraiptv.com"
                    className="text-slate-400 hover:text-primary transition"
                  >
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
                  <p className="text-slate-500 text-sm">Temps de reponse moyen : &lt; 15 mins</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-rose-900/20 p-8 rounded-3xl border border-primary/30 text-center">
            <h3 className="text-xl font-bold mb-3">Besoin d'une activation rapide ?</h3>
            <p className="text-slate-400 mb-6">
              Contactez-nous directement sur WhatsApp pour une activation en moins de 5 minutes.
            </p>
            <a
              href="https://wa.me/212673709744"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-primary hover:bg-rose-700 text-white py-3 rounded-xl font-bold transition shadow-lg shadow-primary/25"
            >
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
