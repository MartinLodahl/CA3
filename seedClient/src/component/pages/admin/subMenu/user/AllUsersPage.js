import React, { Component } from 'react'
import adminData from "../../../../facades/adminFacade";

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
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (i === data.length - 1) {
          console.log(data[i]);
          message += data[i];
        } else {
          console.log(data[i]);
          message += data[i] + " , ";
        }
      }
      this.setState({ err: "", data: data, message: message });
      console.log(message);
    }, "api/admin/users");
  }

  render() {
    return (
      <div>
        <h2>All users</h2>
        <p>This list contains all the users in the system</p>
        <div className="msgFromServer">
          {/*this.state.message*/ userList(this.state.data)}
        </div>
        {this.state.err && (
          <div className="alert alert-danger errmsg-left" role="alert">
            {this.state.err}
          </div>
        )}
      </div>
    )
  }
}

const userList = (users) => {
  const usersArr = users;
  console.log(usersArr);

  let rows = [];
  /*usersArr.forEach(function (e) {
    rows.push(
      <li>
        {e}
      </li>
    )
  }, this);*/

  for (var i = 0; i < usersArr.length; i++) {
    rows.push(
      <li>
        {usersArr[i]}
        {console.log('i: ' + i + " content: " + usersArr[i])}
      </li>
    )
  }
  return <li> {rows} </li>;
}

export default AllUsersPage;