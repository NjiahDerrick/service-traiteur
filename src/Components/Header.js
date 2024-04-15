import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hashlink'
import logo from "../images/logo.png"
import heroImage from "../images/hero--img.png"

export default function Header() {
  function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }   



  return (
       <BrowserRouter>
           <section className="hero">
                <header id='header'>
                    <img src={logo} alt="logo image of CM Chicken" className='site-logo'/>
                    <nav class="topnav" id="myTopnav">
                        <Link to="#apropos" smooth>À propos new</Link>
                        <Link to="#servicetraiteur" smooth>Service Traiteur</Link> 
                        <Link to="#menu" smooth>Galery</Link>
                        <Link to="#reservation" smooth>Réservation</Link>
                        <Link to="#contact" smooth>Contact</Link>
                        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                          <i class="fa fa-bars"></i>
                        </a> 
                    </nav>
                    <Link className="header--cta" to="#reservation" smooth>Reservez Maintenant</Link> 
                </header>
                <div className="hero--info">
                  <div className="hero--text">
                      <h1 className="hero--title">
                          CM Chicken <br />
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
          </section>
       
       </BrowserRouter>
     
  )
}
