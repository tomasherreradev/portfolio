import "./nav.css";
import { useState } from "react";
import downLoadIcon from "./../../assets/icons/download.svg";
import barsMenu from "./../../assets/icons/bars.svg";
import closeMenu from "./../../assets/icons/x-solid.svg";
import handIcon from "./../../assets/icons/hand.svg";

export default function NavigationDesk() {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  const enlaces = [
    {name: 'Sobre Mi', href:'#sobre-mi'},
    {name: 'Experiencia', href:'#experiencia'},
    {name: 'Proyectos', href:'#proyectos'},
    {name: 'Contacto', href:'#contacto'}
  ];

  const toggleMobileMenu = () => {
    setIsMenuMobileOpen((prev) => !prev);
  };


  const handleScroll = (e, href)=> {
    e.preventDefault();
    const target = document.querySelector(href);
    if(target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });

      setIsMenuMobileOpen(false)
    }
  }
  

  return (
    <header className="w-full overflow-hidden relative">
      <nav className="w-full flex justify-between items-center md:p-4">
        <a className="flex border border-[#8AEDC9] py-2 px-5 rounded-md button"               
           href="/cv-mayo-tomas-herrera.pdf"
           download={'cv-tomas-herrera'}>

          <p className="font-light">cv._</p>
          <img className="w-full max-w-6" src={downLoadIcon} alt="descargar" />

        </a>

        {/* Desktop Menu */}
        <div className="menuDesk">
          <ul className="flex gap-4 group">
            {enlaces.map((enlace) => (
              <li key={enlace.name}>
                <a href={`/${enlace.href}`} className="text-[14px] xl:text-[16px] transition-all hover:text-[#8AEDC9] font-light group-hover:opacity-60 hover:!opacity-100" onClick={(e) => handleScroll(e, enlace.href)}>
                  &#47;&#47;{enlace.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="w-full max-w-10 md:hidden">
          <div className="w-full cursor-pointer" onClick={toggleMobileMenu}>
            <img src={barsMenu} className="w-8" alt="toggleMenu" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`menuMobile ${isMenuMobileOpen ? "show" : ""}`}>
          <button className="close-mobile-menu-button" onClick={toggleMobileMenu}>
            <img className="w-8" src={closeMenu} alt="cerrar" />
          </button>
          <ul className="gap-4">
            {enlaces.map((enlace) => (
              <li key={enlace.name}>
                <a href={`/${enlace.href}`} className="transition-all hover:text-[#8AEDC9] font-light">
                  &#47;&#47;{enlace.name}
                </a>
              </li>
            ))}
          </ul>

          {isMenuMobileOpen && (
            <img alt="hola" src={handIcon} className="handIcon" ></img>
          )}
        </div>
      </nav>
    </header>
  );
}
