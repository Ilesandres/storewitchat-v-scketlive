import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './modules/views/homepage';
import Clientes from './modules/views/clientes';
import Login from './modules/views/login';
import Productos from './modules/views/productos';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/clientes' element={<Clientes/>}/>
            <Route path='/homePage' element={<Homepage/>}/>
            <Route path='/productos' element={<Productos/>}/>

        </Routes>
    );
}

export default AppRouter;
