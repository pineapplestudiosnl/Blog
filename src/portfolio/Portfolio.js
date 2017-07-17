import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {routes} from '../routes'
import {Link} from 'react-router-dom'
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }

  render() {
    const {height} = this.state;
    return (
      <div className="wrapper" style={{height}}>
        <div className="column portfolio">
          <Link to={routes.home}>whatever</Link>
        </div>
      </div>
    );
  }
}

export default Portfolio;
