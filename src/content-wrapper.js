import React from 'react';
import Home from './content/home';
import Skills from './content/skills';
import { Switch, Route } from "react-router-dom";

class ContentWrapper extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
              <Switch>
                <Route path="/skills">
                  <Skills />
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