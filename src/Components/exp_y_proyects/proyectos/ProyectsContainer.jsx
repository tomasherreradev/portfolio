import ProyectsCard from "./card/ProyectsCard";
import arrowIcon from "/src/assets/icons/arrow.svg";

import imgMec_Dom from '/src/assets/images/proyectos/mec_dom.webp'
import hylls_Rec from '/src/assets/images/proyectos/hylls-rec.webp'
import devWebCamp from '/src/assets/images/proyectos/dev-webcamp.webp'

const projects = [
  {
    img: imgMec_Dom,
    title: "Developer - Freelancer",
    description: "Consiste en una landing page en la que se exhiben los trabajos realizados para un taller mecánico de Medellín. Más allá del código, mi principal desafío fue optimizar el SEO y las publicidades con Google Ads.",
    href: 'https://mecanicoadomicilioenmedellin.com/',
    skills: [
      "React",
      "Tailwind",
      "React Router"
    ]
  },
  {
    img: hylls_Rec,
    title: "Developer - CODEYNC",
    description: "Proyecto que realicé en conjunto con mis compañeros de CodeYNC, trabajé gran parte del backend y un poco en el frontend.",
    href: 'https://hyllsrecords.com/',
    skills: [
      "Node.js",
      "Express",
      "React",
      "React Router",
      "MySQL",
      "Tailwind",
      "Figma",
      "Scrum",
      "Git",
      "Postman"
    ]
  },
  {
    img: devWebCamp,
    title: "Developer - Estudiante",
    description: "Fue un proyecto que hice como práctica integral de todo lo que aprendí. CRUDS, autenticaciones, panel de adminitración, pasarelas de pago, entre otras.",
    href: 'https://github.com/tomasherreradev/proyecto_campus',
    skills: [
      "Javascript",
      "HTML5",
      "CSS3",
      "SCSS",
      "MySQL",
      "PHP",
      "Gulp",
      "Composer",
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
          Ver Todos
          <img src={arrowIcon} className="max-w-5 mt-[2px]" alt="arrow icon" />
        </a>
      </div>
    </section>
  );
}