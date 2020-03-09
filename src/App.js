import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Team from "./pages/Team/Team";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Sponsors from "./pages/Sponsors";
import Partners from "./pages/Partners/Partners"
// import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
