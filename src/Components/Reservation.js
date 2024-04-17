import React from 'react'
import Img1 from "../images/reservation--img1.png"
import Img2 from "../images/reservation--img2.png"

export default function Reservation() {
  return (
    <section id='reservation' className='reservation container'>
      <div className="reservation--info">
        <h1 className="reservation--info--title">
          Vous <span className="reservation--info--title--design1">Réserver</span> et nous<br />
          nous occupons de <span className="reservation--info--title--design2">Tout !</span>
        </h1>
        <p className="reservation--info--text">
          Remplisser notre formulaire de réservation, et<br />
          notre équipe vous contactera pour une prise en<br />
          charge rapide sur vos besoins.

        </p>
        <div className="reservation--info--imgs">
          <img src={Img1} alt="" className="reservation--img1" />
          <img src={Img2} alt="" className="reservation--img2" />
        </div>
      </div>
      <form  className="reservation--form">
         <div>
            <label htmlFor="fullname" className="fullname--label">Nom complet</label>
            <input 
                type="text" 
                className="fullname" 
                placeholder='Entrer votre nom complet'
                id='fullname' 
                name='fullname'
                autoFocus={true} 
            />
         </div>
         <div>
              <label htmlFor="tel" className="tel--label">Tel</label>
              <input 
                  type="tel" 
                  className="phone" 
                  placeholder='Entrer votre numéro de téléphone'
                  id='phone' 
                  name='phone' 
              />
         </div>
     
         <div>
              <label htmlFor="email" className="email--label">Email</label>
              <input 
                  type="email" 
                  className="email" 
                  placeholder='Entrer une email valide'
                  id='email' 
                  name='email' 
              />
         </div>
          <div>
              <label htmlFor="event" className="event--label">Type d'événement</label>
              <select 
                    name="event" 
                    id="event"
                    // value={formData.favColor}
                    // onChange={handleChange}
              >  
                    <option value="">-- Sélectionner le type d'événement --</option>
                    <option value="marriage">Mariage</option>
                    <option value="birthday">Anniversaire</option>
                    <option value="baptism">Baptême</option>
                    <option value="funeral">Funéral</option>
                    <option value="others">Autre</option>
              </select>
          </div>
          <div>
              <label htmlFor="location" className="location--label">Localisation</label>
              <input 
                  type="text" 
                  className="location" 
                  placeholder="Emplacement de l'événement"
                  id='event' 
                  name='event' 
              />
          </div>
          <div>
                <label htmlFor="description" className="description--label">Description</label>
                <textarea 
                      placeholder='Dit nous plus sur votre événement '
                      name='description'
                      className='description'
                      id='description'
                      // onChange={handleChange}
                      // value={formData.comments}
                />
          </div>
          <button className='reservation--btn'>Réserver</button>
      </form>
    </section>
  )
}
