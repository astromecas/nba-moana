import { useState } from 'react';

export default function Card({ jogador, nome, foto, onClick, selecionado }) {
  const atleta = jogador || {};
  const nomeFinal = nome || atleta.nome || 'Jogador';
  const fotoFinal = foto || atleta.foto || '';
  const timeFinal = atleta.time || 'NBA';
  const posicaoFinal = atleta.posicao || 'Atleta';
  const numeroFinal = atleta.numero || '#';
  const pontosFinal = atleta.pontos || '25.0';

  const [curtidas, setCurtidas] = useState(atleta.curtidas || 10);
  const [curtiu, setCurtiu] = useState(false);

  function handleCurtir(e) {
    e.stopPropagation();
    if (curtiu) {
      setCurtiu(false);
      setCurtidas(curtidas - 1);
    } else {
      setCurtiu(true);
      setCurtidas(curtidas + 1);
    }
  }

  return (
    <div
      className={`card-jogador ${selecionado ? 'selecionado' : ''}`}
      onClick={onClick}
    >
      <div className="card-foto-wrapper">
        <img src={fotoFinal} alt={nomeFinal} className="card-foto" />
        <span className="card-numero">{numeroFinal}</span>
      </div>

      <div className="card-detalhes">
        <span className="card-time">{timeFinal}</span>
        <h3 className="card-nome">{nomeFinal}</h3>
        <p className="card-posicao">{posicaoFinal}</p>
        <span className="card-media">Média: {pontosFinal} pts/jogo</span>

        <div className="card-rodape">
          <button
            type="button"
            className={`btn-curtida ${curtiu ? 'ativo' : ''}`}
            onClick={handleCurtir}
          >
            {curtiu ? '❤️' : '🤍'} {curtidas}
          </button>
          <span className="btn-ver-mais">Ver detalhes</span>
        </div>
      </div>
    </div>
  );
}
