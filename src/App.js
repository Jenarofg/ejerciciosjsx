import './App.css';
import Coches from './components/Coches';
import Saludo from './components/Saludo';
import Despedida from './components/Despedida';

function App() {

  const estado=true;
  const nombre="Jenaro Fernández García";

  return (
    <div className="App">
      <h3>Ejercicio 1</h3>
      <div className='Ej1'>
        {estado ? <Saludo nombre={nombre} /> : <Despedida nombre={nombre} />}
      </div>
      <div className='styledTextComponent'>
        <h3>Ejercicio 2</h3>
        <Coches />
      </div>
    </div>
  );
}

export default App;
