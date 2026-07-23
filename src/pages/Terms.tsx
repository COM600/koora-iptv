import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center">
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conditions Générales</h1>
          <p className="text-slate-400 text-lg">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="bg-slate-800/50 rounded-3xl border border-slate-700 p-8 md:p-12 prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white prose-a:text-primary hover:prose-a:text-rose-400">
          <h2>1. Introduction</h2>
          <p>
            Bienvenue sur Koora IPTV. En accédant à notre site web et en utilisant nos services, vous acceptez d'être lié par les présentes Conditions Générales d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
          </p>

          <h2>2. Services Proposés</h2>
          <p>
            Koora IPTV fournit un service d'abonnement IPTV permettant l'accès à des chaînes de télévision en direct, des films, des séries et des événements sportifs (VOD). La qualité du flux (SD, HD, FHD, 4K) dépend de votre connexion internet et de l'appareil utilisé.
          </p>

          <h2>3. Exigences Matérielles et Internet</h2>
          <p>
            Pour profiter pleinement de notre service sans coupure, vous devez disposer d'une connexion internet haut débit stable (minimum 15-20 Mbps recommandé). Koora IPTV n'est pas responsable des problèmes de mise en mémoire tampon (buffering) liés à une connexion internet lente ou instable de la part de votre fournisseur d'accès internet (FAI).
          </p>

          <h2>4. Utilisation du Compte</h2>
          <p>
            Sauf indication contraire explicite lors de l'achat (abonnement multi-écrans), un abonnement standard Koora IPTV est limité à <strong>une seule connexion simultanée</strong>. Le partage de votre abonnement avec des tiers ou l'utilisation simultanée sur plusieurs appareils avec un abonnement standard entraînera le blocage automatique et définitif de votre compte sans préavis ni remboursement.
          </p>

          <h2>5. Politique de Contenu</h2>
          <p>
            Le contenu fourni (chaînes, films, séries) est sujet à changement sans préavis. Koora IPTV ne garantit pas la disponibilité permanente d'une chaîne ou d'un programme spécifique. Des mises à jour du contenu sont effectuées régulièrement pour maintenir la meilleure expérience possible.
          </p>

          <h2>6. Paiements et Tarifs</h2>
          <p>
            Tous les paiements sont traités de manière sécurisée. Les prix de nos abonnements sont sujets à changement, mais les modifications n'affecteront pas les abonnements en cours d'utilisation jusqu'à leur renouvellement. Les abonnements ne sont pas renouvelés automatiquement.
          </p>

          <h2>7. Activités Interdites</h2>
          <p>
            Il est strictement interdit de :
          </p>
          <ul>
            <li>Restreamer, retransmettre ou redistribuer notre contenu.</li>
            <li>Utiliser des VPN ou Proxy abusifs qui pourraient interférer avec nos serveurs.</li>
            <li>Tenter de pirater ou d'attaquer notre infrastructure.</li>
            <li>Partager publiquement les listes m3u ou les identifiants sur internet.</li>
          </ul>

          <h2>8. Modification des Conditions</h2>
          <p>
            Koora IPTV se réserve le droit de modifier ces Conditions Générales à tout moment. Il est de votre responsabilité de consulter cette page régulièrement. Votre utilisation continue de nos services après toute modification constitue votre acceptation des nouvelles conditions.
          </p>

          <h2>9. Contact</h2>
          <p>
            Pour toute question concernant ces Conditions Générales, veuillez contacter notre équipe d'assistance via WhatsApp au +212373709744.
          </p>
        </div>
      </div>
    </div>
  );
}
