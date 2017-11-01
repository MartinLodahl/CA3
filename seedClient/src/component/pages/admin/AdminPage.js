import React, { Component } from 'react'
import adminData from "../../facades/adminFacade";
import {
  Link,
  Switch,
  Route
} from "react-router-dom";

import AllUsersPage from './subMenu/AllUsersPage';
import Default from './subMenu/Default';

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
        <div className="col-sm-2">
          <div className="navbar-collapse collapse sidebar-navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to={`/admin/users`}>users</Link></li>
              <li><Link to={`/admin/other`}>others</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-10">
          <Switch>
            <Route path='/admin/users' component={AllUsersPage} />
            <Route path='/admin/other' component={Default} />
            {/*Must be the lowest point!*/}
            <Route path='/' component={Default} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default AdminPage;