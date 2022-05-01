import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/shared/Footer"

ReactDOM.render(
  <BrowserRouter>
  <div className='page-container'>
    <div className='content-wrap'>
      <App />
    </div>
    <Footer/>
  </div>
  </BrowserRouter>,
  document.getElementById('root')
);
