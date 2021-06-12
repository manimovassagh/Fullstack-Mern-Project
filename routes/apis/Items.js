const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item')

//@route Get api/item
//@desc Get All Items
//@access Public

router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

//@route Post api/item
//@desc post new Items
//@access Public

router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

//@route Delete api/item
//@desc delete Item
//@access Public

router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});
//export not forget!! with semi at end!!
module.exports = router;