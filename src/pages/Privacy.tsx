import { ShieldCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-slate-400 text-lg">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="bg-slate-800/50 rounded-3xl border border-slate-700 p-8 md:p-12 prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white prose-a:text-primary hover:prose-a:text-rose-400">
          <h2>1. Introduction</h2>
          <p>
            Chez Koora IPTV, nous accordons une importance primordiale à la confidentialité et à la sécurité de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site web et utilisez nos services.
          </p>

          <h2>2. Informations que nous collectons</h2>
          <p>
            Dans le cadre de la fourniture de nos services, nous pouvons collecter les informations suivantes :
          </p>
          <ul>
            <li><strong>Informations de contact :</strong> Nom, adresse e-mail, numéro de téléphone (WhatsApp).</li>
            <li><strong>Informations de paiement :</strong> Détails de facturation traités par nos prestataires de paiement sécurisés (nous ne stockons pas les numéros de carte de crédit complets).</li>
            <li><strong>Informations techniques :</strong> Adresse MAC ou Device ID (uniquement lorsque nécessaire pour l'activation de l'abonnement sur certains appareils comme les MAG Box ou les Smart TV).</li>
            <li><strong>Données d'utilisation :</strong> Adresse IP (à des fins de sécurité et de prévention du partage de compte) et historique de connexion basique pour assurer le bon fonctionnement du service.</li>
          </ul>

          <h2>3. Utilisation de vos informations</h2>
          <p>
            Les informations collectées sont utilisées exclusivement pour :
          </p>
          <ul>
            <li>Créer, activer et gérer votre abonnement IPTV.</li>
            <li>Traiter vos paiements de manière sécurisée.</li>
            <li>Fournir une assistance technique et un service client réactif (via WhatsApp ou e-mail).</li>
            <li>Vous informer des mises à jour importantes de notre service ou de la fin imminente de votre abonnement.</li>
            <li>Prévenir la fraude et l'utilisation abusive de nos serveurs (ex: partage de compte non autorisé).</li>
          </ul>

          <h2>4. Protection des données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles strictes pour protéger vos données personnelles contre l'accès, la modification, la divulgation ou la destruction non autorisés. Nos serveurs sont sécurisés et les transactions de paiement sont chiffrées selon les standards de l'industrie.
          </p>

          <h2>5. Partage d'informations</h2>
          <p>
            <strong>Nous ne vendons, ne louons ni n'échangeons jamais vos données personnelles à des tiers à des fins de marketing.</strong> Vos informations ne sont partagées qu'avec des tiers de confiance (comme les passerelles de paiement) uniquement dans la mesure nécessaire pour fournir nos services.
          </p>

          <h2>6. Conservation des données</h2>
          <p>
            Nous conservons vos informations personnelles aussi longtemps que nécessaire pour vous fournir nos services et nous conformer à nos obligations légales. Une fois votre abonnement expiré et si vous décidez de ne pas le renouveler, vos données d'identification IPTV sont supprimées de nos serveurs actifs.
          </p>

          <h2>7. Vos droits</h2>
          <p>
            Vous avez le droit de demander l'accès, la correction ou la suppression de vos données personnelles que nous détenons. Pour exercer ces droits, veuillez nous contacter via notre support WhatsApp.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Notre site utilise des cookies essentiels pour assurer son bon fonctionnement et améliorer votre expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait affecter certaines fonctionnalités du site.
          </p>

          <h2>9. Contact</h2>
          <p>
            Si vous avez des questions ou des préoccupations concernant cette Politique de Confidentialité, n'hésitez pas à nous contacter sur WhatsApp au +212373709744.
          </p>
        </div>
      </div>
    </div>
  );
}
