import Nav from "./components/nav";

export default function Home() {
  return (
    <div>
      <header className="bg-[url('/assets/header-bg.jpg')] bg-cover bg-center h-[90vh] flex flex-col items-center gap-10">
        <Nav />
        <div>
          <h1 className="text-white">Inside</h1>
          <p className="text-white">Dans les yeux d'une dev</p>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center gap-16 px-32 py-14">
        <h2>Bienvenue !</h2>
        <section className="flex gap-14 p-10 border-stroke border-2 rounded-lg">
          <div className="flex flex-col gap-5">
            <h3>Inside qu'est-ce que c'est ?</h3>
            <p>
              Inside est un espace à mi-chemin entre le carnet de bord, le magazine et le reportage.C’est ici que je documente mes stages : non pas comme de simples lignes sur un CV, mais comme des expériences humaines, professionnelles, parfois drôles, parfois déroutantes — toujours formatrices.
              Chaque article est un regard personnel sur le monde du travail vu de l’intérieur : les équipes, les bureaux, les méthodes, les surprises.
              Pas de jargon ni de storytelling forcé : juste des récits authentiques, parfois critiques, souvent curieux.
              C’est aussi un projet d'exploration : que découvre-t-on vraiment quand on entre “dans la boîte” ?Inside, c’est ma manière de répondre à cette question.
            </p>
           
          </div>
          <img className="w-[500px] h-[300px] rounded-2xl" src="/assets/book-img.jpg" alt="" />
        </section>
        <div className="w-full flex items-center justify-center">
          <h2 className="text-center">"Chaque détour a construit la personne - et la développeuse - que je suis aujourd'hui"</h2>
        </div>
        <section className="flex gap-14 p-10 border-stroke border-2 rounded-lg">
          <img className="w-[600px] h-[300px] rounded-2xl" src="/assets/profil-img.jpg" alt="" />
          <div className="flex flex-col gap-5">
            <h3>Qui suis-je ?</h3>
            <p>
              Je m'appelle Emma, j'ai 26 ans et je suis étudiante en deuxième année de développement Web à l’ESD Bordeaux.
              Un parcours un peu atypique ? Peut-être.
              Mais chaque détour a construit la personne, et la développeuse, que je suis aujourd’hui.
              Avant le code, j’ai exploré d’autres voies : la géographie, l’enseignement, puis quatre années en études d’assistante sociale. 
              Des métiers riches humainement, mais où mon besoin de création restait en veille. Ce n’est qu’en découvrant le développement web 
              que tout s’est aligné : logique, créativité, autonomie, collaboration… j’avais trouvé ma voie.
              Aujourd’hui, je me spécialise en développement Fullstack, avec des compétences solides tant en front qu’en back.
              Mon objectif à court terme ? Monter en expertise technique.
              À long terme ? Piloter des projets, coordonner des équipes, et devenir cheffe de projet.
              Tout au long de ce site, vous découvrirez mes expériences en tant que stagiaire de première et deuxième année.
              N’hésitez pas à visiter mon portfolio et découvrir tout mes projets !
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}