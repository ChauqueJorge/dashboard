import React, {Fragment, useEffect} from 'react';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import {Sidebar, HeadBar, Navbar} from './components';
import {Dashboard, Login} from './pages'
import './App.css'
import Browser from './routes';

const App = () => {
    const activeMenu=true;
  return (
    <div>
      <Browser/>
        
        
    </div>
  )
}

export default App