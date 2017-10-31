import React from 'react';
import ReactDOM from 'react-dom';
import './component/styles/index.css';
import { HashRouter,BrowserRouter} from "react-router-dom"
import App from "./component/App"


ReactDOM.render((
  <HashRouter>
    <App/>
  </HashRouter>
), document.getElementById('root'))