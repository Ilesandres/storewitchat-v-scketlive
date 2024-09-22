import React,{useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const Ventas = () => {
    const [productos, setProductos] = useState([
        { codigo: '1010', producto: 'Arroz Roa 1x1kg', cantidad: 3, precioUnidad: 3500 },
        { codigo: '1012', producto: 'Arveja Diana 1x1kg', cantidad: 2, precioUnidad: 2500 },
      ]);
    
      const [total, setTotal] = useState(15500);
      const [pagaCon, setPagaCon] = useState(20000);
      const cambio = pagaCon - total;
      
     
      const navigate=useNavigate();

    return (
        <div className="ventas-container_ventas">
      {/* Encabezado */}
      <header className="header_ventas">
         <button className="back-btn_ventas" onClick={()=>{navigate('/')}} >
             Back
        </button>
        <h1>Ventas</h1>
        <div className="user-info_ventas">
          <span>usuario: MATIXTA</span>
          <span>Rol: Administrador</span>
          <span>1234</span>
        </div>
      </header>

      {/* Información de venta */}
      <div className="venta-info_ventas">
        <h3>Ingrese la información de la venta</h3>
        <div className="input-group_ventas">
          <label>Producto</label>
          <input readOnly={true} type="text" value="KI carne" />
          <button className="search-btn_ventas">🔍</button>
        </div>
        <div className="input-group_ventas">
          <label>Cantidad</label>
          <input type="number" value="1" />
        </div>
        <div className="input-group_ventas">
          <label>Precio</label>
          <input type="text" value="$15000" />
        </div>
        <div className="action-buttons_ventas">
          <button className="add-btn_ventas">➕</button>
          <button className="clear-btn_ventas">🧹</button>
        </div>
      </div>

      {/* Tabla de productos */}
      <div className="productos-table_ventas">
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unidad</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => (
              <tr key={index}>
                <td>{producto.codigo}</td>
                <td>{producto.producto}</td>
                <td>{producto.cantidad}</td>
                <td>{`$${producto.precioUnidad}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Información del cliente y pago */}
      <div className="cliente-pago_ventas">
        <div className="cliente-info_ventas">
          <h4>Cliente</h4>
          <div className='client-seacrh-table'>
            <input type="text" value="Diego Moreno S" />
            <button className="search-client-btn_ventas">🔍</button>
          </div>
          
          <table className='table bg-light'>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Nombre </th>
                    <th scope='col'>Nit</th>
                </tr>
                <tr key="cliente">
                    <td scope='row'>1</td>
                    <td>Diego Moreno S</td>
                    <td>125</td>
                </tr>
          </table>
          <div className='buttons_client_search'>
            <button type="button" className="client-btn-ventas"><img src="https://img.icons8.com/color/48/cancel--v1.png" alt="delete" /></button>
            <button type="button" className="client-btn-ventas"><img src="https://img.icons8.com/color/48/print.png" alt="print" /></button>
          </div>
          
        </div>
        <div className="pago-info_ventas">
          <p>Total a pagar: <span className="total_ventas">${total}</span></p>
          <label>Paga con:</label>
          <input readOnly={true} type="number" value={pagaCon} onChange={e => setPagaCon(e.target.value)} />
          <p>Cambio: <span className="cambio_ventas">${cambio}</span></p>
        </div>
      </div>
    </div>
    );
}

export default Ventas;
