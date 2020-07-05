import React, { Component } from 'react'

import './styles/Nav.css';

export class Nav extends Component {
    render() {
        return (
            <div className="Nav__container">
                <div className="Nav__item Logo-container">
                    <div>
                        <p>Logo</p>
                    </div>
                </div>                
                
                <div className="Nav__item Menu-container">
                    <div className="Menu__items">
                        <p>Sign in</p>
                    </div>
                    <div className="Menu__items">
                        <p>Sign up</p>
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
