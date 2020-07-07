/* import React from 'react'
class Info extends React.Component{} */


import React, { Component } from 'react';

import './styles/Info.css';


class Info extends Component {
    render(){
        return (
            <div className="info_container">                 
                <div className="info__section">
                    <h3 className="main__title">Pasemos unos Props y states</h3>
                    <p>{this.props.texto}</p>
                    <hr/>
                    <p>{this.props.description}</p>
                    <hr/>
                    <p>{this.props.otro}</p>
                </div> 
                
            </div>
        )
    }
}

export default Info;