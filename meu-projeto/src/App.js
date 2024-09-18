// Componente Central!
import './App.css';
import SayMyName  from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Beatriz'

  // Convertendo os caracteres em MAIUSCULO
  const newname = name.toUpperCase()
  
  // Criando função sum
  function sum(a, b){
    return a + b
  }

  // Alteração de atributos 
  const url = 'https://via.placeholder.com/150'

  // Elementos JSX precisam estar em algum elemento
  // Inserindo a propriedade que é necessária para o componente via atributo (nome)
  return (
    <div className="App">
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
