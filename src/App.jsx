import { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';

// Lista inicial com as informações dos jogadores
const dadosIniciais = [
  {
    id: 1,
    nome: 'LeBron James',
    time: 'Los Angeles Lakers',
    posicao: 'Ala',
    numero: '#23',
    pontos: '25.4',
    curtidas: 24,
    foto: '/images/lebron.jpg',
    descricao: 'Um dos maiores nomes da história da NBA. Atua pelo Los Angeles Lakers e já conquistou 4 títulos da liga.'
  },
  {
    id: 2,
    nome: 'Stephen Curry',
    time: 'Golden State Warriors',
    posicao: 'Armador',
    numero: '#30',
    pontos: '26.8',
    curtidas: 31,
    foto: '/images/curry.jpg',
    descricao: 'Maior arremessador de 3 pontos de todos os tempos, líder e ídolo do Golden State Warriors.'
  },
  {
    id: 3,
    nome: 'Giannis Antetokounmpo',
    time: 'Milwaukee Bucks',
    posicao: 'Ala-Pivô',
    numero: '#34',
    pontos: '30.4',
    curtidas: 19,
    foto: '/images/giannis.jpg',
    descricao: 'Atleta grego muito forte fisicamente e ágil no garrafão. Campeão com o Bucks em 2021.'
  },
  {
    id: 4,
    nome: 'Luka Dončić',
    time: 'Dallas Mavericks',
    posicao: 'Armador',
    numero: '#77',
    pontos: '33.9',
    curtidas: 22,
    foto: '/images/luka.jpg',
    descricao: 'Destaque esloveno com grande visão de jogo e facilidade para pontuar e dar assistências.'
  },
  {
    id: 5,
    nome: 'Nikola Jokić',
    time: 'Denver Nuggets',
    posicao: 'Pivô',
    numero: '#15',
    pontos: '26.4',
    curtidas: 18,
    foto: '/images/jokic.jpg',
    descricao: 'Pivô sérvio com estilo clássico e passes geniais. Liderou os Nuggets no título de 2023.'
  },
  {
    id: 6,
    nome: 'Jayson Tatum',
    time: 'Boston Celtics',
    posicao: 'Ala',
    numero: '#0',
    pontos: '26.9',
    curtidas: 16,
    foto: '/images/tatum.jpg',
    descricao: 'Cestinha e referência do Boston Celtics, campeão da temporada 2023-24 da NBA.'
  }
];

export default function App() {
  const [jogadores, setJogadores] = useState([]);
  const [busca, setBusca] = useState('');
  const [filtroPosicao, setFiltroPosicao] = useState('Todas');
  const [jogadorSelecionado, setJogadorSelecionado] = useState(null);

  // Carrega os dados na inicialização do componente
  useEffect(() => {
    const timer = setTimeout(() => {
      setJogadores(dadosIniciais);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const posicoes = ['Todas', 'Armador', 'Ala', 'Ala-Pivô', 'Pivô'];

  // Filtra por texto (nome ou time) e por posição
  const jogadoresFiltrados = jogadores.filter((atleta) => {
    const termo = busca.toLowerCase();
    const bateNome = atleta.nome.toLowerCase().includes(termo);
    const bateTime = atleta.time.toLowerCase().includes(termo);
    const batePosicao = filtroPosicao === 'Todas' || atleta.posicao === filtroPosicao;

    return (bateNome || bateTime) && batePosicao;
  });

  return (
    <div className="app">
      <Header />

      <main className="container">
        {/* Caixa de detalhes quando um jogador é clicado */}
        {jogadorSelecionado && (
          <section className="painel-destaque">
            <div className="destaque-box">
              <img
                src={jogadorSelecionado.foto}
                alt={jogadorSelecionado.nome}
                className="destaque-foto"
              />
              <div className="destaque-info">
                <div className="destaque-topo">
                  <span className="destaque-tag">{jogadorSelecionado.time}</span>
                  <span className="destaque-numero">{jogadorSelecionado.numero}</span>
                </div>
                <h2>{jogadorSelecionado.nome}</h2>
                <p className="destaque-posicao">Posição: {jogadorSelecionado.posicao}</p>
                <p className="destaque-descricao">{jogadorSelecionado.descricao}</p>
                <p className="destaque-pontos">
                  Média na temporada: <strong>{jogadorSelecionado.pontos} pontos</strong>
                </p>
                <button
                  type="button"
                  className="btn-fechar"
                  onClick={() => setJogadorSelecionado(null)}
                >
                  Fechar detalhes ✕
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Barra de pesquisa e filtros */}
        <section className="area-filtros">
          <div className="campo-busca">
            <input
              type="text"
              placeholder="Pesquisar jogador ou time..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            {busca && (
              <button
                type="button"
                className="btn-limpar-busca"
                onClick={() => setBusca('')}
              >
                ✕
              </button>
            )}
          </div>

          <div className="botoes-posicao">
            {posicoes.map((pos) => (
              <button
                key={pos}
                type="button"
                className={`btn-posicao ${filtroPosicao === pos ? 'ativo' : ''}`}
                onClick={() => setFiltroPosicao(pos)}
              >
                {pos}
              </button>
            ))}
          </div>
        </section>

        {/* Lista de cards */}
        <section className="area-galeria">
          <div className="galeria-cabecalho">
            <h3>Jogadores ({jogadoresFiltrados.length})</h3>
            <small>Clique em um card para ver as informações completas</small>
          </div>

          {jogadoresFiltrados.length === 0 ? (
            <div className="aviso-vazio">
              <p>Nenhum jogador encontrado com os filtros atuais.</p>
              <button
                type="button"
                className="btn-resetar"
                onClick={() => {
                  setBusca('');
                  setFiltroPosicao('Todas');
                }}
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="grade-cards">
              {jogadoresFiltrados.map((jogador) => (
                <Card
                  key={jogador.id}
                  jogador={jogador}
                  nome={jogador.nome}
                  foto={jogador.foto}
                  selecionado={jogadorSelecionado?.id === jogador.id}
                  onClick={() => setJogadorSelecionado(jogador)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
