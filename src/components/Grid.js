import React, { Component } from 'react'

import Info from '../components/Info';
import './styles/Grid.css';


import Nav from '../components/Nav';

import Selector from './Selector'

export class Grid extends Component {
    render() {
        return (
            <div className="Grid__page-container">                
                <div className="Grid__main-container">
                    <div className="Grid__item">
                        <Info 
                            texto="Information"
                            description="Card 1"
                            otro="quien dijo yo"
                            /> 
                         <Selector />                               
                    </div>
                    <br/>
                    <div className="Grid__item">
                        <Info 
                            texto="DOS"
                            description="Card 2"
                            otro="quien dijo yo"
                            />                                 
                    </div>   
                    <br/>            
                    <div className="Grid__item">
                        <Info 
                            texto="TRES"
                            description="Card 3"
                            otro="quien dijo yo"
                            />                                 
                    </div>                      
                    
                </div>
            </div>
        )
    }
}

export default Grid
