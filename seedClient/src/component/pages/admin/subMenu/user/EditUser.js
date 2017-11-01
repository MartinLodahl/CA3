import React, { Component } from 'react'
import adminData from "../../../../facades/adminFacade";

class EditUser extends Component {

    constructor() {
        super();
        this.state = { data: "", err: "" }
    }

    render() {
        return (
            <div>
                <h2>User management</h2>
                <p>Here you can edit the information about certain users</p>
                <input type='number' name='houseID'/>
            </div>
        )
    }
}

export default EditUser;