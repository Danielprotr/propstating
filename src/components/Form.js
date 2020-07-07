import React, { Component } from 'react'

import './styles/Form.css'

export class Form extends Component {
    render() {
        return (
            <div className="form__container">
                <h2>New user</h2>

                <form>
                    <div className="form__group">
                        <label >First Name</label>
                        <br/>
                        <input className="form-control" type="text" name="firstName"/>
                        <br/>
                        <button className="form__btn">Save</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default Form
