import './presentacion.css';
import fotoPerfil from './../../assets/images/perfil.jpg'

export default function Presentacion() {
  return (
    <div className='my-16' id='sobre-mi'>
        <div className='flex flex-col items-start text-left'>
            <h1 className='text-white font-extrabold md:text-[4.5em]'>Tomás Herrera<span className='text-[#8AEDC9]'>.</span></h1>
            <span className='text-[14px]'>Frontend & Backend Developer</span>
        </div>

        <div className='flex items-center pt-10 gap-10 presentacion-container-foto'>
          <div className='min-w-64 min-h-64'>
            <img className='w-full h-full max-h-64 max-w-64 rounded-[100%]' src={fotoPerfil} alt="foto de perfil" />
          </div>
            <p className='text-[14px] text-left font-light sm:px-2 xl:px-24 text-white'>
                Hola! Soy Tomás, tengo 23 años, <span className='font-black'>vivo en La Rioja, Argentina.</span> Me especializo en la creación de aplicaciones web visualmente atractivas y altamente funcionales. En todos mis proyectos, me destaqué por cumplir con mis responsabilidades sin importar la dificultad y los tiempos de entrega.
            </p>
        </div>
    </div>
  )
}
