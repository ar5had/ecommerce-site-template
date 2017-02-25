import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.sass';

class ProposedTrade extends Component {
  render() {
    return (
      <div className="ptWrapper">
        <div className="upper">
          <div className="userImg" />
          <h4>
            You have proposed <Link>Arshad Khan</Link> for trading <Link>Eloquent Javascript</Link>
          </h4>
        </div>
        <div className="tradeBtnWrapper lower">
          <button className="cancelBtn normalBtn">Cancel Proposal</button>
        </div>
      </div>
    );
  }
}

export default ProposedTrade;
