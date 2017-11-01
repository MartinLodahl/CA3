import React, { Component } from 'react';
//import adminData from "../../facades/adminFacade";
import {
  Link,
  Switch,
  Route
} from "react-router-dom";

import AllUsersPage from './subMenu/AllUsersPage';
import Default from './subMenu/Default';

class AdminPage extends Component {

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