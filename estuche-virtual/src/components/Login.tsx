interface LoginProps {
  onLoginExitoso: (correo: string, pass: string) => void;
}

function Login(props: LoginProps) {
  const enviarDatos = (evento: any) => {
    evento.preventDefault();
    
    const correo = evento.target.correo.value;
    const password = evento.target.password.value;

    props.onLoginExitoso(correo, password);
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={enviarDatos}>
        <input name="correo" placeholder="Correo" type="email" required />
        <br /><br />
        <input name="password" placeholder="Contraseña" type="password" required />
        <br /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;