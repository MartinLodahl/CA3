import React, { Component } from 'react'
import adminData from "../../../facades/adminFacade";

class AddHouse extends Component {

    constructor() {
        super();
        this.state = { data: "", err: "" }
    }

    render() {
        return (
            <div>
                <h2>House management</h2>
                <p>Here you can add new houses that customers can rent</p>
                
            </div>
        )
    }
}

export default AddHouse;