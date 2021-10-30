import React from  "react"


function Process(){
    return(
        <div className="process">
             <div className="h2" style={{marginTop:`1.5%`}}>
                <h2>Our Process</h2>
            </div>

            <div className="main-process">
                <div className="child-process">
                       <i class="fa fa-wpforms fa-3x" aria-hidden="true"></i>
                       <h2>Fill up the form correctly </h2>
                    <p>Correctly fill Up the form indicating the number of adults and children.</p>
                </div>
                <div className="child-process">
                <i class="fa fa-phone fa-3x" aria-hidden="true"></i>  <i class="fa fa-arrow-right fa-2x" aria-hidden="true"></i>   <i class="fa fa-hotel fa-3x"></i>
                    <h2> Book a hotel to stay in</h2>
                    <p>Choose a hotel and call the phone number indicated there to book and make reservations.</p>
                </div>
                
                <div className="child-process">
                <i class="fa fa-comment fa-3x " id="com" ></i> 
                     <h2> Finally,drop a review</h2>
                    <p>You can also choose a tourist center to visit when on your vacation for maximum enjoyment</p>
                </div>

            </div>
        </div>
    )
}

export  default Process