const express = require('express');

const router = express.Router();


// Item model
const Item = require('../../models/Item')


//@route Get api/item
//@desc Get All Items
//@access Public

router.get('/', (req, res) => {
  Item.find()
    .sort({ data: -1 })
    .then(Items => res.json(Items))
});
debugger
module.exports = router;