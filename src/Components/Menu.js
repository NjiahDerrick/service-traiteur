import React from 'react'
import ImageSlider from "./ImageSlider";
import data from './slider-data';


export default function Menu() {
          // const containerStyles = {
          //   width: "500px",
          //   height: "280px",
          //   margin: "0 auto",
          // };
  return (
      <section id='menu' className='galery'>
           <h1 className="galery--title">
             Un événement avec<br />
             <span className="galery--title--design1">traiteur</span> c'est un<br />
             événement <span className="galery--title--design2"> Réussi !</span>
          </h1>
          <p className="service--traiteur--text">
            Nous vous garantissons un événement réussi grâce a<br />
            notre service de qualité fait par des mains d'experts.
          </p>
           
          {/* <div style={containerStyles} >
            <ImageSlider slides={slides} />
          </div> */}
          <div className='galery-img'>
            <ImageSlider data={data} />
          </div>
          
      </section>  
    
  )
}
