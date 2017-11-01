import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "./pages/basic/Login";
import Logout from "./pages/basic/Logout";
import About from "./pages/basic/About";
import UserPage from "./pages/user/UserPage";
import AdminPage from "./pages/admin/AdminPage";
import TopMenu from "./pages/basic/TopMenu";
import Rental from "./pages/basic/Rental";
import Register from "./pages/basic/Register";

function App() {
  return (
    <div>
      <TopMenu />
      <Switch>
        <Route path="/rental" component={Rental} />
        
        <Route path="/user" component={UserPage} />
        <Route path="/admin" component={AdminPage} />

        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </div>
  )
}
export default App;
