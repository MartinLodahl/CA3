import React, { Component } from 'react'

class EditHouse extends Component {

    constructor() {
        super();
        this.state = { data: "", err: "" }
    }

    render() {
        return (
            <div>
                <h2>House management</h2>
                <p>Here you can edit the information about houses</p>
                <input type='number' name='houseID' />
            </div>
        )
    }
}

export default EditHouse;