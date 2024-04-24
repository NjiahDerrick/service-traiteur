import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hashlink'
import logo from "../images/logo.png"
import heroImage from "../images/hero--img.png"
import { useRef, useState } from 'react'

export default function Header() {
    const handleblock = useRef()
    const [statehamber,setStatehamber] = useState(false)

    const actionhamber = ()=>{
        handleblock.current.style.transform = "translateX(-2%)";
        setStatehamber(true)
    }

  
    const closeHamber = ()=>{
        handleblock.current.style.transform = "translateX(-103%)";
        setStatehamber(false)
    } 




  return (
       <BrowserRouter>
           <section className="hero">
                <header id='header' className='hero-navigation'>
                    <img src={logo} alt="logo image of CM Chicken" className='site-logo'/>
                    <nav className="hero-nav">
                        <Link to="#apropos" className="home-link" smooth="true">À propos</Link>
                        <Link to="#servicetraiteur" smooth="true">Service Traiteur</Link> 
                        <Link to="#menu" smooth="true">Galerie</Link>
                        <Link to="#reservation" smooth="true">Réservation</Link>
                        <Link to="#contact" smooth="true">Contact</Link>
                        <Link className="header--cta" to="#reservation" smooth="true">Reservez Maintenant</Link> 
                    </nav>
                    <div className='hamburger'>
                        {statehamber ? 
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={closeHamber} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hambericon">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                          
                            : 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  onClick={actionhamber} className="hambericon">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        } 
                      </div>   
                </header>
                                
                <div className='menuhamber' ref={handleblock}>
                  <div className='closesection'>
                      <img src={logo} alt="logo image of CM Chicken" className='site-logo2'/>
                      <div className="centerclose"> 
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={closeHamber} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="iconhamberclose">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                      </div>
                  </div>  
                  <ul className='listlinkhamburger'>
                        <li><Link to="#apropos" smooth="true">À propos</Link></li>
                        <li><Link to="#servicetraiteur" smooth="true">Service Traiteur</Link></li> 
                        <li><Link to="#menu" smooth="true">Galerie</Link></li>
                        <li><Link to="#reservation" smooth="true">Réservation</Link></li>
                        <li><Link to="#contact" smooth="true">Contact</Link></li>
                        <li><Link className="header--cta2" to="#reservation"smooth="true">Reservez Maintenant</Link></li> 
                  </ul>
                </div>

                <div className="hero--info">
                  <div className="hero--text">
                      <h1 className="hero--title">
                          <span>CM Chicken</span> <br />
                          <span className="sub--title">Service traiteur</span> 
                      </h1>
                      <p className="hero--details">
                        Avez-vous un événement proche? alors nous<br />
                        sommes le service traiteur qu'il vous faut!
                      </p>
                      <Link className="hero--cta" to="#reservation" smooth="true">Je veux reserver &rarr;</Link>
                  </div>
                    <img src={heroImage} alt="hero image of section" className="hero--image" />
                </div>
                
          </section>
       
       </BrowserRouter>
     
  )
}
