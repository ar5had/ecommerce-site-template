import React, { Component } from 'react';
import './styles.sass';

class Login extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="loginWrapper">
        <h3 className="loginHeading text-center">Login with your social account</h3>
        <div className="btnWrapper">
          <button className="loginBtn fbBtn">Facebook Login</button>
          <button className="loginBtn googleBtn">Google Login</button>
          <button className="loginBtn twitterBtn">Twitter Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
