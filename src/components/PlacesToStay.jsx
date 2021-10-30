import React from 'react';
import Exp from './Exp';
import Header from './Header';
import { Places } from './Places';

function PlacesToStay(){
    return(
        <div className="places">
            <div className="head">
                <Header/>
            </div>

            <div style={{width:`91.7%`, margin:`auto`}}>
                <h2 style={{display:`inline`}}>Places to stay</h2> <i class="fa fa-h-square fa-2x" style={{color:`green`}} aria-hidden="true"></i>
            </div>

            <div className="places-body">
                {Places.map((place, key) =>{
                    return(
                        <div class="card" style={{width:`35rem`, padding:`10px`}} key={key}>
                          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                 <img src={place.img_1} class="d-block w-100" alt="..." style={{height:`70vh`}}/>
                               </div>
                              <div class="carousel-item">
                                   <img src={place.img_2} class="d-block w-100" alt="..." style={{height:`70vh`}}/>
                               </div>
                              <div class="carousel-item">
                                 <img src={place.img_3} class="d-block w-100" alt="..." style={{height:`70vh`}}/>
                               </div>
                          </div>
        
                          </div>
                            <div class="card-body">
                                <h4 class="card-title">{place.place_name}</h4>
                                <p class="card-text">{place.description}</p>
                                <p class="card-text">{place.location}</p>
                                <p class="card-text">{place.ratings}</p>
                                <p class="card-text"> {place.phone}</p>
                            </div>
                        </div>
                    )
                }
                )}
                 
            </div>
                
        </div>
    )
}

export default PlacesToStay;