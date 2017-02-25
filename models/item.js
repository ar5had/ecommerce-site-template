'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
  name: String,
  picture: String,
  price: String,
  currency: String,
  negotiable: Boolean,
  condition: String,
  publicationYear: Number,
  isbnNo: String,
  address: {
    houseNo: String,
    city: String,
    state: String,
    landmark: String,
    street: String,
    pinCode: String
  },
  tradeQueries: Array,
  bought: Boolean
});

module.exports = mongoose.model('Item', Item);
