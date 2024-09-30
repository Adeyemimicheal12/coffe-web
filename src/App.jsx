// import React from 'react'
import AppBanner from './component/AppBanner/AppBanner'
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
    </div>
  )
}

export default App