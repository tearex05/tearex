import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './components/Nav'
import {BrowserRouter as R, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
        <R>
        <Nav />
                <Routes>
                <Route path="/tearex" exact element={<App />} />
                </Routes>
        </R>
</>
);
