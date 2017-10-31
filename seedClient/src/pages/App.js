import React from "react"
import {Route, Switch } from "react-router-dom"
import Login from "./Login";
import Logout from "./Logout";
import About from "./About";
import UserPage from "./UserPage";
import RandomPage from "./RandomPage";
import AdminPage from "./AdminPage";
import AllUsersPage from "./AllUsersPage";
import TopMenu from "./TopMenu";
import Rental from "./Rental";

function App() {
  return (
    <div>
      <TopMenu />
      <Switch>
        <Route path="/rental" component={Rental} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/about" component={About} />
        <Route path="/user" component={UserPage} />
        <Route path="/users" component={AllUsersPage} />
        <Route path="/random" component={RandomPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </div>
  )
}
export default App;