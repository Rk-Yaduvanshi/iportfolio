import React from 'react';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default App