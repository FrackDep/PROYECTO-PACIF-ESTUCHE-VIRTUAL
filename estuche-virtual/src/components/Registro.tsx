interface RegistroProps {
  onRegistroExitoso: (nombre: string, correo: string, pass: string) => void;
}

function Registro(props: RegistroProps) {
  const enviarDatos = (evento: any) => {
    evento.preventDefault();
    
    const nombre = evento.target.nombre.value;
    const correo = evento.target.correo.value;
    const password = evento.target.password.value;

    props.onRegistroExitoso(nombre, correo, password);
  };

  return (
    <div className="card">
      <h2>Registro de Usuario</h2>
      <form onSubmit={enviarDatos}>
        <input name="nombre" placeholder="Nombre completo" />
        <br /><br />
        <input name="correo" placeholder="Correo" type="email" />
        <br /><br />
        <input name="password" placeholder="Contraseña" type="password" />
        <br /><br />
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
}

export default Registro;





/// usamos <br /><br /> como un salto de linea para colocar en manera de columna