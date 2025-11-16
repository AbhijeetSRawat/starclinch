import React from 'react'
import Maggie from '../side/Maggie'

const Cards = () => {
  return ( 
    <div className='w-screen h-auto'>

            <div>
                <Maggie/>
            </div>
            
            <div className='flex w-[90vw] justify-end mt-16'>
                <Maggie/>
            </div>
            <div className='flex w-[90vw]  mt-16'>
                <Maggie/>
            </div>
            <div className='flex w-[90vw] justify-end mt-16'>
                <Maggie/>
            </div>

    </div>
  )
}

export default Cards