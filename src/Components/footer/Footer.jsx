import './footer.css';
import linkedin from "./../../assets/icons/linkedin-in.svg";
import gmail from "./../../assets/icons/gmail.svg";
import github from "./../../assets/icons/github.svg";
import whatsapp from "./../../assets/icons/whatsapp.svg";

const socialMedia = [
  { icon: linkedin, alt: "LinkedIn", name: "LinkedIn", url: 'https://www.linkedin.com/in/tomas-herrera-909345213/' },
  { icon: gmail, alt: "Gmail", name: "Gmail", url: 'mailto:herreratomas270@gmail.com' },
  { icon: github, alt: "Github", name: "Github", url: 'https://github.com/tomasherreradev' },
  { icon: whatsapp, alt: "Whatsapp", name: "Whatsapp", url: 'https://wa.me/+5493827431643' },
];

export default function Footer() {

  const email = "herreratomas270@gmail.com";

  return (
    <footer className="border-t border-[#69FEC7] absolute bottom-[-40rem] md:bottom-[-25rem] right-0 left-0 overflow-hidden" id="contacto">
      <section className="flex flex-col items-center min-[900px]:flex-row justify-center py-10 px-5 sm:px-10 md:px-20 xl:px-32 gap-10">
        <div className="md:max-w-[450px] flex flex-col items-start text-left">
          <h2 className="text-[#8AEDC9] text-[26px] md:text-[29px]">Conectemos!</h2>
          <p className="my-4">
            ¿Necesitas un desarrollador full-stack para tu proyecto?{" "}
            <a className="underline transition-colors hover:text-[#8AEDC9]" href={`mailto:${email}`} target="_blank">
              Envíame un email
            </a>{" "}
            para hacerlo realidad!
          </p>
        </div>

        <div className="w-full md:max-w-[450px]">
          <p className="text-left mb-3 text-sm">
            Medios de contacto alternativos:{" "}
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-6 md:justify-items-start">
            {socialMedia.map((media, index) => (
            <li key={index} className="flex gap-2 max-md:justify-center li-social group">
              <img className="max-w-5 transition-all duration-300 group-hover:fill-[#8AEDC9]" src={media.icon} alt={media.alt} />
              <a href={media.url} target='_blank' className="uppercase text-sm md:text-base transition-all duration-300 group-hover:text-[#8AEDC9]">
                {media.name}
              </a>
          </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
}
