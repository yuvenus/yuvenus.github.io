import React from 'react';
import Home from './content/home';
import Skills from './content/skills';
import { Switch, Route, Redirect } from "react-router-dom";

class ContentWrapper extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/skills">
                  <Skills />
                </Route>
              </Switch>
              <Redirect from="/" to="home"/>
            </div>
        );
    }
}

export default ContentWrapper; 