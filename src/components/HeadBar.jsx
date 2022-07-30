import React from 'react';
import {AiOutlineUser} from 'react-icons/ai'
import style from './Header.css';
const HeadBar = (title, btntext) => {
  return (
   <div className='bg-white flex pb-3 pt-3 justify-between items-center'>
    
    <div className='w-25 ms-5 ps-5'></div>
      <div className='flex ml-5 md:ml-3'>
        <h2 className=' ml-5 text-gray-400 text-slate-900'>Inventors</h2>
        <h2  className=' ml-5 mr-5 text-gray-900 text-slate-900 border-solid-900'><strong>Orders</strong></h2>
        <h2  className=' mr-5 text-gray-400 text-slate-900'>Vouchers</h2>
      </div>
      <div className='w-25'></div>
      <div className="bg-gray-100 rounded-3xl mr-2 p-3"><AiOutlineUser/></div>
    </div>
    
    
    
  )
}

export default HeadBar