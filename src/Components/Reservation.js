import React from 'react'
import Img1 from "../images/reservation--img1.png"
import Img2 from "../images/reservation--img2.png"
import Img3 from "../images/toast=reservation valider.png"
import Img4 from "../images/toast=reservation echec.png"


export default function Reservation() {
        const [success, setSuccess] = React.useState(false)
        const [failure, setFailure] = React.useState(false)
        const [status, setStatus] = React.useState("idle")

        const [formData, setFormData] = React.useState(
          {
              name: "", 
              phone: "", 
              email: "", 
              eventType: "",
              eventDate: "",
              localisation: "",
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


// 'https://cmchicken-backend.onrender.com/api/public/reservation/add'
      
        async function handleSubmit(event){
          event.preventDefault()
          setStatus("submitting")
                try {
                  const res = await fetch('http://localhost:8000/data' , {
                      method:'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(formData)
                  });

                  if(!res.ok){
                      console.log('error message')
                      return;
                  }
                  
                  setSuccess(prevSuc => !prevSuc)
                  setStatus("idle")
              
                  setTimeout(()=>{
                    setSuccess(prevSuc => !prevSuc)
                  }, 5000);
                  
              } catch (error) {
                  console.log('cannot submit form');
                  setFailure(prevFail => !prevFail)
                  setStatus("idle")
                  
                  setTimeout(()=>{
                    setFailure(prevFail => !prevFail)  
                  }, 5000);
                  
              }
              setFormData({
                      name: "", 
                      phone: "", 
                      email: "", 
                      eventType: "",
                      eventDate: "",
                      localisation: "",
                      description: ""
                    })
                    
          }

          const Styles ={
            width: "24.5em",
            lineHeight: "10px",
            height: "3em" ,
            color: "#888888",
            fontSize:  ".9em"  
          }
          const Styles2 ={
            width: "24em",
            lineHeight: "8px",
            height: "3.5em"   
          }
        
    

  return (
    <>
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
                name='name'
                autoFocus={true}
                onChange={handleChange}
                value={formData.name}
                required 
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
                  required  
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
                  required  
              />
         </div>
          <div>
              <label htmlFor="event" className="event--label">Type d'événement</label>
              <select 
                    style={Styles2}
                    name="eventType" 
                    id="event"
                    value={formData.eventType}
                    onChange={handleChange}
                    required 
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
              <label htmlFor="date" className="date--label">Date d'événement</label>
              <input 
                  style={Styles}
                  type="date" 
                  className="eventDate" 
                  placeholder="Date de l'événement"
                  id='date' 
                  name='eventDate'
                  onChange={handleChange}
                  value={formData.eventDate}
                  required  
              />
          </div>
          <div>
              <label htmlFor="location" className="location--label">Localisation</label>
              <input 
                  type="text" 
                  className="location" 
                  placeholder="Emplacement de l'événement"
                  id='location' 
                  name='localisation'
                  onChange={handleChange}
                  value={formData.localisation}
                  required  
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
                      required 
                />
          </div>
          <button 
              className='reservation--btn'
              disabled={status === "submitting"}
          >
            {status === "submitting"
                ? "En Cours..."
                : "Réserver"
              }
          </button>
      </form>
     
    </section>
     <div className="reservation--toast">
     {success && <img src={Img3} alt="" className="toast--valider" />}
     {failure && <img src={Img4} alt="" className="toast--echec" />}
   </div>
   </>
  )
}
