import React, { useState } from 'react';
import './Cadastro.css';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    nascimento: '',
    rua: '',
    endereco: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

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
          E-mail:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
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
          Nome da Rua:
          <input type="text" name="rua" value={formData.rua} onChange={handleChange} required />
        </label>

        <label>
          Número da Rua:
          <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
        </label>

        <label>
          Complemento:
          <input type="text" name="complemento" value={formData.complemento} onChange={handleChange} />
        </label>

        <label>
          Bairro:
          <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} required />
        </label>

        <label>
          Cidade:
          <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} required />
        </label>

        <label>
          Estado:
          <input type="text" name="estado" value={formData.estado} onChange={handleChange} required />
        </label>

        <label>
          CEP:
          <input type="text" name="cep" value={formData.cep} onChange={handleChange} required />
        </label>

        <label>
          Senha:
          <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
        </label>

        <label>
          Confirmar Senha:
          <input type="password" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} required />
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
