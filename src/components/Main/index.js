import React, { Component } from 'react';
import './styles.sass';
import Item from '../Item/index';

class Homepage extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <main className="main">
        {"1234567890".split("").map((e, i) => <Item key={i} />)}
      </main>
    );
  }
}

export default Homepage;
