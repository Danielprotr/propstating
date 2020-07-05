import React, { Component } from 'react'

import './styles/Nav.css';
import Logo from './Img/Connect.png'

export class Nav extends Component {

    render() {
        return (
            <div className="Nav__container">
                <div className="Nav__item">
                    <div className="Logo__container">
                        <div className="Logo__item Logo__imagen">
                            <img src={Logo} width="40" height="40" alt="Connect logo"/>
                        </div>
                        <div className="Logo__item Logo__texto">                            
                        </div>
                    </div>                   
                    
                </div>                
                
                <div className="Nav__item Menu-container">
                    <div className="Menu__items">
                        <p>Sign in <strong>|</strong></p>
                    </div>
                    <div className="Menu__items">
                        <p>Sign up <strong>|</strong></p>
                    </div>
                    <div className="Menu__items">
                        <p>Menu</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Nav
