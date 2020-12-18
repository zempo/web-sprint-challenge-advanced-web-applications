import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.scss";

// components
import Login from "./components/Login";
import BubblePage from "./components/BubblePage.js";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Login} />
        <PrivateRoute path='/bubbles' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
