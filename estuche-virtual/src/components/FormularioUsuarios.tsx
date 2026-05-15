import { useState } from "react";

interface FormularioUsuariosProps {
  onLoginExitoso: (correo: string, pass: string) => void;
  onRegistroExitoso: (nombre: string, correo: string, pass: string) => void;
  
  cambiarpagina: (pagina:string) => void;
}

const FormularioUsuarios = (props: FormularioUsuariosProps) => {
  const [modo, setModo] = useState<"login" | "registro">("login");

  const enviarLogin = (e: any) => {
    e.preventDefault();
    const correo = e.target.correo.value;
    const password = e.target.password.value;

    props.onLoginExitoso(correo, password);
  };

  const enviarRegistro = (e: any) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const correo = e.target.correo.value;
    const password = e.target.password.value;

    props.onRegistroExitoso(nombre, correo, password);
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "10px" }}>
      
      <h2>{modo === "login" ? "Login" : "Registro de Usuario"}</h2>

      <button onClick={() => setModo("login")}>Login</button>
      <button onClick={() => props.cambiarpagina("registroFormulario")}
      style={{marginLeft: "10px"}}
      >
        Registro
      </button>

      <br /><br />

      {modo === "login" && (
        <form onSubmit={enviarLogin}>
          <input name="correo" placeholder="Correo" type="email" required />
          <br /><br />
          <input name="password" placeholder="Contraseña" type="password" required />
          <br /><br />
          <button type="submit">Ingresar</button>
        </form>
      )}

      {modo === "registro" && (
        <form onSubmit={enviarRegistro}>
          <input name="nombre" placeholder="Nombre completo" required />
          <br /><br />
          <input name="correo" placeholder="Correo" type="email" required />
          <br /><br />
          <input name="password" placeholder="Contraseña" type="password" required />
          <br /><br />
          <button type="submit">Registrar</button>
        </form>
      )}
    </div>
  );
};

export default FormularioUsuarios;