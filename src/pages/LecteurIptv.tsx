import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const diagnosisRows = [
  ['Image qui se degrade sans coupure', 'Debit insuffisant, le lecteur bascule vers le bas'],
  ['Coupures repetees toutes les quelques secondes', 'Tampon trop court ou perte de paquets'],
  ['Saccades sur les scenes rapides uniquement', 'Decodage logiciel au lieu du materiel'],
  ['Son present, ecran noir', "Codec video non supporte par l'appareil"],
  ["Message d'erreur de licence", 'Absence de module de dechiffrement compatible'],
  ['Qualite plafonnee malgre une bonne ligne', "Niveau de securite logiciel sur l'appareil"],
  ['Decalage audio-video progressif', "Probleme d'horloge, souvent lie au transcodage"],
];

const offerCards = [
  {
    title: '1 Mois',
    price: '30 Dhs',
    text: 'Ideal pour tester notre service IPTV premium.',
  },
  {
    title: '6 Mois',
    price: '150 Dhs',
    text: 'Un excellent compromis pour profiter sur la duree.',
  },
  {
    title: '12 Mois',
    price: '250 Dhs',
    text: 'Notre formule la plus populaire pour toute la saison.',
  },
];

export default function LecteurIptv() {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionElement = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionElement?.getAttribute('content') ?? '';
    const keywordsElement = document.querySelector('meta[name="keywords"]');
    const previousKeywords = keywordsElement?.getAttribute('content') ?? '';
    const canonicalElement = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalElement?.getAttribute('href') ?? '';

    document.title = 'Lecteur IPTV : role, limites techniques et choix de l application';

    if (descriptionElement) {
      descriptionElement.setAttribute(
        'content',
        "Lecteur IPTV : ce que fait l'application entre le flux et l'ecran, pourquoi les contenus sous licence ne s'ouvrent jamais dans un lecteur tiers, et comment choisir selon votre materiel.",
      );
    }

    let metaKeywords = keywordsElement;
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'lecteur IPTV');

    let canonicalLink = canonicalElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://kooraiptv.com/lecteur-iptv');

    return () => {
      document.title = previousTitle;
      if (descriptionElement) {
        descriptionElement.setAttribute('content', previousDescription);
      }
      if (metaKeywords) {
        if (previousKeywords) {
          metaKeywords.setAttribute('content', previousKeywords);
        } else if (!keywordsElement) {
          metaKeywords.remove();
        }
      }
      if (canonicalLink) {
        if (previousCanonical) {
          canonicalLink.setAttribute('href', previousCanonical);
        } else if (!canonicalElement) {
          canonicalLink.remove();
        }
      }
    };
  }, []);

  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <article className="space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              lecteur IPTV
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
              Lecteur IPTV : ce que fait reellement l&apos;application, et pourquoi certains flux refusent de se lancer
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Une question revient constamment : quel est le meilleur lecteur IPTV. La reponse depend d&apos;un point que
              presque personne n&apos;aborde, et qui explique a lui seul pourquoi certaines chaines s&apos;ouvrent dans une
              application et pas dans une autre.
            </p>
          </header>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Le lecteur n&apos;est qu&apos;un maillon</h2>
            <p>
              Entre le serveur et votre ecran, il y a quatre couches. Le lecteur n&apos;en occupe qu&apos;une.
            </p>
            <p>
              La premiere couche est la source : le serveur qui heberge le flux. La deuxieme est le transport, en HLS ou en
              DASH la plupart du temps. La troisieme est le dechiffrement, quand le contenu est protege. La quatrieme est le
              decodage et l&apos;affichage.
            </p>
            <p>
              Le lecteur intervient sur les couches deux, trois et quatre. Il ne cree aucun contenu et n&apos;ameliore pas la
              qualite de la source. Un flux encode a 2 Mbps restera un flux a 2 Mbps quel que soit le lecteur.
            </p>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Ce que le lecteur fait vraiment</h2>
            <ul className="list-disc space-y-3 pl-6">
              <li>Il lit le manifeste qui liste les qualites disponibles et l&apos;adresse des segments video.</li>
              <li>Il choisit un niveau de qualite et l&apos;ajuste en continu selon le debit mesure.</li>
              <li>Il maintient une memoire tampon pour absorber les variations du reseau.</li>
              <li>Il demande le dechiffrement quand le contenu est protege.</li>
              <li>Il transmet le flux au decodeur materiel du processeur.</li>
              <li>Il affiche le guide des programmes s&apos;il en recoit un.</li>
            </ul>
            <p>
              Un bon lecteur se juge sur la gestion du tampon et sur l&apos;usage du decodage materiel. Pas sur son interface.
            </p>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Le point qui bloque : le dechiffrement</h2>
            <p>
              Tout contenu vendu sous licence est chiffre. Ce n&apos;est pas un choix de l&apos;operateur : les ayants droit
              l&apos;imposent par contrat. Trois systemes dominent, selon la plateforme : Widevine, PlayReady et FairPlay.
            </p>
            <p>
              Pour dechiffrer, l&apos;application doit embarquer un module certifie, obtenu aupres du proprietaire du systeme
              et soumis a des conditions strictes. Widevine fonctionne par niveaux : le niveau materiel exige un environnement
              d&apos;execution isole dans le processeur, le niveau logiciel est plus permissif mais limite souvent la definition.
            </p>
            <p>
              Un lecteur generique ne dispose pas de ce module pour les contenus premium. Il ne peut donc pas ouvrir un flux
              protege, quelle que soit sa qualite par ailleurs.
            </p>
            <p>
              La consequence est simple : si une application tierce affiche des milliers de chaines qui se lancent toutes sans
              difficulte, c&apos;est qu&apos;aucune n&apos;est chiffree. Et un contenu non chiffre n&apos;est pas un contenu sous licence.
            </p>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Les categories de lecteurs</h2>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong className="text-white">Les applications officielles des services.</strong> Elles embarquent le module
                de dechiffrement certifie. C&apos;est la seule categorie capable d&apos;afficher du contenu sous licence.
              </li>
              <li>
                <strong className="text-white">Les decodeurs operateur.</strong> Le lecteur est integre au materiel, avec le
                module de securite correspondant.
              </li>
              <li>
                <strong className="text-white">Les lecteurs multimedia generalistes.</strong> VLC en est l&apos;exemple le plus
                connu. Excellents sur les flux ouverts, inutilisables sur les contenus premium proteges.
              </li>
              <li>
                <strong className="text-white">Les serveurs multimedia personnels.</strong> Jellyfin, Plex et equivalents,
                dedies a votre propre bibliotheque.
              </li>
              <li>
                <strong className="text-white">Les lecteurs de listes tierces.</strong> Ils prennent une adresse de liste et
                affichent ce qu&apos;elle contient, sans mecanisme de licence.
              </li>
            </ul>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Ce qu&apos;il faut regarder sur votre materiel</h2>
            <p>Le lecteur compte moins que le processeur qui decode.</p>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong className="text-white">Le decodage materiel.</strong> Verifiez le support HEVC et AV1 en materiel.
              </li>
              <li>
                <strong className="text-white">La sortie audio.</strong> Si vous passez par un ampli, le lecteur doit
                transmettre le flux audio sans le retoucher.
              </li>
              <li>
                <strong className="text-white">L&apos;age du systeme.</strong> Les versions anciennes perdent progressivement le
                support des applications recentes.
              </li>
              <li>
                <strong className="text-white">La qualite maximale accessible.</strong> Sur certains appareils, le niveau de
                securite disponible plafonne la definition.
              </li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Diagnostiquer un probleme de lecture</h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-800/50">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-800 text-slate-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Symptome</th>
                    <th className="px-4 py-3 font-semibold">Cause probable</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnosisRows.map(([symptom, cause]) => (
                    <tr key={symptom} className="border-t border-slate-700 text-slate-300">
                      <td className="px-4 py-3 font-medium text-white">{symptom}</td>
                      <td className="px-4 py-3">{cause}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-300 leading-8">
              Un reflexe utile avant tout : tester en Ethernet. Le Wi-Fi est le premier suspect dans la majorite des cas.
            </p>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Le cas des flux publics</h2>
            <p>
              Il existe des diffusions librement accessibles et parfaitement legitimes : chaines de service public disponibles
              en ligne, webradios, cameras publiques, retransmissions institutionnelles et contenus sous licence libre.
            </p>
            <p>
              Ces flux ne sont pas chiffres, parce que leur diffuseur a choisi de les rendre accessibles. Un lecteur
              generaliste les ouvre sans difficulte.
            </p>
            <p>
              Pour comprendre le contexte global et les <Link to="/iptv-maroc" className="text-primary hover:text-rose-400 transition">offres disponibles au Maroc</Link>, le plus utile reste de revenir au dossier principal.
            </p>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Questions frequentes</h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Quel est le meilleur lecteur IPTV ?</h3>
                <p className="mt-3">
                  Pour du contenu sous licence, il n&apos;y a pas de choix : seule l&apos;application officielle du service
                  fonctionne. Pour des flux ouverts, un lecteur generaliste suffit largement.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Pourquoi mon service ne s&apos;ouvre pas dans VLC ?</h3>
                <p className="mt-3">
                  Parce que le contenu est chiffre et que VLC ne dispose pas du module de dechiffrement certifie pour ce
                  systeme de protection.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Un lecteur payant est-il meilleur qu&apos;un gratuit ?</h3>
                <p className="mt-3">
                  Sur la stabilite de lecture, rarement. Le prix porte surtout sur l&apos;interface, les favoris et le guide.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Le lecteur peut-il ameliorer la qualite de l&apos;image ?</h3>
                <p className="mt-3">
                  Non. Certaines applications modifient le rendu, mais le niveau de detail est fixe a l&apos;encodage.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Pourquoi ma definition est-elle limitee alors que je paie pour du 4K ?</h3>
                <p className="mt-3">
                  Souvent a cause du niveau de securite de l&apos;appareil. Sans environnement d&apos;execution isole, le service
                  applique un plafond de definition.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Faut-il un lecteur different selon l&apos;appareil ?</h3>
                <p className="mt-3">
                  Oui, en pratique. Les modules de dechiffrement different selon la plateforme, et le decodage materiel aussi.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-rose-900/10 p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Nos Abonnements IPTV</h2>
              <p className="mt-4 text-slate-300 leading-8">
                Si vous souhaitez comparer les formules disponibles, voici nos offres actuelles. Vous pouvez aussi revenir a la
                page d&apos;accueil pour voir tous les details ou nous contacter directement sur WhatsApp.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {offerCards.map((offer) => (
                <div key={offer.title} className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6">
                  <h3 className="text-xl font-bold text-white">{offer.title}</h3>
                  <p className="mt-3 text-3xl font-extrabold text-primary">{offer.price}</p>
                  <p className="mt-3 text-slate-400">{offer.text}</p>
                  <a
                    href="https://wa.me/212673709744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-xl bg-primary px-5 py-3 font-bold text-white transition hover:bg-rose-700"
                  >
                    Commander
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/#tarifs"
                className="inline-flex items-center rounded-full border border-slate-600 px-6 py-3 font-medium text-white transition hover:border-primary hover:text-primary"
              >
                Voir toutes nos offres
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
