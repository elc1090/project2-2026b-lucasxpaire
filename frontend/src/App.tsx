import { useState } from 'react';
import './App.css';
import BlocklyComponent from './components/Blockly';

function App() {
  const [codigoJS, setCodigoJS] = useState("");
  const [blocosJSON, setBlocosJSON] = useState({});

  return (
    <div className="app-container">
      <header>
        <h1>Desafio: Lógica de Programação</h1>
      </header>
      <main>
        <BlocklyComponent onChange={(codigo, json) => { setCodigoJS(codigo); setBlocosJSON(json) }} />
      </main>
    </div>
  )
}

export default App
