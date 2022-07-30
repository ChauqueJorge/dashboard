import React from 'react'
import {GridComponent, Toolbar, ColumnsDirective, ColumnDirective, Resize, Sort, Search, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject} from '@syncfusion/ej2-react-grids';
import {Header, HeadBar, Sidebar, Navbar} from '../components';
import {orderInfo} from '../components';

import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import style from './Dashboard.css'
const Dashboard = () => {
  const activeMenu=true;
  return (
    <div>
      <HeadBar/>
       {activeMenu ?(
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg'>
                <Sidebar/>
            </div>
           ):(
            <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar/>
            </div>
           )} 
           
           <div className={activeMenu ? 'dark: bg-main-bg bg-main-bg  md:ml-72' :'dark:bg-main-bg bg-main-bg  flex-2'}>
                <div className='md:static bg-main-bg dark:bg-main-dark-bg navbar'>
                    <Navbar/>
                </div>
           </div>
           
      <div className=' ml-4 md:m-10 mt-24 p-3 pt-3 md:p-10 bg-white rounded-3xl' id='dash'>
        <Header title="Order Info" btnText="Status"/>
        <div className='flex bg-white md:w-50'>
          {earningData.map((item) => (
            <div key={item.title} className="bg-gray-200 m-1 text-sm font-5 pt-2 md:m-10 h-20 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 ps-2 pt-2 rounded ">
              <div className='flex ms-3'>
                  <div className='block w-50'>
                      <p className="text-sm text-gray-400 text-slate-900 mt-1">{item.title}</p>
                      <span className="text-sm font-bold">{item.amount}</span>
                  </div>
                  <button type="button" style={{ color: item.iconColor}} className="w-25 text-center text-lg opacity-0.9 md:ms-2 rounded-full ms-5 me-2 p-1 hover:drop-shadow-xl">
                    {item.icon}
                  </button>
              </div>
            </div>
          ))}
        </div>
      
          <GridComponent
            allowPaging
            allowSorting
            allowFiltering
            toolbar={['Search']}
            width="auto"
          >
          <ColumnsDirective>
                <ColumnDirective field='NAME' width='100' textAlign="Center"/>
                <ColumnDirective field='BARCODE' width='100' textAlign="Center"/>
                <ColumnDirective field='MAKE' width='100' textAlign="Center"/>
                <ColumnDirective field='IMEI NO' width='100' format="C2" textAlign="Center"/>
                <ColumnDirective field='PRICE' width='100' textAlign="Right"/>
            </ColumnsDirective>
            <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Search, Toolbar]}/>
          </GridComponent>
          <div className='flex w-100'>
            <h1 className='mt-3 text-gray-500 w-25'><strong>Account: Person Name</strong></h1>
            
            <h2 className='mt-3 w-100 text-end text-gray-500'><strong>Total:     R0000.00</strong></h2>
          </div>
          
            
    </div>
    </div>
    
  )
}

export default Dashboard