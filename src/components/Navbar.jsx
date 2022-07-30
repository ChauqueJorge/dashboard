import React, {useEffect} from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

const Navbar = () => {
  return (
    <div className=' w-100 pt-1 pb-1 ps-2 flex md:w-85'>
      <p className='text-xl w-100 font-extrabold tracking-tight text-slate-900'>Order Notes</p>
      <button className='w-25 border flex text-center bg-white mr-2 pt-1 md:w-50  border-black font-bold rounded-2'><AiOutlinePlus className='h-5 w-25 pr-2 pt-1'/>New Order Note</button>
    </div>
  )
}

export default Navbar