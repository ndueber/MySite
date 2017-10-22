import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import styles from './styles.css';
import DocumentTitle from  'react-document-title';

const Base = () => (
	<DocumentTitle title='Nick Dueber'>
	  <Router>
	    <div className="base container">
	    	<title>HTML Reference</title>
	      <Route exact path='/' component={Home} />
	    </div>
	  </Router>
  </DocumentTitle>
);

ReactDOM.render(
  <Base />,
  document.getElementById('react-entry')
);
