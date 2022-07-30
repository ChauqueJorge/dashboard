import {IoMdArrowDropdown} from 'react-icons/io'
import React from 'react';
import {orderInfo} from './orderInfo';
import style from './Header.css';
const Header = ({ title, btnText}) => {
  return (
    <div className='mb-10 block'>
      <div className='flex w-100'>
        <p className='text-3xl w-100 font-extrabold tracking-tight text-slate-900'>{title}</p>
        
        <button className='w-15 border flex text-center bg-white  pl-5 pr-3 pt-1  border-gray-300 rounded-2 focus:bg-white'>{btnText}<IoMdArrowDropdown className='h-5 pt-1'/></button>
      </div>
      
      
    </div>
  )
}

export default Header