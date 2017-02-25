import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.sass';

class TradeRequest extends Component {
  render() {
    return (
      <div className="trWrapper">
        <div className="upper">
          <div className="userImg" />
          <h4>
            <Link>Arshad Khan</Link> wants to trade with your item- <Link>Eloquent Javascript</Link>
          </h4>
        </div>
        <div className="tradeBtnWrapper lower">
          <button className="acceptBtn normalBtn">Accept</button>
          <button className="declineBtn normalBtn">Decline</button>
        </div>
      </div>
    );
  }
}

export default TradeRequest;
