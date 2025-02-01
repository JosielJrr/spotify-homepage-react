import PropTypes from 'prop-types'; // Importa PropTypes para validação das props.
import './header.css';
import smallLeftIcon from '../../assets/icons/small-left.png';
import smallRightIcon from '../../assets/icons/small-right.png';
import searchIcon from '../../assets/icons/search.png';
import { useState } from "react"; 


export const Header = ({ setSearchTerm }) => {
    const [search, setSearch] = useState(""); // Cria um estado para armazenar o valor digitado no input de busca.

    // Função chamada ao alterar o valor no campo de busca.
    const handleSearchChange = (e) => {
        const value = e.target.value; // Obtém o valor digitado.
        setSearch(value); // Atualiza o estado local do campo de busca.
        setSearchTerm(value.toLowerCase()); // Atualiza o termo de busca no componente pai (Main).
    }

    return (
        <header className="header-container">
            <nav className="header__navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <img src={smallLeftIcon} alt="Seta Esquerda" />
                    </button>
                    <button className="arrow-right">
                        <img src={smallRightIcon} alt="Seta Direita" />
                    </button>
                </div>

                <div className="header__search">
                    <img src={searchIcon} alt="" />
                    <input
                        id="search-input"
                        maxLength={50} // Limita o número máximo de caracteres digitados para 50.
                        autoCorrect='off' // Desativa a correção automática.
                        autoCapitalize='off' // Impede a capitalização automática.
                        autoComplete="off" // Impede preenchimento automático de sugestões.
                        spellCheck='false' // Desativa a verificação ortográfica.
                        placeholder="O que você quer ouvir?"
                        value={search} // Valor controlado pelo estado `search`.
                        onChange={handleSearchChange} // Atualiza o estado e o termo de busca ao digitar.
                    />
                </div>

                <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </nav>
        </header>
    );
}

// Validação das props
Header.propTypes = {
    setSearchTerm: PropTypes.func.isRequired, // Garante que `setSearchTerm` seja uma função obrigatória.
}
