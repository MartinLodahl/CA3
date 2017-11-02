import React, { Component } from 'react';
//import adminData from "../../facades/adminFacade";
import {
  Link,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AllUsersPage from './subMenu/user/AllUsersPage';
import EditHouse from './subMenu/house/EditHouse';
import AddHouse from './subMenu/house/AddHouse';
import Default from './subMenu/Default';
import NotFound from './subMenu/NotFound';
import Auth from '../../authorization/auth';

class AdminPage extends Component {

  render() {
    return (
      <div>
        {
          Auth._isAdmin ? (
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
          ) : (<Redirect to="/" />)
        }

      </div>
    )
  }
}

export default AdminPage;