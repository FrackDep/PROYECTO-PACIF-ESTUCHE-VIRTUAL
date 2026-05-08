import { useState } from 'react';
import './App.css';
import Usuarios from './components/Usuarios';
import Productos from './components/Productos';
import Login from './components/Login';
import Registro from './components/Registro';

function App() {
  const [pagina, setPagina] = useState<string>('usuarios');

  const manejarIngreso = (correo: string, pass: string) => {
    alert(`Información de Login:\nCorreo: ${correo}\nContraseña: ${pass}`);
  };

  const manejarRegistro = (nombre: string, correo: string, pass: string) => {
    alert(`Información de Registro:\nNombre: ${nombre}\nCorreo: ${correo}\nContraseña: ${pass}`);
  };

  return (
    <div className="container">
      <h3 className="titulo-esquina">Estuche Virtual</h3>
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setPagina('usuarios')}>Ver Usuarios</button>
        
        <button onClick={() => setPagina('productos')} style={{ marginLeft: '10px' }}>
          Ver Productos
        </button>

        <button onClick={() => setPagina('login')} style={{ marginLeft: '10px' }}>
          Login
        </button>

        <button onClick={() => setPagina('registro')} style={{ marginLeft: '10px' }}>
          Registro
        </button>
      </nav>
    </div>
      <hr />

      <main>
        {pagina === 'usuarios' && <Usuarios />}
        
        {pagina === 'productos' && <Productos />}

        {pagina === 'login' && (
          <Login onLoginExitoso={manejarIngreso} />
        )}

        {pagina === 'registro' && (
          <Registro onRegistroExitoso={manejarRegistro} />
        )}
      </main>
    </div>
  );
}

export default App;