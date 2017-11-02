import React, { Component } from 'react'
import adminData from "../../../../facades/adminFacade";
import EditUser from "./EditUser";
import {
  Link,
  Switch,
  Route
} from "react-router-dom";

class AllUsersPage extends Component {

  constructor() {
    super();
    this.state = { message: "", data: "", err: "" }
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
      var message = "";
      for (let i = 0; i < data.length; i++) {
        if (i === data.length - 1) {
          message += data[i];
        } else {
          message += data[i] + " , ";
        }
      }
      this.setState({ err: "", data: data, message: message });
    }, "api/admin/users");
  }

  render() {
    return (
      <div>
        <div className='col-sm-6'>
          <h2>All users</h2>
          <p>This list contains all the users in the system</p>
          <div>
            {userList(this.state.data)}
          </div>
          {this.state.err && (
            <div className="alert alert-danger errmsg-left" role="alert">
              {this.state.err}
            </div>
          )}
        </div>
        <div className='col-sm-6'>
          <Switch>
            <Route component={EditUser} />
          </Switch>
        </div>
      </div>
    )
  }
}

const userList = (users) => {
  const usersArr = users;

  let rows = [];
  for (var i = 0; i < usersArr.length; i++) {
    rows.push(
      <Link to={`/admin/users/` + usersArr[i]}>
        <li className='list-group-item'>
          {usersArr[i]}
        </li>
      </Link>
    )
  }
  return <ul className='list-group'> {rows} </ul>;
}

export default AllUsersPage;