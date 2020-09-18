const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Subscriber = require('../../models/Subscriber');


// @route POST api/subscribers
// @desc Add a subsciber
// @access Private

router.post('/', auth, (req, res) => {
    const newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email
    });

    newSubscriber.save()
        .then(subscriber => res.json(subscriber))
        .catch(err => console.log(err));
});


module.exports = router;