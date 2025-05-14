import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-buttons">
        <button>Início</button>
        <button><Link to="/Imoveis">Imóveis</Link></button>
        <button>Sobre</button>
        <button>Serviços</button>
        <button><Link to="/Cadastro">Cadastro</Link></button>
      </nav>
    </header>
  );
};

export default Header;