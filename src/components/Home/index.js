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
            <a className="link" href='www.pared.com'>Pared</a>
          </div>
          <div className="body-point">
            {'Frontend: I have 2 years of experience building with React and Redux'}
          </div>
          <div className="body-point">
            {'Backend: I have over 2 years of experience building Python services and using Node.js automating systems and building out endpoints'}
          </div>
          <div className="body-point">
            {'I enjoy climbing multiple times a week, and biking through the city for fun and to be the commute traffic'}
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
