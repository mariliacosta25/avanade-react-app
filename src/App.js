import Header from './components/Header';
import './App.css';

function App() {

  const dados = {
    nome: "Marilia Costa",
    empresa: "Fiap",
    site:"www.fiap.com.br",
    className: "App-link",
  };
  return (
    //JSX - JAVASCRIPT EXTENSIBLE
    <div className="App">
      <Header title="Bem Vindo! Bom almoço!" options={dados} />
     
    </div>
  );
}

export default App;
