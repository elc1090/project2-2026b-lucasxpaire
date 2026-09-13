import { useState } from 'react';
import Swal from 'sweetalert2';
import './styles/style.css';
import BlocklyComponent from './components/Blockly';

function App() {
  const [codigoJS, setCodigoJS] = useState("");
  const [nomeJogador, setNomeJogador] = useState("");

  const [tentativas, setTentativas] = useState(0);
  const [quantidadeBlocos, setQuantidadeBlocos] = useState(0);
  const desafioAtual = "Printe seu nome";

  const testarCodigo = () => {
    setTentativas(tentativas + 1);
    try {
      const alertNativo = window.alert;
      window.alert = (mensagem) => {
        Swal.fire({
          title: 'Saída do Código', text: String(mensagem), icon: 'info', confirmButtonColor: '#4caf50'
        });
      };
      eval(codigoJS);
      window.alert = alertNativo;
    } catch (e) {
      Swal.fire({
        title: 'Algo deu errado.', text: 'Houve um erro na sua lógica: ' + e, icon: 'error', confirmButtonColor: '#ff4081'
      });
    }
  };

  const enviarEstatistica = () => {
    if (!nomeJogador) {
      Swal.fire({
        title: 'Faltou o nome!', text: 'Por favor, digite seu nome de jogador antes de enviar!', icon: 'warning', confirmButtonColor: '#ff9800'
      });
      return;
    }

    const estatistica = {
      jogador: nomeJogador,
      desafio: desafioAtual,
      tentativas: tentativas,
      blocosUsados: quantidadeBlocos,
      data: new Date().toISOString()
    };

    Swal.fire({
      title: 'Enviado!', text: `Você usou ${quantidadeBlocos} blocos e testou ${tentativas} vezes.`, icon: 'success', confirmButtonColor: '#4caf50'
    });
  };

  const abrirEstatisticas = () => {
    Swal.fire({
      title: 'Ranking de Estatísticas',
      html: `
        <table>
         
        </table>
      `,
      width: '600px',
      confirmButtonColor: '#3f51b5'
    });
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
        <BlocklyComponent onChange={(codigo, totalBlocos) => {
          setCodigoJS(codigo); setQuantidadeBlocos(totalBlocos);
        }} />
      </main>
    </div>
  )
}

export default App;
