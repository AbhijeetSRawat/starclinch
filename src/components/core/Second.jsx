import React, { useState } from 'react'
import Photos1 from '../side/Photos1'
import Videos from '../side/Videos'

const Second = () => {
    const [photos, setPhotos] = useState(true)

    return (
        <div className='h-[100vh]  bg-black relative overflow-y-hidden'> 
            {/* Videos Background Layer */}
            <div 
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${
                    !photos 
                        ? 'opacity-100 visible' 
                        : 'opacity-0 invisible'
                }`}
            >
                <Videos/>
            </div>

            {/* Semicircular Overlay */}
            <div className={`h-full w-full text-white border-2 border-t-gray-800 border-l-gray-800 border-r-gray-800 border-b-transparent flex flex-col items-center rounded-t-full relative ${photos ? 'bg-gray-950' : 'bg-transparent'} transition-all duration-700`}>
                {/* Toggle Buttons */}
                <div className='mt-[92px] h-[80px] bg-black w-[420px] shadow-gray-850 shadow-2xl rounded-full p-2 flex items-center justify-around relative z-20'>
                    <div 
                        className={`w-[170px] h-[62px] rounded-full flex justify-center items-center text-2xl cursor-pointer transition-all duration-500 ease-in-out ${photos ? 'bg-gray-300 text-black' : 'bg-gray-900 text-white'}`}
                        onClick={() => setPhotos(true)}
                    >
                        Photos
                    </div>
                    <div 
                        className={`w-[170px] h-[62px] rounded-full flex justify-center items-center text-2xl cursor-pointer transition-all duration-500 ease-in-out ${!photos ? 'bg-gray-300 text-black' : 'bg-gray-900 text-white'}`}
                        onClick={() => setPhotos(false)}
                    >
                        Videos
                    </div>
                </div>

                {/* Photos Section */}
                <div 
                    className={`mt-20 flex gap-8 transition-all duration-700 ease-in-out relative z-10 ${
                        photos 
                            ? 'opacity-100 translate-y-0 scale-100 visible' 
                            : 'opacity-0 -translate-y-10 scale-95 invisible'
                    }`}
                >
                    <Photos1/>
                    <Photos1/>
                </div>
            </div>
        </div>
    )
}

export default Second
