import React from 'react'
import row1Img from "../images/contact--row1--info--img.png"
import ContactLogo from "../images/logo.png"
import Fbook from "../images/fbook.png"
import InstaG from "../images/insgram.png"
import Tiktok from "../images/tiktok.png"
import EmailImg from "../images/email.png"
import PhoneImg from "../images/phone.png"
import FaqImg from "../images/faq.png"

export default function  Contact() {
  return (
    <section id='contact' className='contact'>
        <div className="contact--row1">
              <div className="contact--row1--info">
                <img src={row1Img} alt="" className="contact--row1--info--img" />
                <p className="contact--row1--info--text">
                  Insrivez-vous en 1 click et effectuer<br />
                  vos commandes plus rapidement.
                </p>
              </div>
              <form className="contact--row1--form">
                <input 
                    type="text" 
                    className="contact--row1--email"
                    placeholder='E-mail' 
                />
                <input 
                     type="text" 
                     className="contact--row1--password" 
                     placeholder='Mot-de-pass'
                />
                <button className="contact--row1--btn">Je M'inscris !</button>
              </form>
        </div>

        <div className="contact--row2">
              <div className="contact--row2--col1">
                  <h5 className="contact--row2--col1--title">
                    Besoin d'aide?
                  </h5>
                  <div className="contact--row2--col1--phone">
                      <img src={PhoneImg} alt="" className="contact--row2--col1--phone--img" />
                      <div className="phone-nums">
                          <p className="contact--row2--col1--phone--num1">(+237)699 999 999</p>
                          <p className="contact--row2--col1--phone--num2">(+237)677 777 777</p>
                      </div>
                  </div>
                  <div className="contact--row2--col1--email">
                    <img src={EmailImg} alt="" className="contact--row2--col1--email--img" />
                    <p className="contact--row2--col1--email--text">Envoyer un message</p>
                  </div>
                  <div className="contact--row2--col1--FAQ">
                    <img src={FaqImg} alt="" className="contact--row2--col1--FAQ--img" />
                    <p className="contact--row2--col1--FAQ--text">FAQ</p>
                  </div>
              </div>

              <div className="contact--row2--col2">
                <ul className="contact--row2--col2--list">
                  <li className="contact--row2--col2--title">À propos</li>
                  <li>Gamelles Gourmandes</li>
                  <li>Notre histoire</li>
                  <li>Nos engagements RSE</li>
                  <li>Carte Coup de pouce</li>
                  <li>Carte cadeau</li>
                </ul>
              </div>

              <div className="contact--row2--col3">
                <ul className="contact--row2--col3--list">
                  <li className="contact--row2--col3--title">Nos Produits</li>
                  <li>Poulets</li>
                  <li>Poissons</li>
                  <li>Porc</li>
                  <li>Saucisses</li>
                  <li>Shawarma</li>
                  <li>Hot-Dog</li>
                </ul>
              </div>

              
              <div className="contact--row2--col4">
                
                <ul className="contact--row2--col4--list">
                <li className="contact--row2--col4--title">Nos Deserts</li>
                  <li>Yaourt</li>
                  <li>Glaces</li>
                  <li>Jus de fruits</li>
                  <li>Menthe au lait</li>
                </ul>
              </div>

              <div className="contact--row2--col5">
                  <h5 className="contact--row2--col5--title">
                     Suivez-nous !
                  </h5>
                  <div className="contact--row2--col5--img">
                    <img src={Fbook} alt="" className="col5--img1" />
                    <img src={InstaG} alt="" className="col5--img2" />
                    <img src={Tiktok} alt="" className="col5--img3" /> 
                  </div>
              </div> 
       </div>

       <div className="contact--row3">
         <img src={ContactLogo} alt="" className="contact--row3--img" />
         <p className="contact--row3--text">
           Conditions de vente - Livraison & Paiemen t- Données personnelles - Mentions légales - Plan du site - Politique de cookies
         </p>

       </div>
    </section>
  )
}
