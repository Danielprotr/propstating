import React, { Component } from 'react'

import Info from '../components/Info';
import './styles/Grid.css';


import Nav from '../components/Nav';


export class Grid extends Component {
    render() {
        return (
            <div className="Grid__page-container">                
                <div className="Grid__main-container">
                    <div className="Grid__item">
                        <Info 
                            texto="UNO"
                            description="Descrip 1"
                            otro="quien dijo yo"
                            />                                 
                    </div>
                    <div className="Grid__item">
                        <Info 
                            texto="DOS"
                            description="Descrip 2"
                            otro="quien dijo yo"
                            />                                 
                    </div>               
                    <div className="Grid__item">
                        <Info 
                            texto="TRES"
                            description="Descrip 3"
                            otro="quien dijo yo"
                            />                                 
                    </div>                      
                    
                </div>
            </div>
        )
    }
}

export default Grid
