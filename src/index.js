import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from "./Main"
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root')
);

