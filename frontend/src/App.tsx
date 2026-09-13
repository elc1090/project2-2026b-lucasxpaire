import { useState } from 'react';
import './styles/style.css';
import BlocklyComponent from './components/Blockly';

function App() {
  const [codigoJS, setCodigoJS] = useState("");
  const [blocosJSON, setBlocosJSON] = useState({});
  const [nomeJogador, setNomeJogador] = useState("");

  const testarCodigo = () => {
    try {
      eval(codigoJS);
    } catch (e) {
      alert("Houve um erro na sua lógica: " + e);
    }
  };

  const enviarEstatistica = () => {
    if (!nomeJogador) {
      alert("Por favor, digite seu apelido antes de enviar!");
      return;
    }

    const estatistica = {
      jogador: nomeJogador,
      blocosUsados: blocosJSON,
      data: new Date().toISOString()
    };
  };

  return (
    <div className="container-principal">
      <header className="cabecalho">
        <h1>Desafio: Lógica de Programação</h1>
        <div className="grupo-botoes">
          <input type="text" placeholder="Digite seu apelido" value={nomeJogador} onChange={(e) => setNomeJogador(e.target.value)} className="campo-apelido" />
          <button onClick={testarCodigo} className="botao botao-testar">Testar Código</button>
          <button onClick={enviarEstatistica} className="botao botao-enviar">Enviar Resposta</button>
        </div>
      </header>
      <main className="area-principal">
        <BlocklyComponent onChange={(codigo, json) => { setCodigoJS(codigo); setBlocosJSON(json) }} />
      </main>
    </div>
  )
}

export default App;
