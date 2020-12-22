import React from "react";
// import { Container } from "react-bootstrap";
import { HashRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"


function App() {
  return (
    <HashRouter basename="/">
      <Header />
    <div className="App">
      <Switch>
      
      
      <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/", "/portfolio"]}>
            <Portfolio />
          </Route>
          <Route exact path={["/", "/contact"]}>
            <Contact />
          </Route>
      </Switch>
    </div>
    <Footer />
    </HashRouter>
  );
}

export default App;
