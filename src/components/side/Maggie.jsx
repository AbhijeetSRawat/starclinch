import React from 'react'

const Maggie = () => {
  return (
    <div className='ml-7 w-[65vw] h-[45vh] pt-28 flex group cursor-pointer'>
        <div className='w-[70%] text-gray-500 text-6xl mt-auto ml-[200px] group-hover:text-gray-300 transition-all duration-700 ease-in-out'>
            Late Night Maggie <br />
            Party for the boost
        </div>

        {/* Image Container with Gradient Overlay */}
        <div 
            className='relative h-[36vh] transition-all duration-700 ease-in-out group-hover:scale-110'
            style={{
                transform: 'rotateZ(15deg)',
            }}
        >
            <style>{`
                .group:hover > div > div[data-image-wrapper] {
                    transform: rotateZ(-28deg) scale(1.1) !important;
                }
            `}</style>

            <div 
                data-image-wrapper
                className='h-full w-full transition-all duration-700 ease-in-out'
                style={{
                    transform: 'rotateZ(7deg)',
                }}
            >
                <img 
                    className='h-full w-full rounded-3xl object-cover' 
                    src='https://gadegal-homestay.himwebx.com/wp-content/uploads/2023/10/masala-maggie.jpg' 
                    alt="maggie" 
                />
                
                {/* Gray Gradient Overlay - Disappears on Hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-gray-500/60 via-gray-600/40 to-gray-700/60 rounded-3xl transition-opacity duration-700 ease-in-out group-hover:opacity-0 pointer-events-none'></div>
            </div>
        </div>
    </div>
  )
}

export default Maggie
