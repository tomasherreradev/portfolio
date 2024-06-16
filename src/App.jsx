import './App.css'
import Navigation from './Components/navegacion/Navigation'
import Presentacion from './Components/presentacion/Presentacion'
import ExpProyectsContainer from './Components/exp_y_proyects/experiencia/ExpContainer'
import ProyectsContainer from './Components/exp_y_proyects/proyectos/ProyectsContainer'
import Skills from './Components/skills/Skills'
import Footer from './Components/footer/Footer'
import SVGAnimation from './Components/background/SVGAnimation'

//ipad cursor
import { IPadCursorProvider, useIPadCursor } from 'ipad-cursor/react'

function App() {

  const config = {};
  useIPadCursor();


  return (
    <IPadCursorProvider config={config}>
        <SVGAnimation/>
        <Navigation/>
        <Presentacion/>
        <ExpProyectsContainer/>
        <ProyectsContainer/>
        <Skills/>
        <Footer/>
    </IPadCursorProvider>
  )
}

export default App
