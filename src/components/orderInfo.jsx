import React from 'react'

const orderInfo = (text1, text2, icon) => {
  return (
    <div className='block w-full px-1 pt-2 pb-2 hover:text-white bg-black border border-gray-400 hover:bg-gray-700 text-white'>
        <div className='flex-box mb-1  dark:text-gray-300'>
            <span className='ms-1 pe-1 text-sm font-small text-gray-500 capitalize'><strong>{text1}</strong></span>
            <span className='mx-5 px-5'>{icon}</span>
            
        </div>
        <div className='flex mb-1 text-lx font-medium text-gray-900 dark:text-gray-300'>
            <h2 className='ms-1 pe-5'>{text2}</h2>
            
        </div>
        
    </div>
  )
}

export default orderInfo