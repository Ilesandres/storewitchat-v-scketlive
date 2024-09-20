import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const [producto, setProducto]=useState(false);
    const [clientes, setClientes]=useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(producto){
            navigate('/productos')
        }
    },[producto, navigate])

    useEffect(()=>{
      if(clientes){
        navigate('/clientes')
      }
    },[clientes,navigate])

    
    return (
        <div className="app-container">
        {/* Barra lateral */}
        <aside className="sidebar">
          <div className="sidebar-item">
            <button type='button'>
                <img src='https://img.icons8.com/color/48/user.png'/>Usuario
            </button>
            </div>
          <div className="sidebar-item">
            <button type='button'>
                <img src='https://img.icons8.com/ios/50/company--v1.png'/>Empresa
            </button>
            </div>
          <div className="sidebar-item">
            <button type='button'>
                <img src='https://img.icons8.com/ios/50/financial-tasks.png' />Facturas
            </button>
            </div>
          <div className="sidebar-item">
            <button type='button' onClick={()=>{setClientes(!clientes)}}>
                <img src='https://img.icons8.com/ios/50/crowd.png'/>Clientes
            </button>
            </div>
        </aside>
        
        {/* Contenido principal */}
        <main className="main-content">
          {/* Encabezado */}
          <header className="header_home">
            <h1>Nuestros Productos</h1>
            <p>de Calidad</p>
            <div className="header-buttons">
              <button className="btn"><img src='https://img.icons8.com/ios/50/calendar-plus.png'/></button>
              <button className="btn" onClick={()=>{setProducto(!producto)}}><img src='https://img.icons8.com/ios/50/fast-moving-consumer-goods.png' /></button>
            </div>
          </header>
          
          {/* Filtros de Productos */}
          <div className="filter-section">
            <button className="filter-btn active">Label</button>
            <button className="filter-btn">Label</button>
          </div>
          
          {/* Tarjetas de Productos */}
          <section className="products-section">
            <div className="product-card">
              <div className="product-info">
                <h2>Productos</h2>
                <p>categorías, productos y stock. Actualiza, añade o deshabilita productos.</p>
              </div>
              <div className="product-rating">
                ⭐⭐⭐⭐⭐
                <span className="favorite-icon">❤️</span>
              </div>
            </div>
  
            <div className="product-card">
              <div className="product-info">
                <h2>Pedidos</h2>
                <p>Crea pedidos, modifícalos. Añade pedidos, modifícalos y verifica su estado.</p>
              </div>
              <div className="product-rating">
                ⭐⭐⭐⭐⭐
                <span className="favorite-icon">❤️</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    );



}

export default Homepage;
