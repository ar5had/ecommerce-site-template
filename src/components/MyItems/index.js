import React, { Component } from 'react';

import UserItem from '../UserItem/index';
import AddItemPage from '../AddItemPage/index';
import './styles.sass';

class MyItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }


  closeModal() {
    document.body.style.overflow = 'auto';
    this.setState({ modalOpened: false });
  }

  getModal() {
    if (this.state.modalOpened) {
      return <AddItemPage close={this.closeModal.bind(this)} />;
    } else {
      return;
    }
  }

  openModal() {
    document.body.style.overflow = 'hidden';
    this.setState({ modalOpened: true });
  }

  render() {
    return (
      <div className="myItemsWrapper">
        {this.getModal()}
        <div className="addTradeWrapper">
          <button
            onClick={() => {
              this.openModal();
            }}
            className="tradeBtn addItemBtn">
            + Add Item
          </button>
        </div>
        {[1, 2].map((e, i) => <UserItem key={i} editModal={this.openModal.bind(this)}/>)}
      </div>
    );
  }
}

export default MyItems;
