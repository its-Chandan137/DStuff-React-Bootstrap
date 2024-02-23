import React from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import ServiceSection from './components/ServiceSection'
import DigitalProductShow from './components/DigitalProductShow'
import NewCustomer from './components/NewCustomer'

function App() {
  return (
    <div>
      <NavigationBar/>
      <HeroSection/>
      <ServiceSection/>
      <DigitalProductShow/>
      <NewCustomer/>
    </div>
  )
}

export default App