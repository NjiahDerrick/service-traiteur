import React from 'react'
// import galeryImg from '../images/galery-img.png'
import ImageSlider from "./ImageSlider";


export default function Menu() {
     
          const slides = [
            { url: "http://localhost:3000/image-1.jpg", title: "beach" },
            { url: "http://localhost:3000/image-2.jpg", title: "boat" },
            { url: "http://localhost:3000/image-3.jpg", title: "forest" },
            { url: "http://localhost:3000/image-4.jpg", title: "city" },
            { url: "http://localhost:3000/image-5.jpg", title: "italy" },
          ];

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
          {/* <img src={galeryImg} alt="" className='galery-img' /> */}
           
          {/* <div style={containerStyles} >
            <ImageSlider slides={slides} />
          </div> */}
          <div className='galery-img'>
            <ImageSlider slides={slides} />
          </div>
          
      </section>  
    
  )
}
