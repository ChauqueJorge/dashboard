import React, {Fragment, useEffect} from 'react';
import{BrowserRouter, Routes, Route} from 'react-router-dom';

import {Dashboard} from '.';
const Login = () => {
  return (
    <div className='bg-white w-85 block ml-4 md:m-10 mt-24 p-3 pt-3 md:p-10 rounded-3xl'>
        <p className='text-xl w-100 font-extrabold tracking-tight text-slate-900 text-center sm:text-left'>LOGIN</p>
          <div className='flex'>
            <div className='w-25  ml-10'></div>
            <form>
                <input className='bg-gray-100 pt-2 ps-2 m-3 pb-2 border border-black font-bold rounded-2 w-100 md:w-25' type="text" placeholder='Username'></input>
                <input className='bg-gray-100  pt-2 ps-2 m-3 pb-2  border border-black font-bold rounded-2 w-100 md:w-25' type="password" placeholder='Password'></input>
            </form>
            
          </div>
          <div className="flex ml-10">
              <div className='w-25 ml-10'></div>
              <div className='ml-10 pl-10'></div>
              
              <a href="/dashboard" className='bg-primary  pt-2 ps-2 m-3 pb-2 text-white  border font-bold rounded-2 text-center w-25'>Sign In</a>
          </div> 
        
              
            
            
            
            

        
    </div>
  )
}

export default Login