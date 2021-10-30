import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <div className="header">
            <div className="logo">
              <NavLink activeClassName="is-active" to="/" style={{textDecoration:`none`}}>
                     <h3 className="travel" style={{display:`inline`,}}>Travel</h3>
                     <h3 className="safe" style={{display:`inline`}}>Better</h3>
                     <i class="fa fa-plane fa-lg" aria-hidden="true" style={{ color:`green`}}></i>
               </NavLink> 
            </div>
           

            <div className="links">
                <div className="center-links">
                    <ul>
                        <li><NavLink activeClassName="is-active" to="/places"><i class="fa fa-h-square fa-lg" aria-hidden="true" style={{color:`green`}}></i> Places to Stay</NavLink></li>
                        <li><NavLink activeClassName="is-active" to="/experience"> <i class="fa fa-smile-o fa-lg" aria-hidden="true" style={{color:`green`}}></i> Experience</NavLink></li>
                        <li><NavLink activeClassName="is-active" to="/blog"><i class="fa fa-building" aria-hidden="true" style={{color:`green`}}></i> Tourist Centers</NavLink></li>
                    </ul>

                </div>

                <div className="host">
                    <li></li>
                    

                </div>

            </div>
        </div>
    )
}

export default Header;