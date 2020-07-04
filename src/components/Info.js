/* import React from 'react'
class Info extends React.Component{} */


import React, { Component } from 'react';

class Info extends Component {
    render(){
        return (
            <div>
                <p>{this.props.texto}</p>
                <hr/>
                <p>{this.props.description}</p>
                <hr/>
                <p>{this.props.otro}</p>
            </div>
        )
    }
}

export default Info;