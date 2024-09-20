import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './modules/views/homepage';
import Clientes from './modules/views/clientes';
import Login from './modules/views/login';
import Productos from './modules/views/productos';
import Envios from './modules/views/envios'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/clientes' element={<Clientes/>}/>
            <Route path='/homePage' element={<Homepage/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/envios' element={<Envios/>}/>

        </Routes>
    );
}

export default AppRouter;
