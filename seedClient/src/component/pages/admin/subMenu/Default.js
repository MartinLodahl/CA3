import React, { Component } from 'react'
import adminData from "../../../facades/adminFacade";

class Default extends Component {

    constructor() {
        super();
        this.state = { data: "", err: "" }
    }

    componentWillMount() {
        /*
        This will fetch data each time you navigate to this route
        If only required once, add "logic" to determine when data should be "refetched"
        */
        adminData.getData((e, data) => {
            if (e) {
                return this.setState({ err: e.err })
            }
            this.setState({ err: "", data });
        }, "api/listusers");
    }

    render() {
        return (
            <div>
                <h2>Admins page</h2>
                <p>You can navigate the submenus on the left...</p>
            </div>
        )
    }
}

export default Default;