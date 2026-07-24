import { RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Refund() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center">
              <RefreshCcw className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Politique de Remboursement</h1>
          <p className="text-slate-400 text-lg">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="bg-slate-800/50 rounded-3xl border border-slate-700 p-8 md:p-12 prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white prose-a:text-primary hover:prose-a:text-rose-400">
          <h2>1. Notre Garantie de Satisfaction</h2>
          <p>
            Chez Koora IPTV, la satisfaction de nos clients est notre priorité absolue. Nous nous efforçons de fournir le meilleur service de streaming possible. Cependant, nous comprenons que des problèmes peuvent parfois survenir ou que le service pourrait ne pas correspondre parfaitement à vos attentes.
          </p>
          <p>
            C'est pourquoi nous proposons une <strong>garantie de remboursement sous 7 jours</strong> pour tous nos nouveaux abonnements de 6 mois et 12 mois.
          </p>

          <h2>2. Conditions d'éligibilité au remboursement</h2>
          <p>
            Vous êtes éligible à un remboursement complet si vous remplissez les conditions suivantes :
          </p>
          <ul>
            <li>La demande de remboursement est effectuée dans les <strong>7 jours</strong> suivant la date d'achat initiale.</li>
            <li>Vous avez contacté notre équipe de support technique pour tenter de résoudre le problème avant de demander le remboursement.</li>
            <li>Le problème technique est directement lié à nos serveurs et ne peut pas être résolu par notre équipe.</li>
            <li>Vous n'avez pas enfreint nos <Link to="/terms-conditions">Conditions Générales d'Utilisation</Link> (par exemple, pas de partage de compte non autorisé).</li>
          </ul>

          <h2>3. Situations non éligibles au remboursement</h2>
          <p>
            Nous ne pourrons malheureusement pas procéder à un remboursement dans les cas suivants :
          </p>
          <ul>
            <li>Demande effectuée après le délai de 7 jours.</li>
            <li>Problèmes liés à la vitesse ou la stabilité de votre propre connexion internet (buffering dû à un débit insuffisant).</li>
            <li>Incapacité à configurer l'abonnement en raison du refus de suivre les instructions de notre équipe de support.</li>
            <li>L'appareil que vous utilisez ne supporte pas l'IPTV.</li>
            <li>Absence d'une chaîne spécifique (notre liste de chaînes est sujette à modification sans préavis).</li>
            <li>Pour les abonnements de 1 mois (considérés comme des abonnements de test).</li>
          </ul>

          <h2>4. Procédure de demande de remboursement</h2>
          <p>
            Pour demander un remboursement, veuillez suivre cette procédure simple :
          </p>
          <ol>
            <li>Contactez notre support via WhatsApp au <strong>+212673709744</strong>.</li>
            <li>Fournissez votre numéro de commande ou l'adresse e-mail / nom d'utilisateur associé à votre compte.</li>
            <li>Expliquez brièvement la raison de votre demande d'annulation.</li>
          </ol>
          <p>
            Notre équipe examinera votre demande dans un délai de 24 à 48 heures ouvrables.
          </p>

          <h2>5. Traitement du remboursement</h2>
          <p>
            Une fois votre demande approuvée, l'abonnement sera immédiatement désactivé. Le remboursement sera traité et le crédit sera automatiquement appliqué à votre carte de crédit ou à votre mode de paiement original dans un délai de <strong>3 à 7 jours ouvrables</strong>, selon les politiques de votre banque.
          </p>

          <h2>6. Besoin d'aide avant d'annuler ?</h2>
          <p>
            Dans 99% des cas, les problèmes de streaming (coupures, écran noir, erreur de configuration) peuvent être résolus en quelques minutes par notre équipe technique. N'hésitez pas à nous solliciter avant de prendre votre décision finale !
          </p>
        </div>
      </div>
    </div>
  );
}
