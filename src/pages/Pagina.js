import React, { Component } from 'react'

import Grid from '../components/Grid'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Sidenav from '../components/Sidenav'
import Search from '../components/Search'
/*import Selector from '../components/Selector'  */
import Event from '../components/Event'
import Conj from '../components/Conj'

import './styles/Pagina.css';

export class Pagina extends Component {

    state = {
        data: [
            {
              id:"2de30c42-9deb-40fc-a41f-05e62b5939a7",
              irstName:"Freda",
              lastName:"Grady",
              email:"Leann_Berge@gmail.com",
              jobTitle:"Legacy Brand Director",
              twitter:"FredaGrady22221-7573",
              avatarUrl:"https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
            },
            {
              id:"d00d3614-101a-44ca-b6c2-0be075aeed3d",
              firstName:"Major",
              lastName:"Rodriguez",
              email:"Ilene66@hotmail.com",
              jobTitle:"Human Research Architect",
              twitter:"ajorRodriguez61545",
              avatarUrl:"https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
            },
            {
              id:"63c03386-33a2-4512-9ac1-354ad7bec5e9",
              firstName:"Daphney",
              lastName:"Torphy",
              email:"Ron61@hotmail.com",
              jobTitle:"National Markets Officer",
              twitter:"DaphneyTorphy96105",
              avatarUrl:"https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
            }
          ]
    }

    render() {
        return (        
            <div className="Page_layout">
                <div className="Page__Nav">
                        <Nav />
                </div>
                <ul className="list-unstyled">
                    
                </ul>
                <br/>

                <div className="Page__Conj">
                    <Conj />
                </div>

                <br/>

                <div className="Page__Search">
                    <Search />
                    
                </div>

                {/* <div className="Page__Selector">
                    <Selector />
                </div>  */}               
                
                <br/>

                <div className="Page__layout-center">
                    <div className="Pagina__Container">                         

                        <div className="Pagina__item">
                            <Event />
                            <br/>

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
