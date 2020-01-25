import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./Components/contacts/Contacts";
import Header from "./Components/layouts/Header";
import AddContact from "./Components/contacts/AddContact";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./Components/layouts/pages/About";
import NotFound from "./Components/layouts/pages/NotFound";
import EditContact from "./Components/contacts/EditContact";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager Application" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/ajouter" component={AddContact} />
              <Route exact path="/edit/:id" component={EditContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
