import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cadastro from './pages/cadastro/Cadastro';
import Imoveis from './pages/imoveis/Imoveis';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/Imoveis" element={<Imoveis />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
