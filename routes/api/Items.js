const express = require('express');
const router = express.Router();

const Items = require('../../models/Items');

router.get('/', (req, res) => {
  Items.find({}).then(result => {
    // const temp_result = [{ name: 'srinivasan', date: Date.now() }];
    return res.json(result);
  });
});

router.post('/', (req, res) => {
  const newItem = new Items({
    name: req.body.name
  });
  newItem.save().then(item => {
    console.log(item);
    res.json(item);
  });
});

router.delete('/:id', async (req, res) => {
  Items.findById({ _id: req.params.id })
    .then(Item =>
      Item.remove()
        .then(() => res.json({ success: true }))
        .catch(() => res.status(404).json({ success: false }))
    )
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
