import React, { Component } from 'react'
//import adminData from "../../facades/adminFacade";
import {
  Link,
  Switch,
  Route
} from "react-router-dom";
import AllUsersPage from './AllUsersPage';

class AdminPage extends Component {

  render() {
    return (
      <div>
        <div className="col-sm-1">
          <li><Link to={`/admin/users`}>users</Link></li>
        </div>
        <div className="col-sm-11">
          <Switch>
            <Route path='/admin/users' component={AllUsersPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default AdminPage;