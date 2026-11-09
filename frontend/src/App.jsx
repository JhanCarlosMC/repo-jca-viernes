import { Link, Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import GestionProducto from "./pages/GestionProducto"
import './App.css'

/**
 * Link - Navegacion sin recargar
 * Route - Definicion de una ruta
 * Routes - Contenedor de rutas
 * BrowserRouter - Agrupa todos los elementos de la App
 */

export default function App(){
  return(
    <BrowserRouter>
      <nav className="site-nav" aria-label="Navegación principal">
        <Link className="site-nav__brand" to="/">La Marteja Repostería</Link>
        <div className="site-nav__links">
          <Link className="site-nav__link" to="/">Inicio</Link>
          <Link className="site-nav__link" to="/productos">Productos</Link>
        </div>
      </nav>

      {/** Contenido de rutas */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productos" element={<GestionProducto/>}/>
      </Routes>

      <footer className="site-footer">
        <p className="site-footer__text">Derechos de autor reservados</p>
      </footer>
    </BrowserRouter>
  )
}