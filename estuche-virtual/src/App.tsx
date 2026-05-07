import { useState } from 'react';
import './App.css';
import Usuarios from './components/Usuarios';
import Productos from './components/Productos';

function App() {

  const [pagina, setPagina] = useState<string>('usuarios');

  return (

    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>

      <nav style={{ marginBottom: '20px' }}>

        <button onClick={() => setPagina('usuarios')}>
          Ver Usuarios
        </button>

        <button onClick={() => setPagina('productos')} style={{ marginLeft: '10px' }}>
          Ver Productos
        </button>

      </nav>

      <hr />

      <main>

        {pagina === 'usuarios' && <Usuarios />}
        {pagina === 'productos' && <Productos />}

      </main>

    </div>

  );
}

export default App;
