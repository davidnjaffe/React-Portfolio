import React from "react";
// import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"


function App() {
  return (
    <Router>
      <Header />
    <div className="App">
      <Switch>
      
      
      <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/", "/portfolio"]}>
            <Portfolio />
          </Route>
      </Switch>
    </div>
    <Footer />
    </Router>
  );
}

export default App;
