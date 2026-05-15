import { useState } from 'react';
import './App.css';

import Usuarios from './components/Usuarios';
import Productos from './components/Productos';
import Login from './components/Login';
import Registro from './components/Registro';
import RegistroFormulario from './components/registroFormulario';
import FormularioUsuarios from './components/FormularioUsuarios';
import CarritoProductos from './components/CarritoProductos';

function App() {

  const [pagina, setPagina] = useState<string>('usuarios');

  const manejarIngreso = (correo: string, pass: string) => {
    alert(`Información de Login:\nCorreo: ${correo}\nContraseña: ${pass}`);

      setPagina('productos');

  };

  const manejarRegistro = (
    nombre: string,
    correo: string,
    pass: string
  ) => {
    alert(`Información de Registro:\nNombre: ${nombre}\nCorreo: ${correo}\nContraseña: ${pass}`);
  };

  return (
    <div className="container">

      <h3 className="titulo-esquina">
        Estuche Virtual
      </h3>

      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>

        <nav style={{ marginBottom: '20px' }}>

          <button onClick={() => setPagina('usuarios')}>
            Ver Usuarios
          </button>

          <button
            onClick={() => setPagina('productos')}
            style={{ marginLeft: '10px' }}
          >
            Ver Productos
          </button>

          <button
            onClick={() => setPagina('login')}
            style={{ marginLeft: '10px' }}
          >
            Login
          </button>

          <button
            onClick={() => setPagina('registro')}
            style={{ marginLeft: '10px' }}
          >
            Registro
          </button>

          <button
            onClick={() => setPagina('registroFormulario')}
            style={{ marginLeft: '10px' }}
>
            Registro Formulario
          </button>

          <button
            onClick={() => setPagina('formularioUsuarios')}
            style={{ marginLeft: '10px' }}
          >
            Formulario Usuarios

          </button>

          <button
            onClick={() => setPagina('carrito')}
            style={{ marginLeft: '10px' }}
          >
           carrito
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

        {pagina === 'registroFormulario' && (
          <RegistroFormulario />
        )}

        {pagina === 'formularioUsuarios' && (
          <FormularioUsuarios
          onLoginExitoso={manejarIngreso}
          onRegistroExitoso={manejarRegistro}
          cambiarpagina={setPagina}
        />

        )}

        {pagina === 'carrito' && (
          <CarritoProductos/>
        )}

      

      </main>

    </div>
  );
}

export default App;