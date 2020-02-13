import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Team from "./pages/Team/Team";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Footer from "./components/Footer";

// import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Team} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
