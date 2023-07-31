import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Detail from '@/Pages/Detail';
import ScrollBar from '@/Components/ScrollBar';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import '@/Styles/Global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <App /> }></Route>
                <Route path="/detail/:id" element={ <Detail /> }></Route>
            </Routes>
            
            <Footer />
            <ScrollBar />
        </BrowserRouter>
    </>
);
