// import React from 'react'
import AppBanner from './component/AppBanner/AppBanner'
import Footer from './component/Footer/Footer'
import Hero from './component/Hero/Hero'
import Services from './component/Services/Services'
import WhereToBuy from './component/WhereToBuy/WhereToBuy'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  )
}

export default App