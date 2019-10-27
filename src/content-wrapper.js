import React from 'react';
import Home from './content/home';
import About from './content/about';
import Resume from './content/resume';
import { Switch, Route } from "react-router-dom";

class ContentWrapper extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
              <Switch>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
        );
    }
}

export default ContentWrapper; 