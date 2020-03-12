import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Team from "./pages/Team/Team";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import { Auth } from "aws-amplify";
import LogIn from './components/auth/LogIn';
import Welcome from './components/auth/Welcome';
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Sponsors from "./pages/Sponsors";
import Partners from "./pages/Partners/Partners";
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
// import "./App.css";

class App extends React.Component {

  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = user => {
    this.setState({ user: user });
  }

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch(error) {
      if (error !== 'No current user') {
        console.log(error);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }
    return (

      <Router>
        <div>
          <Nav authProps={authProps} />
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} auth={authProps} />} />
              <Route exact path="/about" component={About} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/sponsors" component={Sponsors} />
              <Route exact path="/partners" component={Partners} />
              <Route exact path="/news" component={News} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/forgotpassword" render={(props) => <ForgotPassword {...props} auth={authProps} />} />
              <Route exact path="/forgotpasswordverification" render={(props) => <ForgotPasswordVerification {...props} auth={authProps} />} />
              <Route exact path="/changepassword" render={(props) => <ChangePassword {...props} auth={authProps} />} />
              <Route exact path="/changepasswordconfirmation" render={(props) => <ChangePasswordConfirm {...props} auth={authProps} />} />
            </Switch>
          <Footer />
        </div>
      </Router>
  );
}
}
export default App;
