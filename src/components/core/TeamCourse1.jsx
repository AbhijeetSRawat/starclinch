import React, { useState } from 'react'

const TeamCarousel = () => {
  const teams = [
    {
      id: 1,
      name: "Tech Titans",
      members: 5,
      description: "The artists behind the visuals. These design superheroes bring ideas to life, painting our projects with creativity and imagination",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      cta: "Our design team is growing. Apply Now"
    },
    {
      id: 2,
      name: "Design Dynamos",
      members: 8,
      description: "The code wizards who build digital dreams. Masters of logic and innovation",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
      cta: "Join our tech squad. Apply Now"
    },
    {
      id: 3,
      name: "Marketing Mavericks",
      members: 6,
      description: "The growth hackers and storytellers. They turn ideas into movements",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      cta: "Grow with us. Apply Now"
    },
    {
      id: 4,
      name: "Product Pioneers",
      members: 7,
      description: "The visionaries who shape user experiences. They build products people love",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
      cta: "Shape the future. Apply Now"
    },
    {
      id: 5,
      name: "Sales Stars",
      members: 9,
      description: "The relationship builders who connect and inspire",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
      cta: "Join our sales team. Apply Now"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teams.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + teams.length) % teams.length)
  }

  const getImageStyle = (index) => {
    const diff = index - currentIndex
    const totalTeams = teams.length
    
    // Normalize difference to handle wrap-around
    let normalizedDiff = diff
    if (diff > totalTeams / 2) normalizedDiff = diff - totalTeams
    if (diff < -totalTeams / 2) normalizedDiff = diff + totalTeams
    
    const isCenter = normalizedDiff === 0
    const isVisible = Math.abs(normalizedDiff) <= 2
    
    if (!isVisible) {
      return {
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(0)',
        zIndex: 0
      }
    }
    
    // Positioning for visible images - adjusted to match the screenshot
    const positions = {
      '-2': { x: -700, y: 240, scale: 0.35, opacity: 0.2 },
      '-1': { x: -380, y: 100, scale: 0.55, opacity: 0.4 },
      '0': { x: 0, y: 0, scale: 1, opacity: 1 },
      '1': { x: 380, y: 100, scale: 0.55, opacity: 0.4 },
      '2': { x: 700, y: 240, scale: 0.35, opacity: 0.2 }
    }
    
    const pos = positions[normalizedDiff.toString()] || positions['0']
    
    return {
      transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
      opacity: pos.opacity,
      zIndex: isCenter ? 50 : 10 - Math.abs(normalizedDiff)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#151922] to-[#0a0e1a] text-white py-16 mt-28 px-8 overflow-hidden relative'>
      <div className='relative max-w-[1400px] mx-auto'>
        {/* Carousel Section */}
        <div className='relative h-[550px] flex items-center justify-center mb-12'>
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className='absolute left-[5%] top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-gray-800/60 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl backdrop-blur-sm'
          >
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M15 19l-7-7 7-7' />
            </svg>
          </button>

          {/* Images Container */}
          <div className='relative w-full h-full'>
            <div className='absolute  w-full h-full'>
              {teams.map((team, index) => {
                const style = getImageStyle(index)
                const isCenter = index === currentIndex
                
                return (
                  <div
                    key={team.id}
                    className='absolute top-1/2 left-1/2 transition-all duration-700 ease-out'
                    style={{
                      transform: style.transform,
                      opacity: style.opacity,
                      zIndex: style.zIndex
                    }}
                  >
                    <img
                      src={team.image}
                      alt={team.name}
                      className={`w-[380px] h-[380px] object-cover shadow-2xl transition-all duration-700 ${
                        isCenter ? 'rounded-[2.5rem]' : 'rounded-full'
                      }`}
                      style={{
                        filter: isCenter ? 'brightness(1)' : 'brightness(0.4) blur(1px)'
                      }}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className='absolute right-[5%] top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-gray-800/60 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl backdrop-blur-sm'
          >
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </div>

        {/* Content Section */}
        <div className='text-center max-w-3xl mx-auto relative z-10'>
          <div className='inline-block bg-green-900/30 px-7 py-2.5 rounded-full mb-6 border border-green-700/40 backdrop-blur-sm'>
            <span className='text-green-400 text-sm font-medium'>{teams[currentIndex].members} Members</span>
          </div>

          <h2 className='text-6xl font-bold mb-6 transition-all duration-500 tracking-tight'>{teams[currentIndex].name}</h2>
          
          <p className='text-gray-400 text-lg leading-relaxed mb-10 transition-all duration-500 max-w-2xl mx-auto'>
            {teams[currentIndex].description}
          </p>

          <button className='group flex items-center gap-3 mx-auto text-green-500 text-base hover:text-green-400 transition-colors duration-300 font-medium'>
            {teams[currentIndex].cta}
            <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
            </svg>
          </button>
        </div>

        {/* Page Indicator */}
        <div className='text-center mt-20'>
          <span className='inline-block bg-gray-800/60 px-5 py-2 rounded-lg text-gray-400 text-sm font-medium backdrop-blur-sm'>
            {currentIndex + 1} / {teams.length}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TeamCarousel
