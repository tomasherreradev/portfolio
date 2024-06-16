const skillData = [
  { name: "HTML5", icon: "1" },
  { name: "CSS3", icon: "2" },
  { name: "SCSS", icon: "3" },
  { name: "Javascript", icon: "4" },
  { name: "React", icon: "5" },
  { name: "Tailwind", icon: "6" },
  { name: "Node.js", icon: "7" },
  { name: "MongoDB", icon: "8" },
  { name: "MySQL", icon: "9" },
  { name: "Express", icon: "10" },
  { name: "VsCode", icon: "11" },
  { name: "Postman", icon: "12" },
  { name: "Responsive Design", icon: "13" },
  { name: "RESTful APIs", icon: "14" },
];

export default function Skills() {
  return (
    <div className="mt-44 flex flex-col items-center md:px-20 xl:px-44">
      <div>
        <h2 className="text-[#8AEDC9] text-[18px] md:text-[22px] md:min-w-[209px] uppercase">
          Skills & herramientas
        </h2>
        <p className="mb-16 mt-6 text-left text-[14px]">
          Las habilidades, herramientas y tecnologías que uso para darle vida a
          tus proyectos:
        </p>
      </div>
      <section>
        <ul className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-12">
          {skillData.map((skill, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-between transform transition-transform duration-300 hover:scale-105"
            >
              <img
                className="max-w-[40px] h-full w-full max-h-[40px] filter hover:saturate-150"
                src={`./src/assets/icons/tecnologias/${skill.icon}.svg`}
                alt={skill.name}
              />
              <p className="text-[14px]">{skill.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
