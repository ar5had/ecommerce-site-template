import React, { Component, PropTypes } from 'react';

import './styles.sass';

class AddItemPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.modalWrapper.classList.add(this.props.openClass);
    }, 50);
  }

  close() {
    this.modalWrapper.classList.remove(this.props.openClass);
    setTimeout(() => {
      this.props.close();
    }, 850);
  }

  render() {
    return (
      <div className="addItemWrapper" ref={node => { this.modalWrapper = node; }}>
        <div className="hider" />
        <div className="modal">
          <div className="heading">
            <h3>Add Item</h3>
          </div>
          <div className="itemWrapper">
            <div className="itemPicWrapper">
              <div className="img" />
              <p className="imgText frm">Upload Item Picture</p>
            </div>
            <div className="itemInfoWrapper">
              <div className="inputWrapper">
                <label htmlFor="itemName">Name:</label>
                <input id="itemName" name="itemName" type="text" className="itemName" placeholder="Enter Name" required />
              </div>
              <div className="priceWrapper">
                <div className="inputWrapper">
                  <label htmlFor="itemPrice">Price:</label>
                  <input min="0" id="itemPrice" name="itemPrice" type="number" className="itemPrice" placeholder="Enter Price" required />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="itemCurrency">Currency:</label>
                  <input id="itemCurrency" name="itemCurrency" type="text" className="itemCurrency" placeholder="Enter Currency" />
                </div>
              </div>
              <div className="inputWrapper">
                <label htmlFor="itemDescription">Description:</label>
                <textarea name="itemDescription" id="itemDescription" className="itemDescription" placeholder="Enter Item Description" />
              </div>
              <div className="inputWrapper">
                <label htmlFor="itemTags">Tags(Comma Separated):</label>
                <textarea name="itemTags" id="itemTags" className="itemTags" placeholder="Enter Tags" />
              </div>
            </div>
          </div>
          <div className="buttonWrapper">
            <button className="saveItemBtn" onClick={this.close.bind(this)}>Save</button>
            <button className="cancelItemBtn" onClick={this.close.bind(this)}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

AddItemPage.propTypes = {
  close: PropTypes.func,
  openClass: PropTypes.string
};

export default AddItemPage;
