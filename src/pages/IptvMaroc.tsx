import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const protocolRows = [
  ['IGMP', 'Gestion des groupes multicast, zapping', 'IPTV operateur'],
  ['RTP / UDP', 'Transport du flux temps reel', 'IPTV operateur'],
  ['HLS', 'Segmentation et debit adaptatif', 'OTT, la majorite des services'],
  ['MPEG-DASH', "Equivalent ouvert de HLS", 'OTT, plateformes internationales'],
  ['LL-HLS / CMAF', 'Reduction de latence', 'Sport en direct'],
  ['XMLTV', 'Guide des programmes (EPG)', 'Les deux'],
  ['Widevine / PlayReady / FairPlay', 'Chiffrement des droits (DRM)', 'Services sous licence uniquement'],
];

const latencyRows = [
  ['IPTV operateur en multicast', '1 a 2 s'],
  ['TNT hertzienne', '2 a 4 s'],
  ['Satellite', '5 a 8 s'],
  ['LL-HLS', '3 a 6 s'],
  ['HLS classique', '20 a 45 s'],
];

const bitrateRows = [
  ['SD 576p', '2 a 3 Mbps', '1,5 Mbps', '5 Mbps'],
  ['HD 720p', '4 a 5 Mbps', '3 Mbps', '10 Mbps'],
  ['Full HD 1080p', '8 Mbps', '5 Mbps', '15 Mbps'],
  ['4K UHD', '35 Mbps', '18 a 25 Mbps', '40 Mbps'],
];

const legalOffers = [
  ['SNRT / Arryadia', 'Botola integrale, selection nationale, chaines publiques', 'Gratuit, TNT et application'],
  ['Bouquets TV operateurs', 'Chaines nationales et internationales, VOD', "Decodeur inclus dans l'offre fixe"],
  ['beIN CONNECT / beIN STREAM', 'Competitions internationales, boitier Wi-Fi', 'Application et appareil dedie'],
  ['TOD', 'Sport et divertissement en Ultra HD', 'Application multi-ecrans'],
  ['Netflix, Shahid, Prime Video', 'Films, series, production arabe', 'Application'],
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

export default function IptvMaroc() {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionElement = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionElement?.getAttribute('content') ?? '';
    const keywordsElement = document.querySelector('meta[name="keywords"]');
    const previousKeywords = keywordsElement?.getAttribute('content') ?? '';
    const canonicalElement = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalElement?.getAttribute('href') ?? '';

    document.title = "IPTV Maroc : comment ca marche et quelles offres sont legales";

    if (descriptionElement) {
      descriptionElement.setAttribute(
        'content',
        "IPTV Maroc : le fonctionnement technique, le debit reel necessaire par qualite d'image, les offres legales disponibles et les signes qui trahissent un service non autorise.",
      );
    }

    let metaKeywords = keywordsElement;
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'IPTV Maroc');

    let canonicalLink = canonicalElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://kooraiptv.com/iptv-maroc');

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
              IPTV Maroc
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
              IPTV au Maroc : fonctionnement, debit necessaire et offres legales
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              L&apos;IPTV, c&apos;est de la television transportee par le reseau IP au lieu du satellite ou du cable.
              Cette page couvre ce qui se passe techniquement entre le serveur et votre ecran, ce dont votre ligne a
              reellement besoin, et comment distinguer un service autorise d&apos;un service qui ne l&apos;est pas.
            </p>
          </header>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Deux architectures, souvent confondues</h2>
            <p>
              Le mot &laquo; IPTV &raquo; recouvre deux modeles differents. La confusion entre les deux explique une bonne partie
              des malentendus sur la qualite et la stabilite.
            </p>
            <p>
              <strong className="text-white">L&apos;IPTV managee.</strong> C&apos;est le modele de l&apos;operateur telecom. Le flux video reste a l&apos;interieur
              de son reseau, de la tete de reseau jusqu&apos;a votre box. L&apos;operateur maitrise le chemin complet. Il peut donc
              reserver de la bande passante et appliquer une politique de qualite de service. Les chaines en direct passent
              generalement en multicast : un seul flux est diffuse sur le reseau, et votre box rejoint le groupe correspondant
              a la chaine via IGMP.
            </p>
            <p>
              <strong className="text-white">L&apos;OTT.</strong> Le flux traverse l&apos;internet public, comme n&apos;importe quel trafic web. Aucune garantie
              de bout en bout. Pour compenser, la video est decoupee en segments de quelques secondes servis en HTTPS, avec
              plusieurs qualites disponibles en parallele. Le lecteur bascule d&apos;un niveau a l&apos;autre selon le debit mesure.
              C&apos;est le principe du debit adaptatif.
            </p>
            <p>
              La difference pratique : en managee, la qualite depend de l&apos;operateur. En OTT, elle depend de votre ligne et de
              la charge des serveurs a l&apos;instant T.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Les protocoles en jeu</h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-800/50">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-800 text-slate-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Protocole</th>
                    <th className="px-4 py-3 font-semibold">Role</th>
                    <th className="px-4 py-3 font-semibold">Ou on le trouve</th>
                  </tr>
                </thead>
                <tbody>
                  {protocolRows.map(([protocol, role, where]) => (
                    <tr key={protocol} className="border-t border-slate-700 text-slate-300">
                      <td className="px-4 py-3 font-medium text-white">{protocol}</td>
                      <td className="px-4 py-3">{role}</td>
                      <td className="px-4 py-3">{where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-300 leading-8">
              Ce tableau contient un detail qui sert plus loin dans cette page : la derniere ligne. Le DRM reste un marqueur
              technique fort des services sous licence.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white">La latence, le vrai sujet pour le sport</h2>
            <p className="text-slate-300 leading-8">
              Personne ne remarque deux secondes de retard sur une serie. Sur un match, si.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-800/50">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-800 text-slate-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Mode de diffusion</th>
                    <th className="px-4 py-3 font-semibold">Retard sur le direct</th>
                  </tr>
                </thead>
                <tbody>
                  {latencyRows.map(([mode, delay]) => (
                    <tr key={mode} className="border-t border-slate-700 text-slate-300">
                      <td className="px-4 py-3">{mode}</td>
                      <td className="px-4 py-3 font-medium text-white">{delay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-300 leading-8">
              Un service qui accuse trente secondes de retard, c&apos;est le voisin qui crie le but avant que vous le voyiez.
              Beaucoup de services bon marche tournent en HLS standard avec des segments longs, parce que ca coute moins cher
              en infrastructure.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Le debit dont vous avez besoin</h2>
            <p className="text-slate-300 leading-8">
              Les chiffres annonces par les revendeurs sont systematiquement optimistes. Voici des valeurs realistes, en tenant
              compte du codec.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-800/50">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-800 text-slate-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Qualite</th>
                    <th className="px-4 py-3 font-semibold">Codec H.264</th>
                    <th className="px-4 py-3 font-semibold">Codec HEVC</th>
                    <th className="px-4 py-3 font-semibold">Debit de ligne conseille</th>
                  </tr>
                </thead>
                <tbody>
                  {bitrateRows.map(([quality, h264, hevc, advised]) => (
                    <tr key={quality} className="border-t border-slate-700 text-slate-300">
                      <td className="px-4 py-3 font-medium text-white">{quality}</td>
                      <td className="px-4 py-3">{h264}</td>
                      <td className="px-4 py-3">{hevc}</td>
                      <td className="px-4 py-3">{advised}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="list-disc space-y-3 pl-6 text-slate-300 leading-8">
              <li>Le debit conseille est par flux. Deux televiseurs en Full HD en meme temps, c&apos;est le double.</li>
              <li>
                La stabilite compte davantage que le debit brut. Une ligne a 20 Mbps reguliere donne un meilleur resultat
                qu&apos;une ligne a 50 Mbps qui chute aux heures de pointe.
              </li>
            </ul>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Le materiel</h2>
            <p>Trois configurations couvrent la quasi-totalite des usages.</p>
            <p>
              <strong className="text-white">Le decodeur de l&apos;operateur.</strong> Fourni avec l&apos;abonnement, configure d&apos;avance, lie au reseau de
              l&apos;operateur. Rien a regler.
            </p>
            <p>
              <strong className="text-white">La Smart TV.</strong> Les televiseurs recents embarquent les applications des plateformes principales.
              Attention a l&apos;age de l&apos;appareil : un modele de plus de cinq ans perd progressivement le support applicatif.
            </p>
            <p>
              <strong className="text-white">Le boitier externe.</strong> Android TV, Apple TV ou cle HDMI. Utile quand le televiseur est ancien
              ou que son interface est lente.
            </p>
            <p>
              Sur le decodage 4K, verifiez le support HEVC en materiel. Un decodage logiciel sur un processeur d&apos;entree de
              gamme produit des saccades sur les scenes rapides.
            </p>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Legal ou pas : comment trancher</h2>
            <p>
              C&apos;est le point qui determine tout le reste, et il se tranche sur des criteres objectifs, pas sur l&apos;apparence du
              site. Un service de television doit acquerir des droits de diffusion. Ces droits sont vendus par territoire, par
              competition et pour une duree definie.
            </p>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong className="text-white">Le nombre de chaines.</strong> Les catalogues affichant 20 000, 100 000 ou 200 000 chaines sont un
                signal immediat.
              </li>
              <li>
                <strong className="text-white">L&apos;absence de DRM.</strong> Un service distribue sous forme de simple liste M3U lisible par n&apos;importe
                quel lecteur ne peut pas etre sous licence.
              </li>
              <li>
                <strong className="text-white">Le prix.</strong> Un abonnement annuel a 250 ou 300 dirhams incluant l&apos;integralite des bouquets
                sportifs internationaux ne couvre aucun cout de licence.
              </li>
              <li>
                <strong className="text-white">Le canal de vente.</strong> Activation par WhatsApp, paiement par virement ou transfert d&apos;argent,
                identifiants envoyes en message prive.
              </li>
              <li>
                <strong className="text-white">L&apos;absence d&apos;entite juridique.</strong> Pas de raison sociale, pas d&apos;adresse, pas d&apos;immatriculation.
              </li>
              <li>
                <strong className="text-white">Les mentions de contournement geographique.</strong> Un service autorise sur un territoire n&apos;a aucune
                raison de mentionner le contournement de restrictions regionales.
              </li>
            </ul>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Les risques concrets</h2>
            <p>Au-dela de la question legale, l&apos;exposition pratique est reelle.</p>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong className="text-white">Paiement.</strong> Vous transmettez des donnees bancaires a une entite non identifiee, sans
                processeur de paiement etabli.
              </li>
              <li>
                <strong className="text-white">Applications hors magasin.</strong> Les fichiers APK distribues en dehors des magasins officiels
                ne passent aucun controle.
              </li>
              <li>
                <strong className="text-white">Interruptions.</strong> Ces services disparaissent regulierement, a la suite d&apos;actions des ayants
                droit ou simplement parce que l&apos;exploitant arrete.
              </li>
              <li>
                <strong className="text-white">Donnees personnelles.</strong> Nom, numero de telephone, adresse e-mail et coordonnees bancaires
                remis a une structure inconnue.
              </li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Les offres legales accessibles au Maroc</h2>
            <p className="text-slate-300 leading-8">
              L&apos;offre autorisee s&apos;est nettement etoffee depuis fin 2025, portee par la CAN organisee au Maroc puis par la
              Coupe du monde.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-800/50">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-800 text-slate-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Service</th>
                    <th className="px-4 py-3 font-semibold">Contenu principal</th>
                    <th className="px-4 py-3 font-semibold">Support</th>
                  </tr>
                </thead>
                <tbody>
                  {legalOffers.map(([service, content, support]) => (
                    <tr key={service} className="border-t border-slate-700 text-slate-300">
                      <td className="px-4 py-3 font-medium text-white">{service}</td>
                      <td className="px-4 py-3">{content}</td>
                      <td className="px-4 py-3">{support}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-300 leading-8">
              Le point que beaucoup ignorent : la Botola et les matchs des Lions de l&apos;Atlas sont diffuses gratuitement sur le
              service public. Pour un supporter dont c&apos;est l&apos;essentiel de la consommation, la question de l&apos;abonnement ne se
              pose meme pas.
            </p>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Questions frequentes</h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">L&apos;IPTV est-elle legale au Maroc ?</h3>
                <p className="mt-3">
                  La technologie est parfaitement legale et utilisee par tous les operateurs telecoms du pays. Ce qui est
                  illegal, c&apos;est la distribution de contenus sans detenir les droits correspondants.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Pourquoi mon flux se coupe pendant les matchs ?</h3>
                <p className="mt-3">
                  Trois causes possibles : votre ligne sature, le serveur du service est surcharge, ou votre Wi-Fi est le
                  goulot d&apos;etranglement. Testez en Ethernet pour eliminer la troisieme hypothese.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Une connexion 4G suffit-elle ?</h3>
                <p className="mt-3">
                  Pour de la HD sur telephone, oui, avec une couverture correcte. Pour du 4K sur grand ecran, non de maniere
                  fiable.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Qu&apos;est-ce qu&apos;un fichier M3U ?</h3>
                <p className="mt-3">
                  Un fichier texte listant des adresses de flux, avec les noms de chaines associes. C&apos;est un format de liste
                  de lecture, sans mecanisme de protection ni de licence integre.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Pourquoi les services non autorises coutent-ils si peu ?</h3>
                <p className="mt-3">
                  Parce qu&apos;ils ne supportent aucun cout de droits, aucune fiscalite et aucune obligation de service.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Un VPN rend-il l&apos;usage legal ?</h3>
                <p className="mt-3">
                  Non. Un VPN masque l&apos;origine de la connexion. Il ne cree aucun droit d&apos;acces a un contenu et ne change rien a
                  la nature de l&apos;infraction.
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
