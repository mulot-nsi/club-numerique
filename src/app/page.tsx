import { Monitor, Palette, Code, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <header className="px-4 py-16 text-center">
        <h1 className="mb-6 text-4xl font-bold text-blue-800">Club Numérique</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-700">
          Le Club numérique, c&rsquo;est un espace convivial où chacune et chacun peut explorer la
          technologie à son rythme ! Vous avez besoin de mieux comprendre le fonctionnement de votre
          ordinateur et de ses logiciels ? Vous souhaitez expérimenter une activité créative comme
          la retouche photo, ou plus technique comme la programmation ? Venez avec vos
          interrogations, vos envies ou vos projets, notre club est fait pour vous.
        </p>
      </header>

      {/* Sections */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Section Bureautique */}
          <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-4 flex justify-center">
              <Monitor className="h-16 w-16 text-blue-500" />
            </div>
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">Bureautique</h2>
            <p className="text-gray-600">
              Vous avez des difficultés à organiser vos fichiers et dossiers ? Vous souhaitez
              apprendre à utiliser les logiciels de traitement de texte ou de diaporama ? Vous
              trouveriez pratique d&rsquo;accéder à vos emails depuis une seule application sur
              votre ordinateur ou votre téléphone ? Vous n&rsquo;avez pas activé votre espace de
              stockage sur le Cloud ?
            </p>
            <p className="mt-4 text-center font-bold text-gray-700">
              Passez au Club Numérique, vous verrez, ce n&rsquo;est pas compliqué 😌
            </p>
          </div>

          {/* Section Création */}
          <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-4 flex justify-center">
              <Palette className="h-16 w-16 text-pink-500" />
            </div>
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">Création</h2>
            <p className="text-gray-600">
              Vous souhaitez apprendre à retoucher vos photos ? Vous avez des idées d&rsquo;objets
              à concevoir et imprimer en 3D ? Vous avez besoin de communiquer par la réalisation
              d&rsquo;affiches, de flyers ou de stickers ?
            </p>
            <p className="mt-4 text-center font-bold text-gray-700">
              Au Club Numérique, découvrez de nouveaux outils et lancez-vous dans vos premiers
              projets créatifs 🤩
            </p>
          </div>

          {/* Section Technique */}
          <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-4 flex justify-center">
              <Code className="h-16 w-16 text-purple-500" />
            </div>
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">Technique</h2>
            <p className="text-gray-600">
              Vous souhaitez découvrir la programmation ou approfondir vos connaissances en la
              matière ? Créer votre premier site web, développer une application, manipuler des
              données ou concevoir un petit jeu vidéo ? Vous aimeriez explorer l&rsquo;informatique
              embarquée en expérimentant avec des cartes programmables ?
            </p>
            <p className="mt-4 text-center font-bold text-gray-700">
              Venez au Club Numérique et donnez vie à vos projets 👩‍💻👨‍💻
            </p>
          </div>
        </div>
      </div>

      {/* Info pratiques */}
      <div className="mt-12 bg-blue-800 px-4 py-8 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex items-center justify-center">
            <Clock className="mr-2 h-8 w-8" />
            <h2 className="text-2xl font-bold">Informations pratiques</h2>
          </div>
          <p className="text-lg">
            Rendez-vous chaque mercredi entre 12h15 et 14h15 en salle C019 !
            <br />
            Venez une heure ou deux heures selon votre convenance.
            <br />
            Vous êtes autorisés à apporter un déjeuner 🍔 !
          </p>
        </div>
      </div>
    </div>
  );
}
