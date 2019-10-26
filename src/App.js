import React from 'react';
import Navigation from './navigation';
import ContentWrapper from './content-wrapper';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="router">
        <Navigation></Navigation>
        <ContentWrapper></ContentWrapper>
      </div>
    </Router>
  )
}

export default App;
