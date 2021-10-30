import React from "react"
import Header from "./Header";
import { Experiences } from "./Experiences";
import bon1 from "../img/bon1.jpeg"
import exp2 from "../img/exp2.jpg"
import Exp from "./Exp";


function Experience(){
    return(
        <div className="main-experience">
            <div className="exp-head">
                 <Header/>
            </div>

            <div>
                <Exp/>
            </div>

            <div className="exp-body">
                {Experiences.map((experience, key) =>{
                    return(
                        <div class="card" style={{width:`33rem`, marginRight:`30px`, padding:`10px`}} key={key}>
                          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                 <img src={experience.img} class="d-block w-100" alt="..." style={{height:`40vh`, maxWidth:`95%`, margin:`auto`, borderRadius:`10px`}}/>
                               </div>
                          </div>
        
                          </div>
                            <div class="card-body">
                                <p class="card-title"><strong>{experience.name}</strong></p>
                                <p class="card-text">{experience.description}</p>
                                <p class="card-text">{experience.location}</p>
                                <p class="card-text">{experience.ratings}</p>
                            </div>
                        </div>
                    )
                }
                )}
                 
            </div>

            
               <div className="second-exp">
                  <div class="card" style={{width:`33rem`, marginLeft:`5%`, padding:`10px` }}>
                     <img src={bon1} class="card-img-top" style={{maxWidth:`95%`, margin:`auto`, height:`40vh` , borderRadius:`10px`}}/>
                       <div class="card-body">
                           <input placeholder="Name"  className="name"/><br/>
                           <input placeholder="comment"  className="comment"/><br/>
                           <input placeholder="location"  className="location"/>
                     </div>
                  </div>

                </div>

        </div>
    )
}

export default Experience;