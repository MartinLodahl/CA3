import React, { Component } from 'react'
import adminData from "../../facades/adminFacade";
import { 
  Link,
  Switch,
  Route
} from "react-router-dom";
import AllUsersPage from './AllUsersPage';

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
          <Switch>
            <Route path='/admin/users' component={AllUsersPage}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default AdminPage;