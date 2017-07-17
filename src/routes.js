import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Homepage from './homepage/Homepage'
import Portfolio from './portfolio/Portfolio'
import Blog from './blog/Blog'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path={routes.home} component={Homepage}/>
          <Route path={routes.portfolio} component={Portfolio}/>
          <Route path={routes.blog} component={Blog}/>
        </div>
      </Router>
    );
  }
}

export default Routes;

export const routes = {
  home: "/",
  portfolio: "/portfolio",
  blog: "/blog"
}
