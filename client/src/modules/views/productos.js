import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const Productos = () => {

  const navigate=useNavigate();
  const [back, setBack]=useState(false);

  useEffect(()=>{
    if(back){
      navigate('/')
    }

  },[back,navigate])

    //ejemplos antes de conectar a BD
    const [products, setProducts] = useState([
        { name: 'List item', stock: 100, precio: 252, enabled: true },
        { name: 'List item', stock: 50,  precio: 252, enabled: true },
        { name: 'List item', stock: 75,  precio: 252, enabled: true },
        { name: 'List item', stock: 20,  precio: 252, enabled: true },
        { name: 'List item', stock: 60,  precio: 252, enabled: true },
        { name: 'List item', stock: 45,  precio: 252, enabled: true },
      ]);

    return (
        <div className="product-list-container">
        {/* Encabezado */}
        <header className="header">
          <a className="back-link" onClick={()=>{setBack(!back)}}>Back</a>
          <h1>Productos</h1>
          <button className="add-button" data-bs-toggle="modal" data-bs-target="#ModalAgregar">Agregar</button>
        </header>
  
        {/* Subtítulo */}
        <p className="subtitle_product">Modifica o actualiza la lista de productos</p>
  
        {/* Barra de búsqueda */}
        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
  
        {/* Tabla de productos */}
        <table className="product-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Stock</th>
              <th>Precio</th>
              <th>Editar</th>
              <th>Habilitado</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="product-name">
                  <div className="product-icon">A</div>
                  {product.name}
                </td>
                <td>{product.stock}</td>
                <td>{product.precio}</td>
                <td>
                  <button className="edit-button">Editar</button>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={product.enabled}
                    onChange={() => {
                      const newProducts = [...products];
                      newProducts[index].enabled = !newProducts[index].enabled;
                      setProducts(newProducts);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* seccion de los modales que estaran ocultos */}
        <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
        
       
   

    
      <div className="modal fade" id="ModalAgregar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalAgregarLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      </div>
    );
}

export default Productos;
