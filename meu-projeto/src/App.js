// Componente Central!
import './App.css';
import SayMyName  from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const name = 'Beatriz'

  // Convertendo os caracteres em MAIUSCULO
  const newname = name.toUpperCase()
  
  // Elementos JSX precisam estar em algum elemento
  // Inserindo a propriedade que é necessária para o componente via atributo (nome)
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Beatriz"/>
      <SayMyName nome="João"/>
      <SayMyName nome={name}/>
      <Pessoa
        nome="Beatriz"
        foto="https://via.placeholder.com/150"
        idade="22"
        profissao="Estudante"
      />
    </div>
  );
}

export default App;
