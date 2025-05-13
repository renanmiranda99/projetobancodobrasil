import React, { useState } from 'react';
import './Cadastro.css';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    nascimento: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Dados cadastrados:', formData);
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit} className="cadastro-form">
        <label>
          Nome Completo:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </label>

        <label>
          CPF:
          <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required maxLength="14" />
        </label>

        <label>
          Telefone:
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required />
        </label>

        <label>
          Data de Nascimento:
          <input type="date" name="nascimento" value={formData.nascimento} onChange={handleChange} required />
        </label>

        <label>
          Endereço:
          <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
