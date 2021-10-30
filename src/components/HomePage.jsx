import React from 'react';
import Header from './Header';
import background from '../img/firstimg.jpg';
import rico from '../img/rico.jpeg'
import dancing from '../img/dancing.jpeg'
import  exotic2 from '../img/exotic2.jpeg'
import { Services } from './Services';
import Process from './Process'
import Converter from './Converter';

function HomePage(){
    return(
      <div className="home">
           <div className="first" style={{ backgroundImage: `url(${background})`, backgroundSize:`100% 100%`}}>
             <Header/>

             <div className="first-main">

                 <div className="form">
                     <div className="label-1">
                     <label><strong>Full Name</strong></label>
                     </div>

                     <div className="main-input">
                         <div className="input">
                              <input type="text"/>
                              <p>First Name</p>
                           </div>
                        
                         <div className="input lastname">
                             <input type="text" />
                             <p>Last Name</p>
                           </div>
                     </div>

                     <div className="label-2">
                         <label>E-mail</label><br/>
                         <input type="text/email" placeholder="peter23@gmail.com"/>
                     </div>

                     <div className="label-3">
                         <label>Phone Number</label><br/>
                         <input type="number"/>
                     </div>

                     <div className="people">
                         <div>
                            <label>No of Adults</label><br/>
                            <input type="text"/>
                         </div>

                         <div className="children">
                            <label>No of Children(if there are any)</label><br/>
                            <input type="text"/>
                         </div>
                     </div>

                       <div className="register">
                           <button>Submit</button>
                       </div>
                           
                       
                  </div>

                    <div className="welcome-msg">
                        <h1>Vacation made easy.</h1>
                        <h3>At Cheap and Affordable rates.</h3>
                        <h3>Beautiful places in Nigeria.</h3>
                        <h3><ul>See Places</ul></h3>
                    </div>

             </div>

            </div>

            <div className="services">
               <h1>Our Services</h1>
               <div className="services-main">
                   {Services.map((service, key) =>{
                       return(          
<div class="card" style={{width:`36rem`, padding:`4px`}} key={key}>
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
       <img src={service.image} class="d-block w-100" alt="..." style={{height:`60vh`, maxWidth:`98%`,margin:`auto` }}/>
     </div>
</div>

</div>
  <div class="card-body">
      <p class="card-title"><strong>{service.topic}</strong></p>
      <p class="card-text">{service.description}</p>
      <p class="card-text">{service.rating}</p>
  </div>
</div>
                       )
                   }
                   )}
               </div>
            </div>

            <div className="h2" style={{marginTop:`3%`}}><h2>Exotic Locations</h2></div>
           <div className="big-card" style={{marginTop:`2%`}}>
              <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                 <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img src={rico} class="d-block w-100" alt="rico" style={{width:`90%`, height:`90vh`}}/>
                  </div>
                  <div class="carousel-item">
                    <img src={dancing} class="d-block w-100" alt="dancing" style={{width:`90%`, height:`90vh`}}/>
                  </div>
                   <div class="carousel-item">
                       <img src={exotic2} class="d-block w-100" alt="exotic2" style={{width:`90%`, height:`90vh`}}/>
                    </div>
                  </div>
              </div>
              
            </div>

           <div>
               <Process/>
           </div>

           <div>
              <Converter/>
           </div>
        </div>
    )
}

export default HomePage