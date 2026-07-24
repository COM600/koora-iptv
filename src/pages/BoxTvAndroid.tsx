import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const specsRows = [
  ['Decodage HEVC materiel', 'Obligatoire', 'Sans lui, saccades sur les scenes rapides'],
  ['Decodage AV1 materiel', 'Recommande', "De plus en plus de plateformes l'utilisent"],
  ['Memoire vive', '2 Go minimum, 4 Go confortable', "En dessous, l'interface rame apres quelques mois"],
  ['Stockage interne', '16 Go minimum', '8 Go se remplit avec quelques applications'],
  ['Sortie HDMI', '2.0 avec HDCP 2.2', 'HDMI 2.1 utile seulement pour le jeu'],
  ['Wi-Fi', 'Bibande, 5 GHz obligatoire', 'Le 2,4 GHz seul ne tient pas la 4K'],
  ['Ethernet', '100 Mbps suffit', 'La 4K demande 40 Mbps, le Gigabit est un argument marketing ici'],
  ['Alimentation', 'Bloc separe de qualite', 'Cause frequente de redemarrages aleatoires'],
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

export default function BoxTvAndroid() {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionElement = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionElement?.getAttribute('content') ?? '';
    const keywordsElement = document.querySelector('meta[name="keywords"]');
    const previousKeywords = keywordsElement?.getAttribute('content') ?? '';
    const canonicalElement = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalElement?.getAttribute('href') ?? '';

    document.title = 'Box TV : quel boitier choisir et les pieges a eviter';

    if (descriptionElement) {
      descriptionElement.setAttribute(
        'content',
        "Box TV : la certification de l'appareil et la chaine HDCP determinent la qualite que vous obtiendrez reellement. Criteres techniques, reseau, audio et pieges a l'achat.",
      );
    }

    let metaKeywords = keywordsElement;
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'box TV');

    let canonicalLink = canonicalElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://kooraiptv.com/box-tv-android');

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
              box TV
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
              Box TV : choisir son boitier sans se tromper sur les deux points qui comptent
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Un boitier TV coute entre 300 et 2 000 dirhams. L&apos;ecart de prix se voit a l&apos;usage, et il tient surtout
              a deux caracteristiques que les vendeurs mentionnent tres peu : la certification et la chaine HDCP.
            </p>
          </header>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Trois situations, trois reponses</h2>
            <p>
              <strong className="text-white">Votre televiseur a moins de trois ans.</strong> Il embarque probablement deja tout
              ce qu&apos;il faut. Testez d&apos;abord les applications integrees. Si l&apos;interface est fluide et que vos services
              fonctionnent, un boitier n&apos;apporte rien.
            </p>
            <p>
              <strong className="text-white">Votre televiseur a entre trois et huit ans.</strong> C&apos;est le cas type. La dalle
              est encore bonne, mais le systeme ralentit et les applications recentes ne s&apos;installent plus. Un boitier
              externe est alors la bonne reponse.
            </p>
            <p>
              <strong className="text-white">Votre televiseur n&apos;a pas de partie connectee.</strong> Un boitier est
              indispensable. Verifiez simplement la presence d&apos;une entree HDMI.
            </p>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Le piege numero un : certifie ou non certifie</h2>
            <p>
              Un boitier certifie a passe le processus de validation de la plateforme. Il donne acces au magasin
              d&apos;applications officiel, recoit les mises a jour de securite, et surtout dispose du niveau de securite
              materiel exige par les services premium.
            </p>
            <p>
              Un boitier non certifie tourne sur une version d&apos;Android brute, sans validation. Il s&apos;allume, il navigue,
              il a l&apos;air identique. Mais il ne dispose que du niveau de securite logiciel.
            </p>
            <p>
              La consequence est directe : les services sous licence plafonnent volontairement la definition. Vous payez un
              abonnement 4K, vous avez une image en 540p ou 720p, sans message clair.
            </p>
            <p>
              Avant d&apos;acheter, verifiez la mention de certification sur l&apos;emballage et la presence du magasin
              d&apos;applications officiel. Un appareil vendu avec un magasin alternatif ou des applications deja installees
              n&apos;est pas certifie.
            </p>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Le piege numero deux : la chaine HDCP</h2>
            <p>
              Le contenu protege exige une protection du signal sur toute la liaison video. Pour de la 4K sous licence, il
              faut du HDCP 2.2 au minimum, et il le faut partout : sur le boitier, le cable HDMI, le televiseur, et
              l&apos;amplificateur si vous en utilisez un.
            </p>
            <p>
              Un seul maillon non conforme et le resultat est binaire : soit la definition retombe en HD, soit l&apos;ecran
              reste noir avec un message d&apos;erreur.
            </p>
            <p>
              Les causes les plus frequentes sont un vieil ampli home cinema, un cable HDMI douteux, ou un repartiteur HDMI
              bon marche. Le test le plus utile consiste a brancher le boitier directement sur le televiseur.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white">La fiche technique : ce qui compte vraiment</h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-800/50">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-800 text-slate-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Caracteristique</th>
                    <th className="px-4 py-3 font-semibold">Seuil utile</th>
                    <th className="px-4 py-3 font-semibold">Remarque</th>
                  </tr>
                </thead>
                <tbody>
                  {specsRows.map(([feature, threshold, note]) => (
                    <tr key={feature} className="border-t border-slate-700 text-slate-300">
                      <td className="px-4 py-3 font-medium text-white">{feature}</td>
                      <td className="px-4 py-3">{threshold}</td>
                      <td className="px-4 py-3">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="list-disc space-y-3 pl-6 text-slate-300 leading-8">
              <li>Le nombre de coeurs du processeur ne dit rien de la performance de decodage video.</li>
              <li>Les resolutions annoncees en 8K sur l&apos;entree de gamme decrivent souvent la sortie, pas le decodage reel.</li>
            </ul>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Reseau : ou se perd vraiment la qualite</h2>
            <p>
              Sur les problemes de lecture, le reseau local est en cause bien plus souvent que la ligne internet. Le Wi-Fi
              2,4 GHz est sature partout en zone urbaine, alors que le 5 GHz porte moins loin mais tient un debit stable.
            </p>
            <p>
              Une regle pratique : si le boitier est a plus de deux pieces de la box internet, la stabilite chute vite en
              Wi-Fi 5 GHz. Deux options deviennent alors pertinentes : un cable Ethernet, ou un repeteur place a mi-chemin.
            </p>
            <p>
              Point souvent mal compris : un port Ethernet a 100 Mbps ne limite pas le streaming video. Pour les bases
              techniques et <Link to="/iptv-maroc" className="text-primary hover:text-rose-400 transition">les offres disponibles au Maroc</Link>,
              le dossier principal reste la bonne entree.
            </p>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">L&apos;audio, si vous avez un ampli</h2>
            <p>
              Le boitier doit transmettre le flux audio sans le retoucher. Sans cette transmission directe, le multicanal
              est converti en stereo et l&apos;ampli ne sert plus a rien.
            </p>
            <p>
              Verifiez la prise en charge du Dolby Digital Plus au minimum. Le Dolby Atmos et le DTS dependent des licences
              integrees a l&apos;appareil, et tous les boitiers ne les payent pas.
            </p>
            <p>
              Si votre televiseur est branche en HDMI ARC vers l&apos;ampli, verifiez que le format audio n&apos;est pas degrade au
              passage. Le eARC regle ce probleme, mais il faut qu&apos;il soit present des deux cotes.
            </p>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Les boitiers vendus prets a l&apos;emploi</h2>
            <p>
              Une pratique repandue consiste a livrer un boitier avec des applications deja installees et des acces deja
              configures. Ce que vous achetez dans ce cas, ce n&apos;est pas seulement du materiel, c&apos;est un acces.
            </p>
            <ul className="list-disc space-y-3 pl-6">
              <li>L&apos;appareil n&apos;est generalement pas certifie, avec les limites de definition qui vont avec.</li>
              <li>Les applications hors magasin officiel n&apos;ont passe aucun controle de securite.</li>
              <li>Les acces configures cessent souvent de fonctionner au plus mauvais moment.</li>
            </ul>
            <p>
              Pour bien comprendre <Link to="/lecteur-iptv" className="text-primary hover:text-rose-400 transition">l&apos;application qui lit le flux</Link>,
              il vaut la peine de lire le guide dedie aux lecteurs IPTV.
            </p>
          </section>

          <section className="space-y-5 text-slate-300 leading-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Questions frequentes</h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Un boitier ameliore-t-il l&apos;image de mon televiseur ?</h3>
                <p className="mt-3">
                  Non. Il change la source et l&apos;interface, pas la dalle. Ce qu&apos;il apporte, c&apos;est un decodage correct
                  des formats recents et des applications a jour.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Faut-il un boitier si ma TV est deja connectee ?</h3>
                <p className="mt-3">Seulement si l&apos;interface est devenue lente ou si vos applications ne sont plus disponibles.</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Pourquoi mon image est-elle limitee alors que tout est en 4K ?</h3>
                <p className="mt-3">
                  Dans la majorite des cas, soit le boitier n&apos;est pas certifie, soit un maillon HDCP n&apos;est pas conforme.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Une cle HDMI vaut-elle un boitier ?</h3>
                <p className="mt-3">
                  Sur le principe oui, avec les memes criteres. En pratique, les cles chauffent davantage sur les usages longs.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Combien de temps dure un boitier ?</h3>
                <p className="mt-3">
                  Comptez quatre a cinq ans avant que les mises a jour s&apos;arretent et que les applications recentes deviennent incompatibles.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-bold text-white">Le port Ethernet a 100 Mbps est-il un defaut ?</h3>
                <p className="mt-3">Non, pas pour la video. Un flux 4K reste bien en dessous de cette limite.</p>
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
