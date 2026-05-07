const Productos = () => {

  return (

    <div>

      <h2>Gestión de Productos</h2>

      <table border={1} cellPadding="10">

        <thead>

          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>Shampoo Nutritivo Kids</td>
            <td>$25.000</td>
            <td>20</td>
          </tr>

          <tr>
            <td>Acondicionador Suave</td>
            <td>$22.000</td>
            <td>15</td>
          </tr>

          <tr>
            <td>Crema para Peinar</td>
            <td>$18.000</td>
            <td>30</td>
          </tr>

          <tr>
            <td>Gel Infantil Natural</td>
            <td>$12.000</td>
            <td>25</td>
          </tr>

          <tr>
            <td>Kit Trenzas y Accesorios</td>
            <td>$35.000</td>
            <td>10</td>
          </tr>

          <tr>
            <td>Aceite Capilar Suave</td>
            <td>$20.000</td>
            <td>18</td>
          </tr>

          <tr>
            <td>Spray Desenredante</td>
            <td>$16.000</td>
            <td>22</td>
          </tr>

          <tr>
            <td>Mascarilla Hidratante</td>
            <td>$28.000</td>
            <td>12</td>
          </tr>

        </tbody>

      </table>

    </div>

  );

};

export default Productos;
