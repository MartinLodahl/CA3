import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "./pages/basic/Login";
import Logout from "./pages/basic/Logout";
import About from "./pages/basic/About";
import UserPage from "./pages/user/UserPage";
import AdminPage from "./pages/admin/AdminPage";
import AllUsersPage from "./pages/admin/AllUsersPage";
import TopMenu from "./pages/basic/TopMenu";
import Rental from "./pages/basic/Rental";

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
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </div>
  )
}
export default App;