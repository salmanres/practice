import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './dashboard/LandingPage';
import Comp2 from './dashboard/Comp2';
import Comp3 from './dashboard/Comp3';
import ServicePage from './dashboard/ServicePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route path="" element={<Comp2 />} />
          <Route path='/about' element={<Comp3 />} />
          <Route path='/services' element={<ServicePage />} />
        </Route>
        {/* nested routing */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
