
import './style/Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <main className="home">
            <section className="home__hero" aria-labelledby="home-title">
                <div className="home__hero-content">
                    <p className="home__eyebrow">Un momento dulce empieza aquí</p>
                    <h1 className="home__title" id="home-title">
                        Bienvenido a La Marteja Repostería
                    </h1>
                    <p className="home__lead">
                        Descubre sabores para disfrutar, compartir y convertir cualquier día en una ocasión especial.
                    </p>
                    <Link className="home__button" to="/productos">
                        Explorar productos
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
                <div className="home__hero-decoration" aria-hidden="true">
                    <span className="home__decoration-sparkle">✦</span>
                    <span className="home__decoration-circle" />
                </div>
            </section>

            <section className="home__occasions" aria-labelledby="home-occasions-title">
                <div className="home__section-heading">
                    <p className="home__eyebrow home__eyebrow--dark">Un antojo, un buen plan</p>
                    <h2 className="home__section-title" id="home-occasions-title">
                        Hay un dulce para cada momento
                    </h2>
                    <p className="home__description">
                        Encuentra algo rico para acompañar tus pausas, compartir en casa o celebrar con quienes más quieres.
                    </p>
                </div>

                <div className="home__occasion-grid">
                    <article className="home__occasion-card">
                        <span className="home__occasion-icon" aria-hidden="true">☕</span>
                        <h3 className="home__occasion-title">Tu pausa favorita</h3>
                        <p className="home__occasion-description">
                            Haz más especial ese café de la tarde con algo delicioso.
                        </p>
                    </article>
                    <article className="home__occasion-card">
                        <span className="home__occasion-icon" aria-hidden="true">♡</span>
                        <h3 className="home__occasion-title">Para compartir</h3>
                        <p className="home__occasion-description">
                            Un detalle dulce siempre es una buena excusa para reunirse.
                        </p>
                    </article>
                    <article className="home__occasion-card">
                        <span className="home__occasion-icon" aria-hidden="true">✧</span>
                        <h3 className="home__occasion-title">Días especiales</h3>
                        <p className="home__occasion-description">
                            Acompaña tus celebraciones con sabores que se disfrutan juntos.
                        </p>
                    </article>
                </div>
            </section>

            <section className="home__about" aria-labelledby="home-about-title">
                <div className="home__about-mark" aria-hidden="true">✦</div>
                <div className="home__about-content">
                    <p className="home__eyebrow home__eyebrow--dark">Nuestra esencia</p>
                    <h2 className="home__section-title" id="home-about-title">
                        Repostería para disfrutar sin afán
                    </h2>
                    <p className="home__description">
                        En La Marteja creemos que los pequeños momentos también merecen algo especial.
                        Por eso queremos acompañarte con productos de repostería preparados con cariño,
                        ideales para compartir o darte un gusto.
                    </p>
                    <Link className="home__text-link" to="/productos">
                        Conoce nuestros productos <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </section>

            <section className="home__closing" aria-labelledby="home-closing-title">
                <p className="home__eyebrow">¿Listo para elegir?</p>
                <h2 className="home__closing-title" id="home-closing-title">
                    Tu próximo favorito te está esperando
                </h2>
                <Link className="home__button home__button--light" to="/productos">
                    Ver catálogo
                    <span aria-hidden="true">→</span>
                </Link>
            </section>
        </main>
    )
}

export default Home