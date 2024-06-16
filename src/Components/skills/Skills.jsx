import icon1 from '/src/assets/icons-tech/1.svg';
import icon2 from '/src/assets/icons-tech/2.svg';
import icon3 from '/src/assets/icons-tech/3.svg';
import icon4 from '/src/assets/icons-tech/4.svg';
import icon5 from '/src/assets/icons-tech/5.svg';
import icon6 from '/src/assets/icons-tech/6.svg';
import icon7 from '/src/assets/icons-tech/7.svg';
import icon8 from '/src/assets/icons-tech/8.svg';
import icon9 from '/src/assets/icons-tech/9.svg';
import icon10 from '/src/assets/icons-tech/10.svg';
import icon11 from '/src/assets/icons-tech/11.svg';
import icon12 from '/src/assets/icons-tech/12.svg';
import icon13 from '/src/assets/icons-tech/13.svg';
import icon14 from '/src/assets/icons-tech/14.svg';


const skillData = [
  { name: "HTML5", icon: icon1 },
  { name: "CSS3", icon: icon2 },
  { name: "SCSS", icon: icon3 },
  { name: "Javascript", icon: icon4 },
  { name: "React", icon: icon5 },
  { name: "Tailwind", icon: icon6 },
  { name: "Node.js", icon: icon7 },
  { name: "MongoDB", icon: icon8 },
  { name: "MySQL", icon: icon9 },
  { name: "Express", icon: icon10 },
  { name: "VsCode", icon: icon11 },
  { name: "Postman", icon: icon12 },
  { name: "Responsive Design", icon: icon13 },
  { name: "RESTful APIs", icon: icon14 },
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
        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-12">
          {skillData.map((skill, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-between transform transition-transform duration-300 hover:scale-105"
            >
              <img
                className="max-w-[40px] h-full w-full max-h-[40px] filter hover:saturate-150"
                src={skill.icon}
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
