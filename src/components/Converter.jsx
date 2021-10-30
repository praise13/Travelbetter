import React from "react";

function Converter(){
    return(
        <div className="main-converter">
            <div className="sub-converter1">
                <h2>Are you looking on how to convert your currency? </h2>
                <h4>Here you can convert from which ever currency to naira. <i class="fa fa-money " ></i></h4>
            </div>

            <div className="sub-converter2">
               <iframe src="https://www.xe.com/currencyconverter/"></iframe>
            </div>
            

        </div>
    )
}

export default Converter;