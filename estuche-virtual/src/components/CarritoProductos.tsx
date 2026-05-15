import { useState } from "react";

function CarritoProductos() {

  const [cantidadLaptop, setCantidadLaptop] = useState<number>(0);

  const [cantidadMouse, setCantidadMouse] = useState<number>(0);

  return (
    <div style={{ padding: "20px" }}>

      <h2>Carrito de Productos</h2>

      <hr />

      <h3>Laptop</h3>

      <button onClick={() => setCantidadLaptop(cantidadLaptop - 1)}>
        -
      </button>

      <span style={{ margin: "10px" }}>
        {cantidadLaptop}
      </span>

      <button onClick={() => setCantidadLaptop(cantidadLaptop + 1)}>
        +
      </button>

      <hr />

      <h3>Mouse</h3>

      <button onClick={() => setCantidadMouse(cantidadMouse - 1)}>
        -
      </button>

      <span style={{ margin: "10px" }}>
        {cantidadMouse}
      </span>

      <button onClick={() => setCantidadMouse(cantidadMouse + 1)}>
        +
      </button>

    </div>
  );
}

export default CarritoProductos;