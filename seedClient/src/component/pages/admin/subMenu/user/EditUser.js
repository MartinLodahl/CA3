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
                <div>
                    <h2>User management</h2>
                    <p>Here you can edit the information about certain users. Click on the username on the left</p>
                </div>
                <div>
                    {/* Some kind of text box here to edit user information */}
                    <h1>**Under development**</h1>
                    <h2>Selected user {/* username insert here*/} undefined</h2>
                </div>
            </div>
        )
    }
}

export default EditUser;