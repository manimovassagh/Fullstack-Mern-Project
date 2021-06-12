const express = require('express');

const router = express.Router();


// Item model
const Item = require('../../models/Item')


//@route Get api/item
//@desc Creat a post
//@access Public

router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  })
  newItem.save().then(item => res.json(item))
});
debugger
module.exports = router;