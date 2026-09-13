import { useState } from 'react';
import './styles/style.css';
import BlocklyComponent from './components/Blockly';

function App() {
  const [codigoJS, setCodigoJS] = useState("");
  const [blocosJSON, setBlocosJSON] = useState({});
  const [nomeJogador, setNomeJogador] = useState("");

  const [tentativas, setTentativas] = useState(0);
  const [quantidadeBlocos, setQuantidadeBlocos] = useState(0);
  const desafioAtual = "Printe seu nome";

  const testarCodigo = () => {
    setTentativas(tentativas + 1);
    try {
      eval(codigoJS);
    } catch (e) {
      alert("Houve um erro na sua lógica: " + e);
    }
  };

  const enviarEstatistica = () => {
    if (!nomeJogador) {
      alert("Por favor, digite seu nome de jogador antes de enviar!");
      return;
    }

    const estatistica = {
      jogador: nomeJogador,
      desafio: desafioAtual,
      tentativas: tentativas,
      blocosUsados: quantidadeBlocos,
      data: new Date().toISOString()
    };
  };

  return (
    <div className="container-principal">
      <header className="cabecalho">
        <h1>Lógica de programação</h1>
        <div className="grupo-botoes">
          <input type="text" placeholder="Digite seu nome de jogador" value={nomeJogador} onChange={(e) => setNomeJogador(e.target.value)} className="campo-nome" />
          <button onClick={testarCodigo} className="botao botao-testar">Testar Código</button>
          <button onClick={enviarEstatistica} className="botao botao-enviar">Enviar Resposta</button>
          <button onClick={abrirEstatisticas} className="botao botao-estatisticas">Estatísticas</button>
        </div>
      </header>
      <main className="area-principal">
        <BlocklyComponent onChange={(codigo, json) => { setCodigoJS(codigo); setBlocosJSON(json) }} />
      </main>
    </div>
  )
}

export default App;
