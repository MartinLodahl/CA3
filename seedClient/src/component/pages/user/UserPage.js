import React, { Component } from 'react'
//import userData from "../../facades/userFacade";
import {
  Link,
  Switch,
  Route
} from "react-router-dom";

class UserPage extends Component {

  render() {
    return (
      <div>
        <div className="col-sm-1">
          <li><Link to={`/user/users`}>users</Link></li>
        </div>
        <div className="col-sm-11">
          {/* <Switch>
            <Route path='/user/users' component={} />
          </Switch> */}
        </div>
      </div>
    )
  }

}

export default UserPage;