import React, { Component } from 'react'
//import userData from "../../facades/userFacade";
import Auth from '../../authorization/auth';
import {
  Link,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AddLocation from './subMenu/house/addLocation';
import Default from './subMenu/Default';
import NotFound from './subMenu/NotFound';

class UserPage extends Component {

  render() {
    return (
      <div>
        {
          Auth._isUser ? (
            <div>
              <div className="col-sm-2">
                <div className="navbar-collapse collapse sidebar-navbar-collapse">
                  <ul className="nav navbar-nav">
                    <li><Link to={`/user/addLocation`}>Add location</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-10">
                <Switch>
                  <Route exact path='/user/' component={Default} />
                  <Route path='/user/addLocation' component={AddLocation} />
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

export default UserPage;