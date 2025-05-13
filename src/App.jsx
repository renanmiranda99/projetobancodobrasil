import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="app-container">
      <Header/>
      <main className="main-content">
        <h1>Bem-vindo</h1>
        <p>Conteúdo da aplicação</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;