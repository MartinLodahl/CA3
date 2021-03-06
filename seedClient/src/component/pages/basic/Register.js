import React, { Component } from 'react'

import auth from "../../authorization/auth";

class Register extends Component {
  constructor() {
    super();
    this.state = { err: "", user: {username:"",password:""} }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const user = this.state.user.username;
    const pass = this.state.user.password;
    auth.create(user, pass, (err, loggedIn) => {
      if (err) {
        return this.setState({ err: err.errorMessage });
      }
      this.setState({ err: "" });
      this.props.history.push("/");
    });
    setTimeout( function(){
      auth.login( user, pass, (err, loggedIn) => {
        /*
        TO make error handling? 
        if (err) {
          return this.setState({ err: err.errorMessage });
        }
        this.setState({ err: "" });
        this.props.history.push("/");
        */
      });
  }, 2000);
  }

  onChange = (e) => {
    const propertyName = e.target.id;
    const value = e.target.value;
    let user = this.state.user;
    user[propertyName] = value;
    this.setState({user});
  }

  render() {
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please sign up</h2>
          <input type="text" value={this.state.user.username} onChange={this.onChange} className="form-control" id="username" placeholder="User Name" required autoFocus />
          <input type="password" value={this.state.user.password} onChange={this.onChange} id="password" className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
          <br />
        </form>
        { this.state.err && ( 
          <div className="alert alert-danger errmsg"  role="alert"> 
            {this.state.err}
          </div>
        )}
      </div>
    )
  }
}

export default Register;
