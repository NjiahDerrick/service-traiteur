import React from 'react'
import Img1 from "../images/reservation--img1.png"
import Img2 from "../images/reservation--img2.png"

export default function Reservation() {
        const [formData, setFormData] = React.useState(
          {
              fullname: "", 
              phone: "", 
              email: "", 
              event: "",
              location: "",
              description: ""
          }
      ) 
      
      function handleChange(event){
        /*the first constant not used because there is no radio input type. 
        so we don't need to specify type inorder to chose btn checked and value.
        const {name, value, type, checked} = event.target
        */
        const {name, value} = event.target
        setFormData({
          ...formData,
          [name]: value,
      });  
    }

    function handleSubmit(event){
      event.preventDefault() // this prevents the default value from been submitted.
      console.log(formData)
      setFormData({
        fullname: "", 
        phone: "", 
        email: "", 
        event: "",
        location: "",
        description: ""
      })

  }

  return (
    <section id='reservation' className='reservation'>
      <div className="reservation--info">
        <h1 className="reservation--info--title">
          Vous <span className="reservation--info--title--design1">Réserver</span> et nous<br />
          nous occupons de <span className="reservation--info--title--design2">Tout !</span>
        </h1>
        <p className="reservation--info--text">
          Remplisser notre formulaire de réservation, et<br />
          notre équipe vous contactera pour une prise en<br />
          charge rapide pour vos besoins.

        </p>
        <div className="reservation--info--imgs">
          <img src={Img1} alt="" className="reservation--img1" />
          <img src={Img2} alt="" className="reservation--img2" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="reservation--form">
         <div>
            <label htmlFor="fullname" className="fullname--label">Nom complet</label>
            <input 
                type="text" 
                className="fullname" 
                placeholder='Entrer votre nom complet'
                id='fullname' 
                name='fullname'
                autoFocus={true}
                onChange={handleChange}
                value={formData.fullname} 
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
                  onChange={handleChange}
                  value={formData.phone} 
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
                  onChange={handleChange}
                  value={formData.email} 
              />
         </div>
          <div>
              <label htmlFor="event" className="event--label">Type d'événement</label>
              <select 
                    name="event" 
                    id="event"
                    value={formData.event}
                    onChange={handleChange}
              >  
                    <option disabled value="">-- Sélectionner le type d'événement --</option>
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
                  id='location' 
                  name='location'
                  onChange={handleChange}
                  value={formData.location} 
              />
          </div>
          <div>
                <label htmlFor="description" className="description--label">Description</label>
                <textarea 
                      placeholder='Dit nous plus sur votre événement '
                      name='description'
                      className='description'
                      id='description'
                      onChange={handleChange}
                      value={formData.description}
                />
          </div>
          <button className='reservation--btn'>Réserver</button>
      </form>
    </section>
  )
}
