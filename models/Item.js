const mongoosee = require('mongoose');
const Schema = mongoosee.Schema;


// Creat Schema for mongoose Database
const ItemSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Item = mongoosee.model('item', ItemSchema);
