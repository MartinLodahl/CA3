import React, { Component } from 'react'
import adminData from "../../../facades/adminFacade";

class NotFound extends Component {

    constructor() {
        super();
        this.state = { data: "", err: "" }
    }

    render() {
        return (
            <div className="text-center">
                <h1>404</h1>
                <h2>Page doesnt exist!</h2>
                <h2>Please select a valid option on the left!</h2>
            </div>
        )
    }
}

export default NotFound;