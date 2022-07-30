import React from 'react'

const DataInfo = () => {
  return (
    <div className='block w-full px-1 pt-2 pb-2 hover:text-white bg-white-100 border border-gray-400 hover:bg-gray-700 text-white'>
        <div className='flex-box mb-1  text-lx font-medium text-gray-900 dark:text-gray-300'>
            <span className='ms-1 pe-1'><strong>DD/MM/YYYY</strong></span>
            <span className='mx-5 px-5'><strong>Value</strong></span>
            
        </div>
        <div className='flex mb-1 text-sm font-medium text-gray-500 dark:text-gray-300'>
            <h2 className='ms-1 pe-5'>Status</h2>
            <h2 className='mx-5 px-5'>Quantity</h2>
        </div>
        
    </div>
  )
}

export default DataInfo