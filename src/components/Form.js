import React, { Component } from 'react'

import './styles/Form.css'

export class Form extends Component {    

    handleClick = (e) =>{
        console.log("le diste al boton");
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form want to be submitted");
    };


    render() {
        return (
            <div className="form__container">
                <h2>New user</h2>

                <form onSubmit={this.handleSubmit}>

                    <div className="form__group">
                        <label >First Name</label>
                        <br/>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.props.formValues.firstName}
                        />
                    </div> 

                    <div className="form__group">
                        <label >Last Name</label>
                        <br/>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                    </div> 

                    <div className="form__group">
                        <label >Email</label>
                        <br/>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={this.props.formValues.email}
                        />

                    </div> 
                    
                    <div className="form__group">
                        <label >Job Title</label>
                        <br/>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                        />
                    </div> 

                    
                    <div className="form__group">
                        <label >Twitter</label>
                        <br/>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control" 
                            type="text" 
                            name="Twitter"
                            value={this.props.formValues.Twitter}
                        />
                    </div> 


                    <button onClick={this.handleClick} className="form__btn">
                        Save
                    </button>
                    
                </form>

            </div>
        )
    }
}

export default Form
