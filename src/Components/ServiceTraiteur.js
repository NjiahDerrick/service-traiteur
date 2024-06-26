import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hashlink'
import quater from "../images/quater.png"
import half from "../images/half.png"
import full from "../images/full.png"

export default function ServiceTraiteur() {

  return (
    <BrowserRouter>
         <section id='servicetraiteur' className='service--traiteur'>
          <h1 className="service--traiteur--title">
            Le menu <span className="service--traiteur--title--design1">fast-food</span> mais
            <br />en plus <span className="service--traiteur--title--design2"> GRAND !</span>
          </h1>
          <p className="service--traiteur--text">
            CM chicken service traiteur vous donne la possibilite de<br />
            commander touts nos menus de service traiteur en<br />
            grande quantité pour vos événements.
          </p>
          <div className="service--traiteur--item--wrapper">
            <div className="service--traiteur--item--row">
                    <div className="service--traiteur--item">
                        <div className="service--traiteur--item--info">
                              <h3 className="service--traiteur--item--title">
                                Quart de Poulet
                              </h3>
                              <p className="service--traiteur--item--text">
                                 Accompagnements au choix: pommes ou plaintains.
                              </p>
                              <p className="service--traiteur--item--qty">
                                Quantité min (réservation)
                              </p>
                              <h3 className="service--traiteur--item--units">
                                200 unités
                              </h3>
                              <Link className="service--traiteur--item--cta" to="#reservation" smooth="true">
                                Reserver &rarr;
                              </Link>  
                          </div>
                          <img src={quater} alt="" className="service--traiteur--item--img" />
                    </div>

                    <div className="service--traiteur--item">
                        <div className="service--traiteur--item--info">
                              <h3 className="service--traiteur--item--title">
                                Demi Poulet
                                {/* <span className='shawama'>237</span> */}
                              </h3>
                              <p className="service--traiteur--item--text">
                                Accompagnements au choix: pommes ou plaintains.
                              </p>
                              <p className="service--traiteur--item--qty">
                                Quantité min (réservation)
                              </p>
                              <h3 className="service--traiteur--item--units">
                                150 unités
                              </h3>
                              <Link className="service--traiteur--item--cta" to="#reservation" smooth="true">
                                Reserver &rarr;
                              </Link>  
                          </div>
                          <img src={half} alt="" className="service--traiteur--item--img" />
                    </div>
            </div>
            <div className="service--traiteur--item--row">
                   <div className="service--traiteur--item">
                        <div className="service--traiteur--item--info">
                              <h3 className="service--traiteur--item--title">
                                Demi Poulet
                              </h3>
                              <p className="service--traiteur--item--text">
                                 Accompagnements au choix: pommes ou plaintains.
                              </p>
                              <p className="service--traiteur--item--qty">
                                Quantité min (réservation)
                              </p>
                              <h3 className="service--traiteur--item--units">
                                250 unités
                              </h3>
                              <Link className="service--traiteur--item--cta" to="#reservation" smooth="true">
                                Reserver &rarr;
                              </Link>  
                          </div>
                          <img src={half} alt="" className="service--traiteur--item--img" />
                    </div>

                    <div className="service--traiteur--item">
                        <div className="service--traiteur--item--info">
                              <h3 className="service--traiteur--item--title">
                                Poulet Entier
                              </h3>
                              <p className="service--traiteur--item--text">
                                Accompagnements au choix: pommes ou plaintains.
                              </p>
                              <p className="service--traiteur--item--qty">
                                Quantité min (réservation)
                              </p>
                              <h3 className="service--traiteur--item--units">
                                100 unités
                              </h3>
                              <Link className="service--traiteur--item--cta" to="#reservation" smooth="true">
                                Reserver &rarr;
                              </Link>  
                          </div>
                          <img src={full} alt="" className="service--traiteur--item--img" />
                    </div>
            </div>
          </div>
      </section>
    </BrowserRouter>
     
  )
}
