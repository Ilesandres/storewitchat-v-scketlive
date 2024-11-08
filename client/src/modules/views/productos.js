import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';


const Productos = () => {

  const navigate=useNavigate();
  const [back, setBack]=useState(false);
  const [editar, setEditar]=useState(false);

  useEffect(()=>{
    if(back){
      navigate('/');
    }

  },[back,navigate]);
     
      
      
      
      /*categoria */
      const [categoria, setCategoria]=useState('');
      const [descripcionCategoria, setDescripcionCategoria]=useState('');
      const [categorias, setCategorias]=useState([]);
      
      /*obtengo las categorias */
      const getCatecogia=()=>{
        Axios.get('http://localhost:3001/leerCategorias').then((response)=>{
          setCategorias(response.data);
        });
      };
      
      /*productos */
      const [nombreProducto, setNombreProducto]=useState(null);
      const [stockProducto, setStockProducto]=useState(0);
      const [precioProducto, setPrecioProducto]=useState(0);
      const [enabledProducto, setEnabledProducto]=useState(true);
      const [categoriaProduct, setCategoriaProduct]=useState(null);
      const [searchProducts, setSearchProduct]=useState('');
      const [productos, setProductos]=useState([]);
      const [editProduct,setProductEdit]=useState([]);
      
      const addProduct=()=>{
        if(nombreProducto!==null && categoriaProduct!==null){
          Axios.post('http://localhost:3001/addProduct',{
            nombre: nombreProducto,
            stock:   stockProducto ,
            precio:    precioProducto,
            category:   categoriaProduct,
            isActivo:    enabledProducto
          }).then(()=>{
            alert('producto agregado correctamente');
          });
        }
      };
      
      const getProducts=()=>{
        Axios.get('http://localhost:3001/getProducts',{
          params: {search:searchProducts}
        }).then((response)=>{
          setProductos(response.data);
        });
      };
      
      const deleteProduct=(id)=>{
        alert('eliminando producto con id : '+id);
        Axios.post('http://localhost:3001/deleteProduct',{
          idProduct:id
        }).then(()=>{
          alert('producto eliminado con exito');
        });
      };
      
      const changeStateProduct=(id, valor)=>{
        Axios.post('http://localhost:3001/changeState',{
          idProduct:id,
          valor:valor
        }).then(()=>{ 
          console.log('state changed');
        });
      };
      
      const saveProduct=()=>{
        if(!editar){
          addProduct();
        }
      };
      
      
      useEffect(()=>{
      if(searchProducts){
        console.log(searchProducts);
        getProducts();
      }
        
      },[searchProducts]);
      
      
      
      useEffect(()=>{
        if(editar){
          console.log(editar);
          setNombreProducto(editProduct.PRODUCT_NAME);
          setStockProducto(editProduct.STOCK);
          setPrecioProducto(editProduct.PRICE);
          setCategoriaProduct(editProduct.CATEGORY_NAME);
        }
      },[editar]);
      
      
     
      
      
  

        
        getProducts();
        getCatecogia();



        
  // Se ejecuta solo cuando el componente se monta
      
      

    return (
        <div className="product-list-container">
        {/* Encabezado */}
        <header className="header">
          <a className="back-link" onClick={()=>{setBack(!back);}}>Back</a>
          <h1>Productos</h1>
          <button className="add-button" data-bs-toggle="modal" data-bs-target="#ModalAgregar">Agregar</button>
        </header>
  
        {/* Subtítulo */}
        <p className="subtitle_product">Modifica o actualiza la lista de productos</p>
  
        {/* Barra de búsqueda */}
        <div className="search-bar">
          <input type="search" onChange={(event)=>{setSearchProduct(event.target.value);}} placeholder="Search" className="search-input"/>
        </div>
  
        {/* Tabla de productos */}
        <table className="product-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Stock</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Editar</th>
              <th>Habilitado</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((product, index) => (
              <tr key={product.ID_PRODUCT}>
                <td className='index_product'>{index+1}</td>
                <td className="product-name">
                  <div className="product-icon">A</div>
                  {product.PRODUCT_NAME}
                </td>
                <td>{product.STOCK}</td>
                <td>{product.CATEGORY_NAME}</td>
                <td>{product.PRICE}</td>
                <td>
                  <button className="edit-button" onClick={()=>{setEditar(!editar); setProductEdit(product);}} data-bs-toggle="modal" data-bs-target="#ModalAgregar">Editar</button>
                  <button type="button"  className="delete-button_product" onClick={()=>{deleteProduct(product.PRODUCT_ID);}}>Eliminar</button>

                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={product.IS_ACTIVE}
                    onChange={(event) => {
                      changeStateProduct(product.PRODUCT_ID, event.target.checked);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* seccion de los modales que estaran ocultos */}
        <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
        
       
   

    
      <div className="modal fade" id="ModalAgregar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalAgregarLabel">{editar?'Editar el producto':'agregar producto'}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"  onClick={()=>{changeEditar();}} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='mb-3'>
                <label htmlFor="nombreProducto" className='form-label'>Nombre del producto</label>
                <input type="text"  onChange={(event)=>{setNombreProducto(event.target.value);}} name='nombreProduct' className='form-control' placeholder='nombre producto' />
                <label htmlFor="cantidad" className='form-label'>cantidad</label>
                <input type="number"  onChange={(event)=>{Number(setStockProducto(event.target.value));}} className='form-control' placeholder='cantidad' />
                <label htmlFor="precio">precio</label>
                <input type="number"  onChange={(event)=>{Number(setPrecioProducto(event.target.value));}}  className='form-control' placeholder='$ precio' />

              
                    <div className="mb-3 ">
                      <label htmlFor="" className="form-label">categoria</label>
                      <select
                        className="form-select"
                        name="categoria"
                        id="categoria"
                        onChange={(event)=>{setCategoriaProduct(event.target.value);}}
                      >
                       <option selected>seleccione</option>
                      {categorias.map((categoria,index)=>(
                        <option value={categoria.ID} key={categoria.ID}> <b className='fs-6'>{categoria.NAME}</b>  ::: <b>{categoria.DESCRIPTION}</b></option>
                      ))}
                       
                      
                      </select>
                      <button type="button" data-bs-toggle='modal' data-bs-target='#agregarCategoria' className='btn btn'><img src="https://img.icons8.com/color/48/add--v1.png" alt="" /></button>
                  
                </div>
                
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={()=>{changeEditar();}} data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={saveProduct} >{editar? 'Save changes':'save'}</button>
            </div>
          </div>
        </div>
      </div>
      
      {/*modal de categorias para añadir*/}
      
      <div className="modal fade " id="agregarCategoria"  tabIndex="-1" aria-labelledby="agregarCategoriaLabel" aria-hidden="true" data-bs-backdrop='static'>
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content bg-secondary text-white">
            <div className="modal-header">
              <h5 className="modal-title" id="agregarCategoriaLabel">agregar categoria</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className='mb-3'>
              <label htmlFor="nombreCategoria" className='form-label'>Nombre de la categoria</label>
              <input type="text" name='nombreCategoria' onChange={(event)=>{
              setCategoria(event.target.value);
              }} className='form-control' placeholder='nombre'/>
              <label htmlFor="descripcion" className='form-label' >descripcion</label>
              <textarea cols="30" name='descripcion' onChange={(event)=>{
              setDescripcionCategoria(event.target.value);
              }} rows="10" className='form-control' placeholder='describe brevemente la categoria'></textarea>
            </div>
                
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={agregarCategory}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

      

      </div>
    );
    
    function changeEditar(){
    if(editar){
     setEditar(!editar);
     setProductEdit('');
    }  
    }
    
    /*min 48:13 */
    function agregarCategory(){
      Axios.post('http://localhost:3001/createCategory',{
        category:categoria,
        description:descripcionCategoria
      }).then(()=>{
        alert('categoria registrado');
        getCatecogia();
      });
    }
    

    
};

export default Productos;
