import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {BsSortDown} from 'react-icons/bs';
import {Link, NavLink} from 'react-router-dom';
import DataInfo from './DataInfo'
import style from './Sidebar.css'
const Sidebar = () => {
  const activeMenu=true;
  const activeLink=' gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink='gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className='w-72 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      
      {activeMenu && (<>
        <div className='flex items-center'>
          
            <input className="w-85 bg-gray-50 text-gray-700 rounded  ms-2 mt-2 pe-5 px-2 border border-gray-200 leading-tight focus:outline-none focus:bg-white" id="searchData" type="search" placeholder="Search"></input>
            <button className="absolute ps-5 text-center w-25 ml-10 mt-2" type="submit" id='btn1'>{<AiOutlineSearch className='ml-5'/>}</button>
            <button className="bg-white w-25 mt-2 ml-2 mr-2 p-2 border border-gray-300 rounded-2 focus:bg-white" type="submit"><BsSortDown/></button>
          

        </div>
        <div className=''>
          <Link className=' block text-sm font-extrabold tracking-tight dark:text-white text-slate-900' to="/" onclick={()=>{}}>
            <NavLink to="/" onclick={()=>{}} className={({isActive})=> isActive ? activeLink:normalLink}>
              <DataInfo/>
              <DataInfo/>
              <DataInfo/>
              <DataInfo/>
              <DataInfo/>
              <DataInfo/>
              <DataInfo/>
              <DataInfo/>
              <DataInfo/>
            </NavLink>
            
            
          </Link>
          
        </div>
      </>)}

    </div>
  )
}

export default Sidebar