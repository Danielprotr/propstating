/* import React from 'react'
class Info extends React.Component{} */


import React, { Component } from 'react';

import './styles/Info.css';

class Info extends Component {
    render(){
        return (
            <div className="info_container">                 
                <h1>Pasemos unos Props y states</h1>
                <p>{this.props.texto}</p>
                <hr/>
                <p>{this.props.description}</p>
                <hr/>
                <p>{this.props.otro}</p>
                <div className="sel">
                    <div className="sel__item">uno</div>
                    <div className="sel__item">uno</div>
                    <div className="sel__item">uno</div>
                    <div className="sel__item">uno</div>                    
                </div>
                <br/>
            </div>
        )
    }
}

export default Info;