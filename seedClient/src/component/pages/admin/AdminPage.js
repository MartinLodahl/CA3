import React, { Component } from 'react'
import adminData from "../../facades/adminFacade";
import { Link } from "react-router-dom";

class AdminPage extends Component {

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
    }, "api/demoadmin");
  }

  render() {
    return (
      <div>
        <div className="col-sm-1">
          <li><Link to={`/admin/users`}>users</Link></li>
        </div>
        <div className="col-sm-11">
          <h2>Admins</h2>
          <p>This message is fetched from the server if you were properly logged in</p>
          <div className="msgFromServer">
            {this.state.data}
          </div>
          {this.state.err && (
            <div className="alert alert-danger errmsg-left" role="alert">
              {this.state.err}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default AdminPage;