import React, { Component } from 'react'

import Grid from '../components/Grid'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Sidenav from '../components/Sidenav'
import Search from '../components/Search'
import Selector from '../components/Selector'

import './styles/Pagina.css';

export class Pagina extends Component {
    render() {
        return (        
            <div className="Page_layout">
                <div className="Page__Nav">
                        <Nav />
                </div>

                <br/>

                <div className="Page__Search">
                    <Search />
                </div>

                <div className="Page__Selector">
                    <Selector />
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

                <div className="Page__Footer">
                        <Footer />
                </div>
                
            </div>             
        )
    }
}

export default Pagina
