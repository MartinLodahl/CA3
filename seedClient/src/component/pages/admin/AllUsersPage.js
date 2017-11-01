import React, { Component } from 'react'
import adminData from "../../facades/adminFacade";

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
      var message ="";
      for (let i=0; i< data.length;i++) {
        if(i==data.length-1){
          message+=data[i];
        }else {
        message+=data[i] + " , ";   
      }}
      this.setState({ err: "", data: data, message:message });
      console.log(message);
    }, "api/demoadmin/users");
  }

  render() {
    return (
      <div>
        <h2>Admins</h2>
        <p>This message is fetched from the server if you were properly logged in</p>
        <div className="msgFromServer">
        {this.state.message}
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

export default AllUsersPage;