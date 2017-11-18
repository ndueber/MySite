import React, { Component } from 'react';
import './styles.css';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import Github from 'react-icons/lib/fa/github';

export default class Home extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div className="home">
        <div className="header">
          <div className="name">
            Nick Dueber
          </div>
          <div className="job-title">
            Full Stack Engineer
          </div>
        </div>
        <div className="page-divider"></div>
        <div className="body">
          <div className="body-point">
            Hello! I am a senior full stack engineer at {' '}
            <a className="link" href='https://www.pared.com'>Pared</a>
          </div>
          <div className="body-point">
            {'Backend: I have over 2 years of experience building Python services and using Node.js to automate systems and services'}
          </div>
          <div className="body-point">
            {'Frontend: I have 2 years of experience building with React and Redux'}
          </div>
          <div className="body-point">
            {'I enjoy rock climbing, baking sour dough bread, and biking through the city to beat the commute traffic'}
          </div>
        </div>
        <div className="page-divider"></div>
        <div className="social-icons">
          <a className="icon" href={'https://www.linkedin.com/in/nicholas-dueber-80943973/'}><LinkedIn /></a>
          <a className="icon" href={'https://github.com/ndueber'}><Github /></a>
        </div>
      </div>
    );
  }
}
