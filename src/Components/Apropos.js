import React from 'react'
import img1 from "../images/apro-1.png"
import img2 from "../images/apro-2.png"
import img3 from "../images/apro-3.png"
import img4 from "../images/apro-4.png"

export default function Apropos() {
  return (
    <section id='apropos' className='apropos'>
        <h1 className="apropos--title">
          Un <span className="apropos--title--design1">fast-food</span> dynamique et
          <br />de <span className="apropos--title--design2"> Qualité !</span>
        </h1>
        <p className="apropos--text">Nous vous proposons un service traiteur de qualité
           <br /> disponible pour touts vos événements
        </p>
        <div className="apropos--item--wrapper">
                <div className="apropos--item">
                  <img src={img1} alt="" className="apropos--item--image" />
                  <h3 className="apropos--item--title">Variété des Menus</h3>
                  <p className="apropos--item--text">
                    Nous vous proposons une <br />
                    variété de menu<br />
                    gastronomique prête à<br />
                    satisfaire vos attentes.
                  </p>
                </div>

                <div className="apropos--item">
                  <img src={img2} alt="" className="apropos--item--image" />
                  <h3 className="apropos--item--title">Service Professionnel</h3>
                  <p className="apropos--item--text">
                    Nous serveurs sont plus<br />
                    gracieux qu'une arabesque<br />
                    de danse classique
                  </p>
                </div> 

                <div className="apropos--item">
                  <img src={img3} alt="" className="apropos--item--image" />
                  <h3 className="apropos--item--title">Savourez l'Excellence<br />
                    Culinaire
                  </h3>
                  <p className="apropos--item--text">
                    Nous sommes des<br />
                    créateurs d'expériences <br />
                    gastronomique. 
                  </p>
                </div> 

                <div className="apropos--item">
                  <img src={img4} alt="" className="apropos--item--image" />
                  <h3 className="apropos--item--title">Facilité le Booking</h3>
                  <p className="apropos--item--text">
                    Oubliez les tracas de la<br />
                    réservation. Notre Système<br />
                    de booking en ligne est aussi<br />
                    simple qu'un sourire
                  </p>
                </div>      
        </div>
    </section>
  )
}
 