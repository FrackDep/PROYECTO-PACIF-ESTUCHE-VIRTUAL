import { useState } from "react";

function RegistroFormulario() {

  // Estados
  const [nombre, setNombre] = useState<string>("");
  const [correo, setCorreo] = useState<string>("");
  const [edad, setEdad] = useState<string>("");
  const [genero, setGenero] = useState<string>("");

  return (
    <div style={{ padding: '20px', border: '1px solid #333', borderRadius: '10px' }}>

      <h2>Formulario de Registro</h2>

      {/* Input nombre */}
      <div>
        <label>Nombre:</label><br />

        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <br />

      {/* Input correo */}
      <div>
        <label>Correo:</label><br />

        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>

      <br />

      {/* Input edad */}
      <div>
        <label>Edad:</label><br />

        <input
          type="number"
          placeholder="Ingresa tu edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      <br />

      {/* Select género */}
      <div>
        <label>Género:</label><br />

        <select
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        >
          <option value="">Selecciona género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <hr />

      {/* Información dinámica */}
      <div style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>

        <h3>Datos Registrados</h3>

        <p><strong>Nombre:</strong> {nombre}</p>

        <p><strong>Correo:</strong> {correo}</p>

        <p><strong>Edad:</strong> {edad}</p>

        <p><strong>Género:</strong> {genero}</p>

      </div>

    </div>
  );
}

export default RegistroFormulario;