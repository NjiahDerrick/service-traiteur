import React from 'react'
import galeryImg from "../images/galery-img.png"

export default function Menu() {
  return (
    <section id='menu' className='galery container'>
           <h1 className="galery--title">
             Un événement avec<br />
             <span className="galery--title--design1">traiteur</span> c'est un<br />
             événement <span className="galery--title--design2"> Réussi !</span>
          </h1>
          <p className="service--traiteur--text">
            Nous vous garantissons un événement réussi grâce a<br />
            notre service de qualité fait par des mains d'experts.
          </p>
          <img src={galeryImg} alt="" className='galery-img' />
    </section>
  )
}
