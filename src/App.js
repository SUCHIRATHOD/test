import React from 'react'
import NavScrollExample from './components/Navbar'
import Bestsellers from './components/Bestsellers'
import './styles/Navbar.css'
import Categories from './components/Categories'
import Customers from './components/Customers'
import Paragraph from './components/Paragraph'
import Footer from './components/Footer'
import Serve from './components/Serve'
import Banner from './components/Banner'
import Searches from './components/Searches'
import Rights from './components/Rights'

const App = () => {
  return (
    <div>
      <NavScrollExample/>
      <Banner/>
      <Categories/>
      <Bestsellers/>
      
      <Customers/>
      <Paragraph/>
      <Footer/>
      <Serve/>
      <Searches/>
     <Rights/>
    </div>
  )
}

export default App
