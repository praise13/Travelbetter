import React from "react";
import exp3 from "../img/exp3.jpg"

function Exp(){
    return(
        <div className="exp1">
            <div className="exp2">
                <img src={exp3} style={{width:`90%`,borderRadius:`10px`, height:`70vh`}}/>
                <h4>You can leave a comment on how our services have been of help to you.<i class="fa fa-comment " ></i> </h4>
            </div>

        </div>
    )
}

export default Exp;