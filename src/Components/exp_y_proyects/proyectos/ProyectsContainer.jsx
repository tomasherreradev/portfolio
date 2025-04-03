import ProyectsCard from "./card/ProyectsCard";
import arrowIcon from "/src/assets/icons/arrow.svg";

import hawkcodedImage from '/src/assets/images/proyectos/hawkcoded.webp'
import autosalexImage from '/src/assets/images/proyectos/autosalex.webp'
import artdhistoireImage from '/src/assets/images/proyectos/artdhistoire.webp'

const projects = [
  {
    img: hawkcodedImage,
    title: "HawkCoded - Freelancer",
    description: "Consiste en una landing page en la que se exhiben los servicios prestados por una empresa tecnológica.",
    href: 'https://phenomenal-strudel-e4e0c2.netlify.app/',
    skills: [
      "React",
      "Tailwind",
      "React Router",
      "TypeScript"
    ]
  },

  {
    img: autosalexImage,
    title: "Auto Subastas Salex - Freelancer",
    description: "Proyecto realizado con MERN, en este caso, para una casa de subastas de autos.",
    href: 'https://gentle-puppy-39cf62.netlify.app/',
    skills: [
      "React",
      "Styled Components",
      "Express",
      "MongoDB",
      "Node.js",
      "TypeScript"
    ]
  },

  {
    img: artdhistoireImage,
    title: "ArtD'Histoire - InitSoluciones",
    description: "Proyecto en el que participé activamente como Full-Stack Developer, añadiendo funcionalidades al frontend y backend.",
    href: 'https://artdhistoire.com/',
    skills: [
      "Laravel",
      "MySQL",
      "Tailwind",
      "Composer"
    ]
  },

];

export default function ProyectsContainer() {
  return (
    <section className="mt-44 relative" id='proyectos'>
      <div className="flex items-center exp-container">
        <div className="mr-4">
          <h2 className="text-[#8AEDC9] text-[18px] md:text-[22px] md:min-w-[209px] uppercase">Proyectos</h2>
        </div>

        <article>
          <div className="exp-card-container">
            {projects.map((project, index) => (
              <ProyectsCard
                key={index}
                img={project.img}
                title={project.title}
                description={project.description}
                href={project.href}
                skills={project.skills}
              />
            ))}
          </div>
        </article>
      </div>

      <div className="absolute right-10 my-6 group">
        <a
          className="flex items-center justify-center text-nowrap gap-3 transition-all group-hover:text-[#8AEDC9]"
          href="https://github.com/tomasherreradev?tab=repositories" target="_blank"
        >
          Repositorios
          <img src={arrowIcon} className="max-w-5 mt-[2px]" alt="arrow icon" />
        </a>
      </div>
    </section>
  );
}