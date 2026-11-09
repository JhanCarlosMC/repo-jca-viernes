import './styles/Header.css'

function Header() {

    return (
        <header>
            <div className="logo">
                <h1>Momentia</h1>
                <p>Regala momentos, crea recuerdos.</p>
            </div>

            <nav>
                <a href="#inicio">Inicio</a>
                <a href="#experiencias">Experiencias</a>
                <a href="#como-funciona">¿Cómo funciona?</a>
                <a href="#nosotros">Nosotros</a>
                <a href="#contacto">Contacto</a>
            </nav>

        </header>
    )

}

export default Header