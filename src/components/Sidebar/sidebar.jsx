import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa o FontAwesomeIcon para usar os ícones
import { faHome, faSearch, faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Importa os ícones específicos que vamos utilizar
import './sidebar.css';

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src="./src/assets/icons/logo-spotify.png" alt="Logo" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faSearch} className="sidebar-icon" />
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
                        <span>Sua Biblioteca</span>
                    </button>
                    <FontAwesomeIcon icon={faPlus} className="fa-plus" />
                </div>
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>

                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Descubra novos podcasts</span>
                        <span className="text subtitle">Ouça conteúdos inspiradores e informativos.</span>
                        <button className="section-playlist__button">
                            <span>Explorar</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                    <a href="">Cookies</a>
                </div>
                <div className="languages">
                    <button className="languages__button">
                        <FontAwesomeIcon icon={faGlobe} className="sidebar-icon" />
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </aside>
    )
}
