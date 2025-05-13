import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Cadastro from './pages/cadastro/Cadastro';

function App() {
  return (
    <div className="app-container">
      <Header/>
      <main className="main-content">
        <h1>Bem-vindo</h1>
        <Cadastro/>
      </main>
      <Footer />
    </div>
  );
}

export default App;