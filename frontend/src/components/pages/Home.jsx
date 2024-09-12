import React from 'react'
import HeroSection from '../HeroSection'
import CategoryCarousel from '../CategoryCarousel'
import LatestJob from '../LatestJob'
import Footer from '../Footer'

function Home() {
  return (
    <div>
      <HeroSection />
      <CategoryCarousel />
      <LatestJob />
      <Footer />
    </div>
  )
}

export default Home