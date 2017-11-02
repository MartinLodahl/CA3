import React, { Component } from 'react'

class EditUser extends Component {

    constructor(props) {
        super();
        this.state = { user: props.user }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({ user: nextProps.user });
    }

    render() {
        return (
            <div>
                {this.state.user ? (
                    <div>
                        <h2>Selected user {this.state.user}</h2>
                        <h4>Change users password</h4>
                        <input type="text" id="cPass1" placeholder="password 1" />
                        <p />
                        <input type="text" id="cPass2" placeholder="password 2" />
                    </div>
                ) : (
                        <div>
                            <h2>User management</h2>
                            <p>Here you can edit the information about certain users. Click on the username on the left</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default EditUser;