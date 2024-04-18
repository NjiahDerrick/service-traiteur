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

    // Window tracker begins here
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    function watchWidth() {
        setWindowWidth(window.innerWidth)
    }
     window.addEventListener("resize", watchWidth)

     return function() {
        window.removeEventListener("resize", watchWidth)
       }
   }, [])


  return (
       <BrowserRouter>
           <section className="hero">
                <header id='header' className='hero-navigation'>
                    <img src={logo} alt="logo image of CM Chicken" className='site-logo'/>
                    <nav className="hero-nav">
                        <Link to="#apropos" smooth>À propos</Link>
                        <Link to="#servicetraiteur" smooth>Service Traiteur</Link> 
                        <Link to="#menu" smooth>Galery</Link>
                        <Link to="#reservation" smooth>Réservation</Link>
                        <Link to="#contact" smooth>Contact</Link>
                        <Link className="header--cta" to="#reservation" smooth>Reservez Maintenant</Link> 
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
                  
                      <img src={logo} alt="logo image of CM Chicken" className='site-logo'/>
                      <div className="centerclose"> 
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={closeHamber} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="iconhamberclose">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                      </div>
                  </div>  
                  <nav className='listlinkhamburger'>
                        <Link to="#apropos" smooth>À propos</Link>
                        <Link to="#servicetraiteur" smooth>Service Traiteur</Link> 
                        <Link to="#menu" smooth>Galery</Link>
                        <Link to="#reservation" smooth>Réservation</Link>
                        <Link to="#contact" smooth>Contact</Link>
                        <Link className="header--cta" to="#reservation" smooth>Reservez Maintenant</Link> 
                  </nav>

                </div>

                <div className="hero--info">
                  <div className="hero--text">
                      <h1 className="hero--title">
                          <span>CM Chicken</span> <br />
                          <span className="sub--title">Service traiteur</span> 
                      </h1>
                      <p className="hero--details">
                        Avez-vous un evenement proche? alors nous<br />
                        sommes le service traiteur qu'il vous faut!
                      </p>
                      <Link className="hero--cta" to="#reservation" smooth>Je veux reserver &rarr;</Link>
                    </div>
                    <img src={heroImage} alt="hero image of section" className="hero--image" />
                </div>
                <h1>Window width: {window.innerWidth}</h1>
          </section>
       
       </BrowserRouter>
     
  )
}
