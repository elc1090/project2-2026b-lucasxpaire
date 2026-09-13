import { useState } from 'react';
import './styles/style.css';
import BlocklyComponent from './components/Blockly';
import type { Estatistica } from './types/Estatistica';
import Ranking from './components/Ranking';
import { api } from './services/api';
import { mostrarAlerta } from './utils/alertas';

function App() {
  const [codigoJS, setCodigoJS] = useState("");
  const [nomeJogador, setNomeJogador] = useState("");
  const [tentativas, setTentativas] = useState(0);
  const [quantidadeBlocos, setQuantidadeBlocos] = useState(0);
  const [desafioAtual, setDesafioAtual] = useState("Printe seu nome");
  const [mostrarRanking, setMostrarRanking] = useState(false);
  const [dadosRanking, setDadosRanking] = useState<Estatistica[]>([]);

  const testarCodigo = () => {
    setTentativas(tentativas + 1);
    try {
      const alertNativo = window.alert;
      window.alert = (mensagem) => {
        mostrarAlerta('Saída do Código', String(mensagem), 'info', '#4caf50');
      };
      eval(codigoJS);
      window.alert = alertNativo;
    } catch (e) {
      mostrarAlerta('Algo deu errado.', 'Houve um erro na sua lógica: ' + e, 'error', '#ff4081');
    }
  };

  const enviarEstatistica = async () => {
    if (!nomeJogador) {
      mostrarAlerta('Faltou o nome!', 'Por favor, digite seu nome de jogador antes de enviar!', 'warning', '#ff9800');
      return;
    }
    const estatistica: Estatistica = {
      nomeJogador: nomeJogador,
      desafio: desafioAtual,
      tentativas: tentativas,
      blocosUsados: quantidadeBlocos,
      data: new Date().toISOString()
    };
    try {
      await api.salvar(estatistica);
      mostrarAlerta('Enviado!', `Você usou ${quantidadeBlocos} blocos e testou ${tentativas} vezes.`, 'success', '#4caf50');
    } catch (e) {
      mostrarAlerta('Erro de Conexão', 'Não foi possível conectar com o servidor.', 'error', '#ff4081');
    }
  };

  const abrirEstatisticas = async () => {
    try {
      const dados = await api.listar();
      setDadosRanking(dados);
      setMostrarRanking(true);
    } catch (e) {
      mostrarAlerta('Erro!', 'Não foi possível carregar as estatísticas do servidor.', 'error', '#ff4081');
    }
  };

  return (
    <div className="container-principal">
      <header className="cabecalho">
        <h1>Lógica de programação</h1>
        <div className="grupo-botoes">
          <select value={desafioAtual} onChange={(e) => setDesafioAtual(e.target.value)} className="campo-desafio">
            <option value="Printe seu nome">Desafio 1: Printe seu nome</option>
            <option value="Mostre a palavra 'Olá Mundo'">Desafio 2: Olá Mundo</option>
            <option value="Printe o número 4">Desafio 3: A soma de 2+2</option>
          </select>
          <input type="text" placeholder="Digite seu nome" value={nomeJogador} onChange={(e) => setNomeJogador(e.target.value)} className="campo-nome" />
          <button onClick={testarCodigo} className="botao botao-testar">Testar Código</button>
          <button onClick={enviarEstatistica} className="botao botao-enviar">Enviar Resposta</button>
          <button onClick={abrirEstatisticas} className="botao botao-estatisticas">Estatísticas</button>
        </div>
      </header>
      <main className="area-principal">
        <BlocklyComponent onChange={(codigo, totalBlocos) => {
          setCodigoJS(codigo); setQuantidadeBlocos(totalBlocos);
        }} />
      </main>
      {mostrarRanking && (<Ranking dados={dadosRanking} onFechar={() => setMostrarRanking(false)} />)}
    </div>
  )
}

export default App;
