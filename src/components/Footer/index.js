import React, { Component } from 'react';
import './styles.sass';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="has-link">
          Made by <a target="blank" href="http://iamarshad.com">Arshad Khan</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
