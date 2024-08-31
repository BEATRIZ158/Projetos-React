import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Beatriz'

  const newname = name.toUpperCase()
  
  // Criando função sum
  function sum(a, b){
    return a + b
  }

  // Alteração de atributos 
  const url = 'https://via.placeholder.com/150'

  // Elementos JSX precisam estar em algum elemento

  return (
    <div className="App">
      <h2>Alterando o JSK</h2>
      <p>Olá, {name}</p>
      <p>Olá, {newname}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha imagem"></img>
    </div>
  );
}

export default App;
