import React, { Component } from 'react';
//import adminData from "../../facades/adminFacade";
import {
  Link,
  Switch,
  Route
} from "react-router-dom";

import AllUsersPage from './subMenu/AllUsersPage';
import Default from './subMenu/Default';
import EditHouse from './subMenu/EditHouse';
import AddHouse from './subMenu/AddHouse';
import NotFound from './subMenu/NotFound';

class AdminPage extends Component {

  render() {
    return (
      <div>
        <div className="col-sm-2">
          <div className="navbar-collapse collapse sidebar-navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to={`/admin/users`}>users</Link></li>
              <li><Link to={`/admin/editHouse`}>Edit house</Link></li>
              <li><Link to={`/admin/addHouse`}>Add house</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-10">
          <Switch>
            <Route exact path='/admin/' component={Default} />
            <Route path='/admin/users' component={AllUsersPage} />
            <Route path='/admin/editHouse' component={EditHouse} />
            <Route path='/admin/addHouse' component={AddHouse} />
            {/*Must be the lowest point!*/}
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default AdminPage;