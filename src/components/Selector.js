import React, { Component } from 'react'

import './styles/Selector.css'

export class Selector extends Component {
    render() {
        return (
            <div>
                <div className="sel-container"> 
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                   
                    <div className="sel">
                        <div className="sel__item">uno</div>
                        <div className="sel__item">dos</div>
                        <div className="sel__item">tres</div>
                        <div className="sel__item">cuatro</div>                                      
                    </div>

                    
                    {/* <div className="sel__arrow-right">
                            &#8592;    
                    </div> 
                    <div className="sel__arrow-left">
                            &#8594;    
                    </div>  */}
                </div>
            </div>
        )
    }
}

export default Selector
