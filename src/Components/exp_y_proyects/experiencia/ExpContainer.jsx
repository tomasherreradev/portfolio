import './expContainer.css';
import ExpCard from './card/ExpCard';

const experiences = [
  {
    year: '2022 - 2023',
    title: 'Developer - Freelancer',
    role: 'Full-Stack Developer',
    description: 'Me encargué de planificar, diseñar, codificar, posicionar y publicitar los proyectos que conseguía en plataformas como Workana, Discord, entre otras.',
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
    year: '2022 - 2023',
    title: 'Developer - Freelancer',
    role: 'Full-Stack Developer',
    description: 'Me encargué de planificar, diseñar, codificar, posicionar y publicitar los proyectos que conseguía en plataformas como Workana, Discord, entre otras.',
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
    year: '2022 - 2023',
    title: 'Developer - Freelancer',
    role: 'Full-Stack Developer',
    description: 'Me encargué de planificar, diseñar, codificar, posicionar y publicitar los proyectos que conseguía en plataformas como Workana, Discord, entre otras.',
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

export default function ExpContainer() {
  return (
    <section className="mt-24" id='experiencia'>
      <div className="flex items-center exp-container">
        <div className="mr-4">
          <h2 className="text-[#8AEDC9] text-[18px] md:text-[22px] uppercase">Experiencia</h2>
        </div>

        <article>
          <div className="exp-card-container">
            {experiences.map((exp, index) => (
              <ExpCard
                key={index}
                year={exp.year}
                title={exp.title}
                role={exp.role}
                description={exp.description}
                skills={exp.skills}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
