import ProyectsCard from "./card/ProyectsCard";
import arrowIcon from "/src/assets/icons/arrow.svg";

import imgMec_Dom from '/src/assets/images/proyectos/mec_dom.webp'

const projects = [
  {
    img: imgMec_Dom,
    title: "Developer - Freelancer",
    description: "Me encargué de planificar, diseñar, codificar, posicionar y publicitar los proyectos que conseguía en plataformas como Workana, Discord, entre otras.",
    skills: [
      "Javascript",
      "HTML5",
      "CSS3",
      "PHP",
      "MySQL",
      "SCSS",
      "Figma",
    ]
  },
  {
    img: imgMec_Dom,
    title: "Developer - Freelancer",
    description: "Me encargué de planificar, diseñar, codificar, posicionar y publicitar los proyectos que conseguía en plataformas como Workana, Discord, entre otras.",
    skills: [
      "Javascript",
      "HTML5",
      "CSS3",
      "PHP",
      "MySQL",
      "SCSS",
      "Figma",
    ]
  },
  {
    img: imgMec_Dom,
    title: "Developer - Freelancer",
    description: "Me encargué de planificar, diseñar, codificar, posicionar y publicitar los proyectos que conseguía en plataformas como Workana, Discord, entre otras.",
    skills: [
      "Javascript",
      "HTML5",
      "CSS3",
      "PHP",
      "MySQL",
      "SCSS",
      "Figma",
    ]
  }
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
          Ver Todos
          <img src={arrowIcon} className="max-w-5 mt-[2px]" alt="arrow icon" />
        </a>
      </div>
    </section>
  );
}