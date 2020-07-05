import React, { Component } from 'react'

import Grid from '../components/Grid';
import Nav from '../components/Nav';
import Sidenav from '../components/Sidenav';

import './styles/Pagina.css';

export class Pagina extends Component {
    render() {
        return (        
            <div className="Page_layout">
                <div className="Page__Nav">
                        <Nav />
                </div>

                <br/>
                
                <div className="Page__layout-center">
                    <div className="Pagina__Container"> 
                        <div className="Pagina__item">
                            <Grid />
                        </div>
                        <div className="Pagina__item">
                            <Sidenav /> 
                        </div>
                    </div>
                </div>
                
            </div>             
        )
    }
}

export default Pagina
