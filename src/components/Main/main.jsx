import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeIcon para usar ícones FontAwesome no React
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons'; // Ícone de cara triste
import PropTypes from 'prop-types'; // PropTypes para validação de propriedades (props)
import './main.css';
import { useState, useEffect } from 'react';


export const Main = ({ searchTerm }) => {
    const [artists, setArtists] = useState([]); // Estado para armazenar os artistas encontrados
    const [showPlaylists, setShowPlaylists] = useState(true); // Estado para controlar a exibição das playlists 

    // useEffect é executado toda vez que 'searchTerm' muda
    useEffect(() => {
        if (searchTerm.trim() === "") { // Se o termo de busca estiver vazio
            setShowPlaylists(true); // Exibe playlists
            setArtists([]); // Limpa os artistas encontrados
            return;
        }

        // Função assíncrona para buscar artistas
        const fetchArtists = async () => {
            try {
                const response = await fetch(`http://localhost:8000/artists?name_like=${searchTerm}`);
                const data = await response.json(); // Converte a resposta para JSON
                setArtists(data); // Atualiza o estado com os artistas encontrados
                setShowPlaylists(false); // Esconde as playlists
            } catch (error) {
                console.error("Erro ao buscar artistas:", error); // Exibe erro se a requisição falhar
            }
        };

        fetchArtists(); // Chama a função de busca quando o 'searchTerm' muda
    }, [searchTerm]); // A dependência é 'searchTerm', ou seja, o efeito será executado quando ele mudar

    return (
        <main className="main-container">
            <div className="playlist-container">
                {/* Exibe playlists caso não haja artistas encontrados */}
                <div id="result-playlists" className={showPlaylists ? '' : 'hidden'}>
                    <div className="playlist">
                        <h1 id="greeting">Boas vindas</h1>
                        <h2 className="session">Navegue por todas as seções</h2>
                    </div>
                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            {/* Lista de playlists */}
                            <section className="offer__list-item">
                                <a href="" className="cards">
                                    <div className="cards card1">
                                        <img src="./src/assets/playlist/1.jpeg" alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card2">
                                        <img src="./src/assets/playlist/2.png" alt="" />
                                        <span>Feitos para você</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card3">
                                        <img src="./src/assets/playlist/3.jpeg" alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card4">
                                        <img src="./src/assets/playlist/4.jpeg" alt="" />
                                        <span>Creators</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card5">
                                        <img src="./src/assets/playlist/5.jpeg" alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card6">
                                        <img src="./src/assets/playlist/6.jpeg" alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card7">
                                        <img src="./src/assets/playlist/7.jpeg" alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card8">
                                        <img src="./src/assets/playlist/8.jpeg" alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card9">
                                        <img src="./src/assets/playlist/9.jpeg" alt="" />
                                        <span>Funk</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card10">
                                        <img src="./src/assets/playlist/10.jpeg" alt="" />
                                        <span>MPB</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card11">
                                        <img src="./src/assets/playlist/11.jpeg" alt="" />
                                        <span>Rock</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card12">
                                        <img src="./src/assets/playlist/12.jpeg" alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card13">
                                        <img src="./src/assets/playlist/13.jpeg" alt="" />
                                        <span>Indie</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card14">
                                        <img src="./src/assets/playlist/14.jpeg" alt="" />
                                        <span>Relax</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card15">
                                        <img src="./src/assets/playlist/15.jpeg" alt="" />
                                        <span>Música latina</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Exibe os artistas encontrados */}
                <div id="result-artist" className={showPlaylists ? 'hidden' : ''}>
                    <div className="grid-container">
                        {artists.length > 0 ? (
                            // Se houver artistas, exibe-os em cards
                            artists.map(artist => (
                                <div key={artist.id} className="artist-card">
                                    <div className="card-img">
                                        <img className="artist-img" src={artist.urlImg} alt={artist.name} />
                                        <div className="play">
                                            <span className="fa fa-solid fa-play"></span>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <span className="artist-name">{artist.name}</span>
                                        <span className="artist-categorie">Artista</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Caso não haja artistas, exibe uma mensagem de "Nenhum artista encontrado"
                            <div className="no-results">
                                <FontAwesomeIcon icon={faFaceSadTear} className="sad-icon" />
                                <span className="result-none">Artista não encontrado</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

// Validação das props para garantir que 'searchTerm' seja uma string obrigatória
Main.propTypes = {
    searchTerm: PropTypes.string.isRequired,
}
