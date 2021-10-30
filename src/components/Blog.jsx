import React from 'react';
import Header from './Header';
import { Tourists } from "./Tourists";

function Blog(){
    return(
        <div className="blog">
            <Header/>

            <div style={{width:`91.7%`, margin:`auto`}}>
                <h2 style={{display:`inline`}}>Tourist Centers</h2> <i class="fa fa-building fa-2x" style={{color:`green`}} aria-hidden="true"></i>
            </div>

            <div className="places-body">
                {Tourists.map((tourists, key) =>{
                    return(
                        <div class="card" style={{width:`35rem`, padding:`10px`}} key={key}>
                          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                 <img src={tourists.img_1} class="d-block w-100" alt="..." style={{height:`70vh`}}/>
                               </div>
                              <div class="carousel-item">
                                   <img src={tourists.img_2} class="d-block w-100" alt="..." style={{height:`70vh`}}/>
                               </div>
                              <div class="carousel-item">
                                 <img src={tourists.img_3} class="d-block w-100" alt="..." style={{height:`70vh`}}/>
                               </div>
                          </div>
        
                          </div>
                            <div class="card-body">
                                <h4 class="card-title">{tourists.place_name}</h4>
                                <p class="card-text">{tourists.description}</p>
                                <p class="card-text">{tourists.location}</p>
                                <p class="card-text">{tourists.phone}</p>
                            </div>
                        </div>
                    )
                }
                )}
                 
            </div>
             
        </div>
    )
}

export default Blog;