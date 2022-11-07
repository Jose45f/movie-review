import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import App from './App';
import App2 from './components/App2';
import List from "./components/Movielist";
import Navbar from './components/Navbar';
import Star from "./components/stars";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
      <List/>
      <Star/>
      <App2 />   
  </React.StrictMode>
);
