import React, { useState } from 'react'

const TalentedFolksHero = () => {
  const [isHovered, setIsHovered] = useState(false)

  const tags = ['Focused', 'Collaborative', 'United', 'Vibrant', 'Dynamic', 'Motivated']

  return (
    <div className='min-h-screen bg-[#0a0d14] text-white relative overflow-hidden flex items-center justify-center'>
      {/* Background gradient blobs */}
      <div className='absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-purple-900/30 to-pink-900/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3'></div>
      
      {/* Large oval border */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <div className='w-[85%] h-[75%] border border-gray-700/40 rounded-full relative'>
          {/* Animated tags at bottom of oval */}
          <div className='absolute bottom-28 left-1/2 -translate-x-1/2 w-full flex justify-center'>
            <div className='relative w-[800px] h-24'>
              {tags.map((tag, index) => {
                const totalTags = tags.length
                const baseAngle = (index / totalTags) * 140 - 70 // Spread across bottom arc
                const radius = 280
                
                // Calculate position along curve
                const x = Math.sin((baseAngle * Math.PI) / 180) * radius
                const y = Math.cos((baseAngle * Math.PI) / 180) * radius * 0.5
                
                // Calculate rotation for tag
                const rotation = baseAngle * 0.7
                
                return (
                  <div
                    key={tag}
                    className={`absolute left-1/2 top-0 transition-all duration-700 ease-out ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-4'
                    }`}
                    style={{
                      transform: `translate(-50%, 0) translate(${x}px, ${y}px) rotate(${rotation}deg)`,
                      transitionDelay: `${index * 50}ms`
                    }}
                  >
                    <div className='bg-gray-800/60 backdrop-blur-sm px-6 py-2.5 rounded-full border border-gray-700/50 whitespace-nowrap'>
                      <span className='text-gray-300 text-sm font-medium'>{tag}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className='relative z-10 text-center max-w-4xl px-8'>
        {/* Handwritten style text with arrow */}
        <div className='mb-6 flex items-center justify-center gap-3 absolute left-[-20px]'>
          <span className='text-pink-400 text-xl font-handwriting' style={{ fontFamily: 'cursive' }}>
            we are the team of
          </span>
          <svg className='w-12 h-12 text-pink-400' viewBox='0 0 48 48' fill='none' stroke='currentColor' strokeWidth='2'>
            <path d='M10 15 Q 25 10, 35 20' strokeLinecap='round'/>
            <path d='M32 18 L 35 20 L 33 23' strokeLinecap='round' strokeLinejoin='round'/>
          </svg>
        </div>

        {/* Main heading with badges */}
        <div className='relative mb-8 mt-8'>
          <h1 className='text-7xl font-bold leading-tight'>
            20+Talented Folks
          </h1>
          
          {/* Fun badge */}
          <div className='absolute -left-12 top-12 bg-gray-800/60 backdrop-blur-sm px-5 py-2 rounded-full border border-gray-700/50 rotate-[-12deg]'>
            <span className='text-gray-300 text-base font-medium'>Fun</span>
          </div>
          
          {/* Inclusive badge */}
          <div className='absolute -right-8 top-4 bg-gray-800/60 backdrop-blur-sm px-5 py-2 rounded-full border border-gray-700/50 rotate-[8deg]'>
            <span className='text-gray-300 text-base font-medium italic'>Inclusive</span>
          </div>
        </div>

        {/* Description */}
        <p className='text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto'>
          From passion-driven dedication to impactful contribution,<br />
          we do it all here. We are growing and will be excited to hear<br />
          from you !
        </p>

        {/* CTA Button */}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-8 py-4 rounded-full text-white text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
        >
          Join our team
          <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M13 7l5 5m0 0l-5 5m5-5H6' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TalentedFolksHero