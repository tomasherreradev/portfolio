import arrowIcon from '/src/assets/icons/arrow.svg';


export default function ProyectsCard({ img, title, description, skills }) {
  return (
    <div className="w-full max-w-[750px] flex p-4 rounded-xl border border-transparent transition-all bg-gray-900 hover:border-[#8AEDC9] group">
      <div className="flex flex-col items-start px-4">
        <a className="flex items-center gap-2 mb-4" href="https://mecanicoadomicilioenmedellin.com/" target="_blank" rel="noopener noreferrer">
          <img className="max-w-32" src={img} alt="imagen_proyecto" />
          <h3 className="transition-all group-hover:text-[#8AEDC9] text-[15px] xl:text-[18px] -[19px] sm:text-nowrap font-bold text-white">{title}</h3>
          <img src={arrowIcon} className="transition-all group-hover:text-[#8AEDC9] group-hover:max-w-5 max-w-4 rotate-[-30deg] max-sm:hidden" alt="ver sitio" />
        </a>
        
        <p className="text-left mb-5 text-white">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 py-4 rounded-md">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-white text-[13px] bg-[#538572] border border-[#8AEDC9] py-1 px-3 rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}