import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Detail from './Pages/Detail';
import Header from './components/Header';
import Footer from './components/Footer';
import './Styles/Global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> }></Route>
                <Route path="/detail/:id" element={ <Detail /> }></Route>
            </Routes>
        </BrowserRouter>
        
        <Footer />
    </>
);
