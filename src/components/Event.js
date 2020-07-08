import React, { Component } from 'react'

import './styles/Event.css'

export class Event extends Component {

    state = {};

    handleChange = e =>{
        /* console.log({
            name: e.target.name,
            value: e.target.value,
        }); */

        this.setState({
            [e.target.name]: e.target.value
        });
    }  

    handleClick = e =>{
        console.log("me diste click!")        
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("form wants to be submitted");
    }

    render() {
        return (
            <div>
                <form 
                    className="test_form"
                    onSubmit={this.handleSubmit}
                    >
                    
                    <h2>Test events</h2>
                    <label 
                        className="test_label" >Test my Input</label>
                    <input 
                        className="test_input" 
                        onChange={this.handleChange}
                        type="text" 
                        name="input 1"
                        value={this.state.input1}
                    />
                    <br/>
                    <input 
                        className="test_input" 
                        onChange={this.handleChange}
                        type="text" 
                        name="input 2"/>
                    <br/>
                        <input 
                        className="test_input" 
                        onChange={this.handleChange}
                        type="text" 
                        name="input 3"/>
                    <button 
                        className="test_btn"
                        /* type="button" */
                        onClick={this.handleClick}
                        >
                        Save me please!
                    </button>
                </form>
            </div>
        )
    }
}

export default Event
