'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  picture: String,
  booksPosted: Array,
  booksBought: Array,
  address: {
    houseNo: String,
    city: String,
    state: String,
    landmark: String,
    street: String,
    pinCode: String
  },
  google: {
    id: String,
    token: String,
    email: String
  },
  twitter: {
    id: String,
    token: String,
    username: String
  },
  facebook: {
    id: String,
    token: String,
    email: String
  }
});

module.exports = mongoose.model('User', User);
