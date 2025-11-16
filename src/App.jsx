import React from 'react'
import Second from './components/core/Second'
import Card from './components/core/Cards'
import TeamCarousel from './components/core/TeamCourse1'
import TalentedFolksHero from './components/core/JoinOurTeam'

const App = () => {
  return (
    <div className='bg-black min-h-screen overflow-x-hidden'>
      <Second/>
      
      <Card/>

      <TeamCarousel/>

      <TalentedFolksHero/>
    
    </div>
  )
}

export default App
