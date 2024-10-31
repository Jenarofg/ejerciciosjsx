import './App.css';
import Coches from './components/Coches';
import Bienvenida from './components/Bienvenida';
import Despedida from './components/Despedida';

function App() {

  const estado=true;
  const nombre="Jenaro Fernández";

  return (
    <div className="App">
      <div className='ejercicio1'>
        {estado ? <Bienvenida nombre={nombre} /> : <Despedida nombre={nombre} />}
      </div>
      <div className='ejercicio2'>
        <Coches />
      </div>
    </div>
  );
}

export default App;
