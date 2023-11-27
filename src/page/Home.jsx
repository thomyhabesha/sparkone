import React from 'react'
import Nav from '../component/navigation/Nav'
import Hero from '../component/hero/Hero'
import About from '../component/aboutme/About'
import Nurgallary from '../component/nurgallary/nurgallary' 
import Contact from '../component/contact/Contact.jsx' 
import Footer from '../component/footer/Footer.jsx' 
import "./Home.css"

function Home() {
  return (
    <div className="home">
    <Nav/>
<Hero/>
<About/>
<Nurgallary/>
<Contact/>
<Footer/>
</div>
  )
}

export default Home