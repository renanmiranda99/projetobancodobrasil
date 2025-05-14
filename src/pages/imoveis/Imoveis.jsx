import './Imoveis.css';

const imoveis = [
  {
    imagem: 'https://placehold.co/300x150?text=Im%C3%B3vel+1',
    estado: 'SP',
    cidade: 'São Paulo',
    bairro: 'Moema',
    tamanho: 85,
    valor: 750000,
  },
  {
    imagem: 'https://placehold.co/300x150?text=Im%C3%B3vel+2',
    estado: 'RJ',
    cidade: 'Rio de Janeiro',
    bairro: 'Copacabana',
    tamanho: 100,
    valor: 950000,
  },
  {
    imagem: 'https://placehold.co/300x150?text=Im%C3%B3vel+3',
    estado: 'MG',
    cidade: 'Belo Horizonte',
    bairro: 'Savassi',
    tamanho: 90,
    valor: 600000,
  },
  {
    imagem: 'https://placehold.co/300x150?text=Im%C3%B3vel+4',
    estado: 'PR',
    cidade: 'Curitiba',
    bairro: 'Batel',
    tamanho: 110,
    valor: 800000,
  },
  {
    imagem: 'https://placehold.co/300x150?text=Im%C3%B3vel+5',
    estado: 'RS',
    cidade: 'Porto Alegre',
    bairro: 'Moinhos de Vento',
    tamanho: 95,
    valor: 700000,
  },
  {
    imagem: 'https://placehold.co/300x150?text=Im%C3%B3vel+6',
    estado: 'BA',
    cidade: 'Salvador',
    bairro: 'Barra',
    tamanho: 88,
    valor: 680000,
  },
];

const Imoveis = () => {
  return (
    <div className="container">
      {imoveis.map((imovel, index) => (
        <div className="card" key={index}>
          <img src={imovel.imagem} alt={`Imagem do imóvel em ${imovel.bairro}`} />
          <div className="info">
            <p><strong>Estado:</strong> {imovel.estado}</p>
            <p><strong>Cidade:</strong> {imovel.cidade}</p>
            <p><strong>Bairro:</strong> {imovel.bairro}</p>
            <p><strong>Tamanho:</strong> {imovel.tamanho} m²</p>
            <p><strong>Valor:</strong> R$ {imovel.valor.toLocaleString('pt-BR')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Imoveis;
