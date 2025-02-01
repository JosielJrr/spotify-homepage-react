import './App.css';
import { Footer } from './components/Footer/footer';
import { Header } from './components/Header/header';
import { Main } from './components/Main/main';
import { Sidebar } from './components/Sidebar/sidebar';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // Cria um estado para armazenar o termo de busca.
  return (
    <>
      {/* Renderiza o Header e passa a função setSearchTerm para atualizar o estado do termo de busca */}
      <Header setSearchTerm={setSearchTerm} />
      <Sidebar />
      {/* Renderiza o Main e passa o searchTerm como prop para filtrar os artistas */}
      <Main searchTerm={searchTerm} />
      <Footer />
    </>
  )
}

export default App;
