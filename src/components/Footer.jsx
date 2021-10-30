import React from 'react';

function Footer(){
    return(
        <div className="footer">
           <footer class="bg-light text-center text-lg-start">
              <div class="text-center p-3">
                 <ul class="text-dark">Copyright: TravelBetter.com</ul>

                 <div className="footer-1">
                  <div className="foot">
                      <p>Contacts: 09050573471, 08183703696</p>
                  </div>

                  <div className="foot">
                      <p>E-mail-Address: ptobe58@gmail.com</p>
                  </div>
              </div>

              <div className="mission">
                  <h3>Our Mission</h3>
                  <p>Our mission here is to provide a facility to people that are looking to have a vacation in Nigeria at very cheap and affordable rates, and we have also made this website in a very simply format that is very easy to use.</p>
                  <p>We are also trying to make alot of provide you with the best services i.e some of the best hotels and tourist centers have been made available for selection.</p>
              </div>

              <div className="icons">
                 <i class="fa fa-facebook-f fa-2x"></i>
                 <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                 <i class="fa fa-twitter fa-2x"></i>
              </div>
              </div>
         </footer>
        </div>
    )
}

export default Footer;