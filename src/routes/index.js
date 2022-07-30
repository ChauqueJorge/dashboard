import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard, Login } from '../pages';

const Browser = () => {
    const sign=false;
  return (
    <div>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Browser