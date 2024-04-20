import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hashlink'
import itemImg from "../images/hero--img.png"

export default function ServiceTraiteur() {
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
         <section id='servicetraiteur' className='service--traiteur'>
          <h1 className="service--traiteur--title">
            Le menu <span className="service--traiteur--title--design1">fast-food</span> mais
            <br />en plus <span className="service--traiteur--title--design2"> GRAND !</span>
          </h1>
          <p className="service--traiteur--text">
            CM chicken service traiteur vous donne la possibilit de<br />
            commander tout nos menu des services traiteur en<br />
            grande quantité pour vos événements.
          </p>
          <div className="service--traiteur--item--wrapper">
            <div className="service--traiteur--item--row">
                    <div className="service--traiteur--item">
                        <div className="service--traiteur--item--info">
                              <h3 className="service--traiteur--item--title">
                                Spéciale poulet
                              </h3>
                              <p className="service--traiteur--item--text">
                                Poulet pane, poulet braisé, poulet<br />
                                rôtie, poulet frit.
                              </p>
                              <p className="service--traiteur--item--qty">
                                Quantité min (réservation)
                              </p>
                              <h3 className="service--traiteur--item--units">
                                200 unités
                              </h3>
                              <Link className="service--traiteur--item--cta" to="#reservation" smooth>
                                Reserver &rarr;
                              </Link>  
                          </div>
                          <img src={itemImg} alt="" className="service--traiteur--item--img" />
                    </div>

                    <div className="service--traiteur--item">
                        <div className="service--traiteur--item--info">
                              <h3 className="service--traiteur--item--title">
                                Shawarma Kmer 
                                {/* <span className='shawama'>237</span> */}
                              </h3>
                              <p className="service--traiteur--item--text">
                                Poulet pane, poulet braisé, poulet<br />
                                rôtie, poulet frit.
                              </p>
                              <p className="service--traiteur--item--qty">
                                Quantité min (réservation)
                              </p>
                              <h3 className="service--traiteur--item--units">
                                150 unités
                              </h3>
                              <Link className="service--traiteur--item--cta" to="#reservation" smooth>
                                Reserver &rarr;
                              </Link>  
                          </div>
                          <img src={itemImg} alt="" className="service--traiteur--item--img" />
                    </div>
            </div>
            <div className="service--traiteur--item--row">
                   <div className="service--traiteur--item">
                        <div className="service--traiteur--item--info">
                              <h3 className="service--traiteur--item--title">
                                Burger Mboa
                              </h3>
                              <p className="service--traiteur--item--text">
                                Poulet pane, poulet braisé, poulet<br />
                                rôtie, poulet frit.
                              </p>
                              <p className="service--traiteur--item--qty">
                                Quantité min (réservation)
                              </p>
                              <h3 className="service--traiteur--item--units">
                                250 unités
                              </h3>
                              <Link className="service--traiteur--item--cta" to="#reservation" smooth>
                                Reserver &rarr;
                              </Link>  
                          </div>
                          <img src={itemImg} alt="" className="service--traiteur--item--img" />
                    </div>

                    <div className="service--traiteur--item">
                        <div className="service--traiteur--item--info">
                              <h3 className="service--traiteur--item--title">
                                Spéciale poulet
                              </h3>
                              <p className="service--traiteur--item--text">
                                Poulet pane, poulet braisé, poulet<br />
                                rôtie, poulet frit.
                              </p>
                              <p className="service--traiteur--item--qty">
                                Quantité min (réservation)
                              </p>
                              <h3 className="service--traiteur--item--units">
                                100 unités
                              </h3>
                              <Link className="service--traiteur--item--cta" to="#reservation" smooth>
                                Reserver &rarr;
                              </Link>  
                          </div>
                          <img src={itemImg} alt="" className="service--traiteur--item--img" />
                    </div>
            </div>
          </div>
          <h1>Window width: {window.innerWidth}</h1>
      </section>
    </BrowserRouter>
     
  )
}
