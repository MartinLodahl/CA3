import React, { Component } from 'react'

class Default extends Component {

    constructor() {
        super();
        this.state = { data: "", err: "" }
    }

    render() {
        return (
            <div>
                <h2>User page</h2>
                <p>You can navigate the submenus on the left...</p>
            </div>
        )
    }
}

export default Default;