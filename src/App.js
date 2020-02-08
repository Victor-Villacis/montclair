import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from "./components/Nav";
import Team from "./pages/Team/Team";
import About from "./pages/About/About";

// import "./App.css";


export default function App() {
  return (
<Router>
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={Team} />
      <Route exact path="/about" component={About} />
    </Switch>
  </div>

</Router>
  );
}