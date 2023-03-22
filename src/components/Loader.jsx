import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='animate-spin rounded-full h-32 w-32 border-x-4 border-gray-900' />
    </div>
  )
}

export default Loader
