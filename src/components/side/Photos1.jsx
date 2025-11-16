import React from 'react'

const Photos1 = () => {
    const obj = {
        katrina: "https://www.samyakk.com/blog/wp-content/uploads/2025/04/Katrina-Kaif-in-Saree.jpg",
        arijit: "https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7",
        manish: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Manish_Paul_at_ITA_2012.jpg",
        zakir: "https://image.tmdb.org/t/p/w500/eKhj8gb45jNDOG9Gpv4l7wZZ2dW.jpg",
    }

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex gap-6'>
                <img 
                    src={obj.katrina} 
                    alt="katrina kaif" 
                    className='h-[250px] w-[250px] object-cover rounded-t-full rounded-l-full border border-gray-600 transition-transform duration-500 hover:scale-105' 
                />
                <img 
                    src={obj.arijit} 
                    alt="arijit singh" 
                    className='h-[250px] w-[250px] object-cover rounded-2xl border border-gray-600 transition-transform duration-500 hover:scale-105' 
                />
            </div>
            <div className='flex gap-6'>
                <img 
                    src={obj.manish} 
                    alt="manish paul" 
                    className='h-[250px] w-[250px] object-cover rounded-2xl border border-gray-600 transition-transform duration-500 hover:scale-105'
                />
                <img 
                    src={obj.zakir} 
                    alt="zakir khan" 
                    className='h-[250px] w-[250px] object-cover rounded-2xl border border-gray-600 transition-transform duration-500 hover:scale-105'
                />
            </div>
        </div>
    )
}

export default Photos1
